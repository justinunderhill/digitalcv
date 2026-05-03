/* eslint-disable @typescript-eslint/no-require-imports */
const assert = require("node:assert/strict");
const fs = require("node:fs");
const Module = require("node:module");
const path = require("node:path");
const test = require("node:test");
const ts = require("typescript");

const routePath = path.join(__dirname, "..", "app", "api", "digital-twin", "route.ts");
const originalConsoleWarn = console.warn;

class MockOpenAI {
  static APIError = class APIError extends Error {
    constructor(status, message) {
      super(message);
      this.status = status;
    }
  };

  static handler = async () => {
    throw new Error("MockOpenAI.handler was not set");
  };

  constructor(options) {
    MockOpenAI.lastOptions = options;
    this.responses = {
      create: async (payload) => {
        MockOpenAI.lastPayload = payload;
        return MockOpenAI.handler(payload);
      },
    };
  }
}

function loadRoute() {
  const source = fs.readFileSync(routePath, "utf8");
  const compiled = ts.transpileModule(source, {
    compilerOptions: {
      esModuleInterop: true,
      module: ts.ModuleKind.CommonJS,
      target: ts.ScriptTarget.ES2022,
    },
    fileName: routePath,
  }).outputText;

  const routeModule = new Module(routePath, module);
  routeModule.filename = routePath;
  routeModule.paths = Module._nodeModulePaths(path.dirname(routePath));
  routeModule.require = (request) => {
    if (request === "openai") {
      return MockOpenAI;
    }

    if (request === "next/server") {
      return {
        NextResponse: {
          json: (body, init) => Response.json(body, init),
        },
      };
    }

    if (request === "@/lib/digital-twin-context") {
      return { digitalTwinSystemPrompt: "Test system prompt" };
    }

    if (request === "@/lib/digital-twin-fallback") {
      return {
        generateFallbackTwinAnswer: (prompt) => `Fallback answer for: ${prompt}`,
      };
    }

    return Module.prototype.require.call(routeModule, request);
  };

  routeModule._compile(compiled, routePath);
  return routeModule.exports;
}

function makeRequest(messages, clientId) {
  return new Request("http://localhost/api/digital-twin", {
    method: "POST",
    headers: {
      "content-type": "application/json",
      "x-real-ip": clientId,
    },
    body: JSON.stringify({ messages }),
  });
}

test.beforeEach(() => {
  delete process.env.OPENAI_MODEL;
  process.env.OPENAI_API_KEY = "sk-test-plausible-local-key";
  console.warn = () => {};
  MockOpenAI.handler = async () => ({ output_text: "Live answer" });
  MockOpenAI.lastOptions = undefined;
  MockOpenAI.lastPayload = undefined;
});

test.after(() => {
  console.warn = originalConsoleWarn;
  delete process.env.OPENAI_API_KEY;
  delete process.env.OPENAI_MODEL;
});

test("POST returns an OpenAI response with the configured default model", async () => {
  const { POST } = loadRoute();

  const response = await POST(
    makeRequest(
      [
        { role: "user", content: "What is your current focus?" },
        { role: "assistant", content: "AI systems." },
        { role: "user", content: "Tell me more." },
      ],
      "openai-success",
    ),
  );
  const body = await response.json();

  assert.equal(response.status, 200);
  assert.equal(body.mode, "openai");
  assert.equal(body.message, "Live answer");
  assert.equal(MockOpenAI.lastPayload.model, "gpt-4o-mini");
  assert.equal("reasoning" in MockOpenAI.lastPayload, false);
  assert.equal(MockOpenAI.lastPayload.input.some((message) => "phase" in message), false);
});

test("POST uses OPENAI_MODEL when configured", async () => {
  process.env.OPENAI_MODEL = "gpt-4o";
  const { POST } = loadRoute();

  await POST(
    makeRequest([{ role: "user", content: "What is your current focus?" }], "model-override"),
  );

  assert.equal(MockOpenAI.lastPayload.model, "gpt-4o");
});

test("POST returns profile fallback when OpenAI reports a model access issue", async () => {
  MockOpenAI.handler = async () => {
    throw new MockOpenAI.APIError(404, "model not found");
  };
  const { POST } = loadRoute();

  const response = await POST(
    makeRequest([{ role: "user", content: "What is your background?" }], "openai-404"),
  );
  const body = await response.json();

  assert.equal(response.status, 502);
  assert.equal(body.mode, "fallback");
  assert.match(body.warning, /gpt-4o-mini/);
  assert.equal(body.message, "Fallback answer for: What is your background?");
});
