export interface CapstoneProjectIdea {
  id: string;
  title: string;
  category: 'Service' | 'Micro-SaaS' | 'Skills & Plugins' | 'Data Play' | 'Analytics & Ops';
  tagline: string;
  description: string;
  targetBuyer: string;
  monetizationModel: string;
  primaryTools: string[];
  difficulty: 'Zero-Coding' | 'Beginner-Friendly' | 'Light Tech';
  startupInspirationId?: number;
}

export const CAPSTONE_NOTE = "These projects are curated launch suggestions to jumpstart your thinking. You are NOT locked into choosing from this list. Students are actively encouraged to bring their own company problem, client offer, or custom agent concept.";

export const CAPSTONE_PROJECT_IDEAS: CapstoneProjectIdea[] = [
  {
    id: 'zestimate-company-data',
    title: 'Zestimate for Company Data',
    category: 'Data Play',
    tagline: 'Audit & Valuate What a Firm\'s Operational Data is Worth to AI Labs',
    description: 'An autonomous appraisal agent that connects to a company\'s data room (support tickets, SOPs, chat archives, CRM notes) to calculate data quality, valuation range ($50k–$1M+), and generate an AI Lab Deal Sheet.',
    targetBuyer: 'Mid-size agencies, e-commerce brands, healthcare clinics, legal firms',
    monetizationModel: '$999 valuation report + 15–20% broker fee on completed data licensing deals',
    primaryTools: ['Claude 3.5 Sonnet', 'Data Valuation Formula Heuristics', 'PDF Report Generator'],
    difficulty: 'Zero-Coding',
    startupInspirationId: 1,
  },
  {
    id: 'google-analytics-for-agents',
    title: 'Google Analytics for Agents',
    category: 'Analytics & Ops',
    tagline: 'Inspect Which Autonomous AI Agents Visit Your Site & What They Want',
    description: 'A lightweight agent traffic monitor that analyzes server logs and incoming user-agents to detect which AI crawlers, personal shopping agents, and bots are visiting, what information they extract, and whether they cite your brand.',
    targetBuyer: 'Digital media publishers, SaaS startups, e-commerce storefronts',
    monetizationModel: '$49 – $149/mo software subscription per domain',
    primaryTools: ['OpenClaw Log Hook', 'Agent Identifier Registry', 'Claude Code Dashboard'],
    difficulty: 'Beginner-Friendly',
    startupInspirationId: 2,
  },
  {
    id: 'marie-kondo-company-data',
    title: 'Marie Kondo for Company Data',
    category: 'Data Play',
    tagline: 'Autonomous Data Sanitizer That Cleans Company Knowledge for AI',
    description: 'An agent that systematically scans messy Google Drives, Notion databases, and Slack archives, deduping outdated SOPs, resolving conflicting documentation, and formatting clean markdown ready for internal company agents.',
    targetBuyer: 'Fast-growing startups, creative agencies, remote distributed teams',
    monetizationModel: '$1,500 – $3,500 one-off workspace cleanup fee + $350/mo maintenance',
    primaryTools: ['Google Drive / Notion API', 'Vector Embeddings', 'Claude Code Cleaner'],
    difficulty: 'Zero-Coding',
    startupInspirationId: 5,
  },
  {
    id: 'geek-squad-for-ai',
    title: 'Geek Squad for AI (Agent Concierge)',
    category: 'Service',
    tagline: 'Turnkey Personal Agent Setup & Training for Families and SMBs',
    description: 'A high-ticket, done-for-you concierge service that installs and configures private, secure personal agents (OpenClaw, Meta Muse) on client laptops or private cloud boxes to handle inbox triage, scheduling, and family ops.',
    targetBuyer: 'Busy solo founders, high-net-worth families, accountants, boutique consultancies',
    monetizationModel: '$1,200 – $3,000 setup fee + $299/mo on-demand agent maintenance retainer',
    primaryTools: ['OpenClaw Multi-Channel', 'Local Ollama / Claude', 'Secure Desktop Sandboxes'],
    difficulty: 'Zero-Coding',
    startupInspirationId: 9,
  },
  {
    id: 'honey-that-haggles',
    title: 'Honey That Haggles for You',
    category: 'Micro-SaaS',
    tagline: 'Autonomous Negotiating Agent That Secures Price Discounts',
    description: 'An agent that automatically emails vendors, SaaS providers, or marketplace sellers with courteous, data-backed negotiation letters, finding competitor quotes, and asking for annual contract discounts or volume matching.',
    targetBuyer: 'Bootstrapped founders, procurement teams, power online shoppers',
    monetizationModel: '15% – 25% contingency fee on total money saved, or $29/mo flat rate',
    primaryTools: ['Email API (Mailgun / Resend)', 'Competitor Pricing Scraper', 'Negotiation Prompt Loop'],
    difficulty: 'Beginner-Friendly',
    startupInspirationId: 24,
  },
  {
    id: 'ai-assisted-microsaas',
    title: '1-Person AI-Assisted Micro-SaaS',
    category: 'Micro-SaaS',
    tagline: 'Single-Purpose Web App Built & Deployed via Natural Language',
    description: 'A niche, high-margin software application (e.g., an automated invoice & AR payment chaser, client onboarding portal, or localized lead qualifier) conceived and coded using Claude Code and Cursor with zero manual programming.',
    targetBuyer: 'Niche vertical businesses, freelancers, boutique agencies',
    monetizationModel: '$29 – $99/mo per user software subscription (recurring MRR)',
    primaryTools: ['Claude Code (Auto Mode)', 'Cursor', 'Supabase / SQLite', 'Vercel / Cloud Run'],
    difficulty: 'Beginner-Friendly',
    startupInspirationId: 3,
  },
];
