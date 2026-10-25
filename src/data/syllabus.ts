export interface SyllabusWeek {
  week: number;
  title: string;
  theme: string;
  goal: string;
  summary: string;
  tools: string[];
  breakdown: {
    category: 'Concepts & Architecture' | 'Hands-On Lab' | 'Money Spotlight';
    title: string;
    details: string;
  }[];
  moneySpotlight: {
    title: string;
    dealRange: string;
    description: string;
    actionablePlay: string;
  };
  deliverable: {
    title: string;
    description: string;
    outcomeType: string;
  };
}

export const SYLLABUS_WEEKS: SyllabusWeek[] = [
  {
    week: 1,
    title: 'Mindset, Landscape & First Wins',
    theme: 'Foundations (Tue, Wed, Sat, Sun • 9-10 PM GMT+1)',
    goal: 'Understand what agents actually are, master the 2026 tool landscape, and ship your first 3 useful agentic workflows.',
    summary: 'Demystify agents vs. standard chatbots (perception → planning → tool use → memory → iteration). Explore OpenClaw, GrokBot, Meta Muse, and Claude Code. Discover high-ROI use cases and the booming operational data licensing economy.',
    tools: ['OpenClaw', 'GrokBot', 'Meta Muse', 'Claude Code', 'Ollama / Local APIs'],
    breakdown: [
      {
        category: 'Concepts & Architecture',
        title: 'Agents vs Chatbots: The Autonomy Stack',
        details: 'Understanding how perception, multi-step planning, tool selection, persistent memory, and self-correcting iteration transform simple prompting into autonomous work.',
      },
      {
        category: 'Concepts & Architecture',
        title: 'The Late-2026 Agent Ecosystem Map',
        details: 'Comparative deep dive into OpenClaw (local control plane in WhatsApp/Telegram), GrokBot (cloud teammates on scheduled loops), Meta Muse (action-oriented consumer agent), and Claude Code (agentic software creation).',
      },
      {
        category: 'Hands-On Lab',
        title: '3 Immediate First Wins',
        details: 'Set up low-friction access and build 3 production workflows: (1) Deep web research agent, (2) Smart inbox triage & summarizer, (3) Content outline-to-draft autonomous pipeline.',
      },
      {
        category: 'Money Spotlight',
        title: 'Selling Operational Data to AI Labs',
        details: 'Overview of licensing operational company data (SOPs, ticket histories, CRM threads) to AI frontier labs. Typical business deal sizes range from $100k to $2M+, alongside individual RLHF & preference data opportunities.',
      },
    ],
    moneySpotlight: {
      title: 'Operational Data Licensing & AI Training Play',
      dealRange: '$100k – $2M+ deals (plus solo data bounty plays)',
      description: 'Frontier AI labs urgently need verified, real-world operational workflows, CRM logs, and anonymized support tickets to train domain agents. Learn who buys, valuation benchmarks, and preparation checklists.',
      actionablePlay: 'Audit your or your clients’ existing SOPs & ticket logs to identify licensing-ready operational assets.',
    },
    deliverable: {
      title: 'Personal "Agent Opportunity Map"',
      description: 'A structured dossier identifying 5 high-impact problems in your personal work, business, or client niche that agents can solve for immediate cash or operational leverage.',
      outcomeType: 'Strategic Opportunity Dossier',
    },
  },
  {
    week: 2,
    title: 'AI-Assisted Coding + Building Real Agents',
    theme: 'Tool Mastery (Tue, Wed, Sat, Sun • 9-10 PM GMT+1)',
    goal: 'Become dangerous with natural-language software creation and multi-step autonomous agent architectures.',
    summary: 'Deep dive into AI-assisted coding (describing outcomes in plain language, iterative feedback loops, knowing when to prompt naturally vs. adding structure). Build production business agents with tool use, memory, and scheduled triggers.',
    tools: ['Claude Code (Auto Mode)', 'Cursor & AI-Assisted Editors', 'OpenClaw Skills & Plugins', 'Model Routing'],
    breakdown: [
      {
        category: 'Concepts & Architecture',
        title: 'The AI-Assisted Coding Evolution',
        details: 'Natural-language engineering evolved for 2026: guiding agentic systems with conversational intent, orchestrating parallel sub-agents, and steering code quality without writing boilerplate.',
      },
      {
        category: 'Concepts & Architecture',
        title: 'Core Agent Execution Patterns',
        details: 'Mastering dynamic tool use, vector & SQLite memory layers, multi-agent teams, scheduled heartbeat wakeups, model routing (cheap vs frontier models), and permission guardrails.',
      },
      {
        category: 'Hands-On Lab',
        title: 'Build a Live Business Operator Agent',
        details: 'Build and deploy a real-world operator agent: choose between an autonomous lead researcher + personalized outreach drafter, an automated invoice & AR payment chaser, or a personal chief-of-staff living in WhatsApp via OpenClaw.',
      },
      {
        category: 'Money Spotlight',
        title: 'Packaging & Selling Agent Skills & Micro-Agents',
        details: 'How to productize modular agent skills/plugins for OpenClaw or standalone niches. Initial client acquisition tactics: "I build custom operational agents for [industry] businesses."',
      },
    ],
    moneySpotlight: {
      title: 'Packaged Skills & Micro-Agent Retainers',
      dealRange: '$1,500 – $5,000 setup + $500/mo maintenance',
      description: 'Local businesses and solopreneurs lack the time to build their own systems. Packaging a single-purpose agent (e.g. AR collection or lead enrichment) creates recurring retainers with near-zero marginal cost.',
      actionablePlay: 'Build 1 reusable skill module that plugs directly into OpenClaw, Slack, or webhooks.',
    },
    deliverable: {
      title: 'Working Multi-Step Business Agent + Demo',
      description: 'A fully functional agent solving a real small-business bottleneck, paired with a 2-minute Loom screen recording demonstrating real autonomous tool execution.',
      outcomeType: 'Functional Agent & Video Teardown',
    },
  },
  {
    week: 3,
    title: 'Systems & Workflows + Monetization Models',
    theme: 'Systems & Workflows (Tue, Wed, Sat, Sun • 9-10 PM GMT+1)',
    goal: 'Move from experimental projects to viable commercial offerings, client retainers, and productized agent businesses.',
    summary: 'Analyze field-tested monetization models: business ops retainers, AI-assisted micro-SaaS, data licensing syndicates, agent marketplaces, and one-person multi-agent agencies. Learn non-technical client acquisition.',
    tools: ['n8n / Zapier', 'Paystack / Stripe Billing', 'Marketplace Packaging', 'Client Onboarding Portals'],
    breakdown: [
      {
        category: 'Concepts & Architecture',
        title: 'The 5 High-Margin Monetization Playbooks',
        details: '(1) Vertical ops agents, (2) AI-assisted micro-SaaS products, (3) Data licensing & anonymization brokering, (4) Agent skill marketplaces, (5) Solo-operated multi-agent services.',
      },
      {
        category: 'Hands-On Lab',
        title: 'Market Validation Sprint',
        details: 'Select your Capstone pathway, draft a 1-page commercial offer, and interview 3–5 potential prospective users or businesses to validate real willingness-to-pay before writing more code.',
      },
      {
        category: 'Money Spotlight',
        title: 'Pricing, Proposals & Non-Technical GTM',
        details: 'Structuring one-time setup vs monthly retainer vs outcome-based pricing. Pitching business ROI instead of AI jargon. Screen-share demos that close deals in one 20-minute call.',
      },
      {
        category: 'Concepts & Architecture',
        title: 'Reliability, Human-in-the-Loop & Cost Guardrails',
        details: 'Preventing token runaway costs, handling API edge-case exceptions, and designing elegant human escalation approvals when confidence scores drop.',
      },
    ],
    moneySpotlight: {
      title: 'Productized "Agent-as-a-Service" Agency Model',
      dealRange: '$3,000 – $10,000 upfront + $1,000–$2,500/mo retainer',
      description: 'Instead of custom engineering from scratch, package a standardized vertical solution (e.g. automated lead qualification + calendar booking for real estate or dental practices).',
      actionablePlay: 'Formulate an irresistible "Pay-On-Performance" or "Time-Saved Guarantee" client offer.',
    },
    deliverable: {
      title: 'Capstone Proposal & First Validated Prototype',
      description: 'A complete monetization plan, clear pricing structure, target customer avatar, and an early clickable/functional prototype validated with real feedback.',
      outcomeType: 'Validated Offer & Prototype Blueprint',
    },
  },
  {
    week: 4,
    title: 'Capstone Build, Ship & Scale',
    theme: 'Launch & Capstone (Tue, Wed, Sat, Sun • 9-10 PM GMT+1)',
    goal: 'Ship a live, publicly accessible capstone project that has a clear path to revenue or proven market validation.',
    summary: 'Intensive coached build sprints. Deploy live applications with AI-assisted landing pages, checkout, and simple onboarding. Present at Demo Day and map your 30-day post-bootcamp scaling plan.',
    tools: ['Claude Code Cloud Sessions', 'AI-Assisted Web Apps', 'Automated Payments', 'Deployment & Monitoring'],
    breakdown: [
      {
        category: 'Hands-On Lab',
        title: 'Build Sprints & 1-on-1 Architecture Teardowns',
        details: 'Live paired building, removing blockers, polishing user flows, testing failure states, and deploying live production endpoints.',
      },
      {
        category: 'Concepts & Architecture',
        title: 'Production Hardening & Deployment',
        details: 'Multi-user session handling (OpenClaw style), environment variables, webhook security, rate limits, and latency optimization.',
      },
      {
        category: 'Hands-On Lab',
        title: 'Launch Stack: Landing Page, Payments & Onboarding',
        details: 'Deploying a sleek public page with AI-assisted coding, hooking up Paystack/Stripe checkout, and automating WhatsApp onboarding notifications.',
      },
      {
        category: 'Money Spotlight',
        title: 'Cohort Demo Day & Next 30-Day Revenue Roadmap',
        details: 'Live presentations to peers and invited industry guests. Personalized roadmap to acquire your first 3 paying clients or product users in the month following graduation.',
      },
    ],
    moneySpotlight: {
      title: 'Live Launch, First Dollar & Scaling Engine',
      dealRange: 'Immediate first revenue or validated product-market fit',
      description: 'By Demo Day, your project is live on the internet, accessible to real users, with payments hooked up and automated execution in place.',
      actionablePlay: 'Submit your live URL, publish your one-page case study, and pitch to your first live target list.',
    },
    deliverable: {
      title: 'Live Shipped Capstone + 1-Page Case Study',
      description: 'A deployed, working agent or micro-tool URL with payments/booking enabled, alongside a problem → solution → monetization mechanism case study.',
      outcomeType: 'Public Shipped Product & Case Study',
    },
  },
];
