export type PortfolioProject = {
  slug: string;
  title: string;
  category: string;
  detail: string;
  liveUrl: string;
  overview: string;
  buildFocus: string[];
  skills: string[];
  proofPoints: string[];
};

export const portfolioProjects: PortfolioProject[] = [
  {
    slug: "finally",
    title: "Finally",
    category: "Product build",
    detail:
      "Product build demonstrating structured UX, deployment discipline, and practical web delivery.",
    liveUrl: "https://finally-beryl.vercel.app/",
    overview:
      "A product snapshot focused on turning a digital concept into a usable shipped experience. The case study highlights product structure, interface clarity, and the delivery discipline needed to move from idea to working web application.",
    buildFocus: [
      "Structuring the product experience around clear user actions.",
      "Designing a polished interface that feels complete rather than experimental.",
      "Keeping implementation decisions aligned with deployment and maintainability.",
    ],
    skills: ["Product shaping", "UX structure", "Next.js", "React", "Deployment"],
    proofPoints: [
      "Shows the ability to frame a product idea into a coherent web experience.",
      "Demonstrates front-end build discipline and responsive layout thinking.",
      "Reflects practical deployment experience without exposing production internals.",
    ],
  },
  {
    slug: "prelegal",
    title: "PreLegal",
    category: "Legal workflow",
    detail:
      "Legal workflow concept showing process design, task flow, and digital product thinking.",
    liveUrl: "https://prelegal-zeta.vercel.app/login/",
    overview:
      "A workflow-led legal tooling snapshot that demonstrates how structured information, task flow, and interface decisions can support a more usable operational process.",
    buildFocus: [
      "Mapping a complex professional process into clearer user steps.",
      "Reducing friction around intake, review, and next-action decisions.",
      "Designing for confidence in a domain where clarity and trust matter.",
    ],
    skills: ["Workflow design", "Information architecture", "React", "UX writing", "Process thinking"],
    proofPoints: [
      "Shows capability in translating a domain workflow into product structure.",
      "Demonstrates judgement around forms, hierarchy, and user guidance.",
      "Connects digital product execution with service process improvement.",
    ],
  },
  {
    slug: "dcee-digital-transformation",
    title: "DCEE Digital Transformation",
    category: "Digital transformation",
    detail:
      "Digital transformation showcase focused on business clarity, service structure, and execution.",
    liveUrl: "https://dcee-digital-transformation.vercel.app/",
    overview:
      "A transformation-focused showcase that reflects Justin's background in delivery, stakeholder alignment, service structure, and digital enablement.",
    buildFocus: [
      "Turning a transformation message into clear service architecture.",
      "Presenting digital change in a way that feels practical and credible.",
      "Supporting business positioning with structured content and clear calls to action.",
    ],
    skills: [
      "Digital transformation",
      "Content architecture",
      "Stakeholder framing",
      "Service positioning",
      "Delivery planning",
    ],
    proofPoints: [
      "Shows how strategic transformation work can be translated into a public-facing digital experience.",
      "Demonstrates business communication, layout hierarchy, and delivery-aware positioning.",
      "Reflects the bridge between technical build work and operational change.",
    ],
  },
  {
    slug: "the-abbotsford",
    title: "The Abbotsford",
    category: "Property showcase",
    detail: "Property development showcase for exclusive duplex living.",
    liveUrl: "https://theabbotsford.vercel.app/",
    overview:
      "A property-focused showcase designed around trust, clarity, and helping a visitor understand the value of a development quickly.",
    buildFocus: [
      "Creating a polished property presentation without overwhelming the visitor.",
      "Balancing premium positioning with practical information hierarchy.",
      "Designing a visual flow that supports enquiry intent while protecting contact privacy here.",
    ],
    skills: ["Landing page design", "Visual hierarchy", "Responsive UI", "Conversion flow", "Content structure"],
    proofPoints: [
      "Demonstrates ability to build a high-trust marketing experience.",
      "Shows judgement around product/place presentation and buyer intent.",
      "Highlights design consistency across desktop and mobile layouts.",
    ],
  },
  {
    slug: "renoclean-sa",
    title: "RenoClean SA",
    category: "Specialist service",
    detail:
      "Specialist service website demonstrating positioning, trust-building, and conversion flow.",
    liveUrl: "https://renoclean-sa.vercel.app/",
    overview:
      "A service-business snapshot focused on making a specialist offer easy to understand, credible, and action-oriented without exposing client contact details from the live site.",
    buildFocus: [
      "Clarifying the service offer for a specific customer need.",
      "Building trust through concise service framing and professional presentation.",
      "Creating a conversion-minded page flow that gives the live service site a clear commercial path.",
    ],
    skills: ["Service positioning", "Conversion UX", "Responsive design", "SEO fundamentals", "Trust signals"],
    proofPoints: [
      "Shows practical small-business web delivery capability.",
      "Demonstrates service clarity and conversion-focused information hierarchy.",
      "Connects digital marketing experience with front-end execution.",
    ],
  },
  {
    slug: "clinical-emergencies",
    title: "Clinical Emergencies",
    category: "Healthcare support",
    detail:
      "Healthcare support website focused on clarity, urgency, and accessible service information.",
    liveUrl: "https://clinical-emergencies-vert.vercel.app/",
    overview:
      "A healthcare-support snapshot where the core design problem is clarity under pressure: users need to understand the service, trust the offer, and find the right path quickly.",
    buildFocus: [
      "Prioritising accessible, direct service information.",
      "Designing for users who may be making decisions under time pressure.",
      "Balancing professional credibility with simple navigation and clear next steps.",
    ],
    skills: ["UX clarity", "Healthcare service design", "Information hierarchy", "Responsive UI", "Accessibility thinking"],
    proofPoints: [
      "Demonstrates sensitivity to high-trust, high-urgency user contexts.",
      "Shows ability to structure service information for fast comprehension.",
      "Reflects practical judgement around tone, layout, and user confidence.",
    ],
  },
];

export function getPortfolioProject(slug: string) {
  return portfolioProjects.find((project) => project.slug === slug);
}
