# Code Review

## Findings

### 1. High: Production builds are not deterministic because fonts are fetched from Google at build time
File: `app/layout.tsx:2-12`

I was able to reproduce a failing `npm run build` during review because `next/font/google` attempted to fetch `Plus_Jakarta_Sans` and `Sora` from `fonts.gstatic.com` and the requests failed. A second build succeeded, which confirms the risk is environmental and intermittent rather than a syntax issue. That still leaves the project vulnerable to flaky CI, offline builds, and deploy failures.

Remedial action:
- Replace remote Google font fetching with locally hosted fonts via `next/font/local`, or vendor the required font files into the repository.
- If remote fonts must stay, document that the build requires outbound internet access and add CI retries, but local fonts are the more reliable fix.

### 2. High: The public chat endpoint has no rate limiting or abuse protection
File: `app/api/digital-twin/route.ts:79-166`

`POST /api/digital-twin` is callable without any throttling, authentication, CAPTCHA, origin checks, or per-IP limits. If this site is deployed publicly, a bot or even a single enthusiastic user can generate repeated OpenAI calls and create cost exposure or service degradation.

Remedial action:
- Add rate limiting at the route level or edge layer.
- Add basic request validation and abuse controls such as per-IP quotas, bot protection, and server-side logging of excessive usage.
- Consider caching repeated starter prompt responses if the product experience allows it.

### 3. Medium: OpenAI failures are silently converted into successful fallback responses, which hides operational incidents
File: `app/api/digital-twin/route.ts:129-164`

The fallback behavior is user-friendly, but every OpenAI auth/model/network failure is transformed into a normal `200` response with `mode: "fallback"`. That means monitoring, logs, uptime checks, and future client code cannot reliably distinguish "the AI is working" from "the AI is degraded." This is especially risky for production support because outages can go unnoticed.

Remedial action:
- Preserve the fallback UX, but also emit structured server logs for degraded responses.
- Consider returning a non-2xx status for genuine upstream failures when the caller is expected to monitor service health.
- At minimum, add explicit telemetry for fallback activation counts and failure reasons.

### 4. Medium: The chat UI initially reports `OpenAI Live` even when the backend is already degraded
File: `app/components/digital-twin-chat.tsx:41-42`
File: `app/components/digital-twin-chat.tsx:145-147`

The component initializes `mode` to `"openai"` before any request is made. If the environment is invalid or the backend is already in fallback mode, the UI still advertises `OpenAI Live` until the first response comes back. That creates a misleading first impression and can confuse debugging.

Remedial action:
- Initialize the UI in a neutral state such as `checking` or `unknown`.
- Add a lightweight status endpoint or fetch initial server capability on mount.
- Only show `OpenAI Live` once the route has confirmed that mode.

### 5. Medium: Critical chat behavior has no automated test coverage
Files reviewed:
- `app/api/digital-twin/route.ts`
- `lib/digital-twin-fallback.ts`
- `app/components/digital-twin-chat.tsx`

The most failure-prone logic in the project is now the Digital Twin flow, but there are no tests covering:
- request sanitization
- fallback selection
- degraded mode responses
- keyboard submission behavior
- UI mode badge transitions

Given that this feature mixes client state, server logic, third-party API behavior, and fallback logic, regressions are likely without tests.

Remedial action:
- Add unit tests for `sanitizeMessages`, `normalizeApiKey`, and `generateFallbackTwinAnswer`.
- Add API tests for the OpenAI-success path and fallback path.
- Add a UI integration test for sending a message and rendering the returned response.

### 6. Low: Dead generated CSS remains in the repo and references removed font variables
File: `app/page.module.css:1-141`

`app/page.module.css` appears to be leftover scaffold code from `create-next-app`. It is not imported anywhere in the current homepage implementation, and it still references `--font-geist-sans`, which no longer exists after the font migration in `app/layout.tsx`. This is not breaking runtime behavior today, but it is misleading maintenance noise.

Remedial action:
- Remove `app/page.module.css` if it is no longer used.
- If it is intentionally kept for future reuse, update it so it does not reference removed font variables.

### 7. Low: Fallback responses are intentionally simple, but the matching logic is brittle for real-world prompts
File: `lib/digital-twin-fallback.ts:5-77`

The fallback implementation uses first-match keyword checks. This works for demos, but it can give incomplete answers for multi-part questions, synonyms not in the keyword list, or prompts that should combine multiple profile areas. Because fallback mode is now part of the resilience story, its quality matters more than a normal placeholder would.

Remedial action:
- Expand matching to support multi-intent prompts.
- Add tests for ambiguous prompts and synonyms.
- Consider moving fallback content into structured data and generating answers from that data instead of hard-coded branches.

## Open Questions And Assumptions

- I assumed this site may eventually be deployed publicly, so I treated cost control and route abuse as real risks.
- I assumed the fallback behavior is intentional product design, not just temporary debugging code.
- I did not review `Profile.pdf` content accuracy against the written copy in detail; this review focuses on code quality and behavior.

## Verification Performed

- `npm run lint`: passed
- `npm run build`: failed once due remote font fetch errors, then passed on retry

## Overall Summary

The project is in good shape for a polished personal site: the structure is straightforward, the UX is strong, and the Digital Twin has a sensible resilience story. The biggest risks are operational rather than visual: flaky builds due to remote fonts, unprotected API cost exposure, and degraded OpenAI failures being hidden behind successful fallback responses. Addressing those areas would make the project significantly more production-ready.
