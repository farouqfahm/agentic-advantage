import React, { useState } from 'react';
import { 
  ArrowRight, 
  CheckCircle2, 
  Terminal, 
  ChevronRight,
  TrendingUp,
  Radio,
  Bot,
  Sparkles,
  Zap,
  ExternalLink,
  X,
  Download
} from 'lucide-react';

interface HeroSectionProps {
  remainingSeats: number;
  totalSeats: number;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ remainingSeats, totalSeats }) => {
  const [activeTab, setActiveTab] = useState<'openclaw' | 'grokbot' | 'muse' | 'claude'>('openclaw');
  const [showFlyerModal, setShowFlyerModal] = useState<boolean>(false);

  const scrollToRegister = () => {
    const el = document.getElementById('register');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToSyllabus = () => {
    const el = document.getElementById('syllabus');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const systems = {
    openclaw: {
      title: 'OpenClaw (Local-First WhatsApp/Telegram Agent)',
      status: 'active • daemon :8080',
      command: 'openclaw skill trigger --name "b2b_lead_qualifier" --channel "whatsapp"',
      output: [
        '> Incoming WhatsApp message from +1 (415) 890-2134: "Need automated AR collections for 40 clients."',
        '> Evaluating tool: vector search in client_knowledge_base.sqlite [retrieved 3 SOP rules]',
        '> Routing to Claude 3.5 Sonnet for tone-matched qualification and pricing structure proposal',
        '> Dispatched interactive booking link + created qualified deal in Notion CRM ($3,200 setup).',
      ],
      metric: 'Outcome: $3.2k retainer lead qualified without human intervention',
    },
    grokbot: {
      title: 'GrokBot (Persistent Cloud Teammates)',
      status: 'cloud container #482 running • heartbeat 15m',
      command: 'grokbot orchestrate --team "growth_agents" --schedule "cron(0 */2 * * *)"',
      output: [
        '> Sub-Agent 1 (Researcher): Monitored 14 competitor pricing updates via headless Chromium',
        '> Sub-Agent 2 (Analyst): Detected 20% price hike on competitor enterprise tier',
        '> Sub-Agent 3 (Drafter): Generated executive summary briefing & Slack announcement',
        '> Syncing operational intelligence report to shared workspace.',
      ],
      metric: 'Outcome: Continuous competitive intelligence on autopilot',
    },
    muse: {
      title: 'Meta Muse (Action & App Connector Agent)',
      status: 'connectors: commerce_api, google_workspace, travel_flow',
      command: 'muse execute --intent "resolve customer returns & restock inventory"',
      output: [
        '> Authenticated user order #89211 with return policy requirements',
        '> Validated tracking delivery with FedEx API',
        '> Triggered automated Stripe refund of $149.00 and restocked inventory SKU #771',
        '> Dispatched empathetic customer confirmation via SMS.',
      ],
      metric: 'Outcome: Zero-touch e-commerce operations loop completed',
    },
    claude: {
      title: 'Claude Code (Agentic AI-Assisted Coding)',
      status: 'auto mode enabled • local repo workspace',
      command: 'claude --auto "build an invoice chasing micro-SaaS with AI assistance and Stripe"',
      output: [
        '> Analyzing directory structure and planning project architecture...',
        '> Generated full-stack Next.js app, SQLite persistence, and email scheduler',
        '> Executing test suite: npx tsx --test src/billing.test.ts (6/6 passed)',
        '> Shipped production-ready repository ready to deploy on Vercel.',
      ],
      metric: 'Outcome: Shipped working micro-SaaS from natural-language instructions',
    },
  };

  return (
    <section className="relative pt-8 pb-16 md:pt-14 md:pb-24 overflow-hidden bg-[#07080a]">
      {/* Flyer Diagonal Slash Accent */}
      <div className="hidden lg:block absolute top-0 right-0 w-[55%] h-[750px] pointer-events-none overflow-hidden z-0">
        <svg viewBox="0 0 500 700" className="w-full h-full opacity-90">
          <line x1="450" y1="0" x2="0" y2="700" stroke="#b8f526" strokeWidth="2.5" />
        </svg>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Flyer Header Bar */}
        <div className="flex items-center justify-between mb-6">
          <div className="text-xs sm:text-sm font-mono tracking-[0.25em] text-[#b8f526] font-semibold uppercase">
            ECCENTRIC SYSTEMS
          </div>

          {/* Dot Matrix Graphic from Flyer */}
          <div className="w-16 h-12 dot-matrix opacity-70" aria-hidden="true" />
        </div>

        {/* Poster Title - AGENTIC ADVANTAGE */}
        <div className="text-left">
          <h1 className="font-display leading-[0.88] tracking-tight uppercase flex flex-col">
            <span className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black text-white drop-shadow-sm">
              AGENTIC
            </span>
            <span className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black text-[#b8f526] drop-shadow-sm">
              ADVANTAGE
            </span>
          </h1>

          {/* Solid Green Line underneath */}
          <div className="w-full h-2 sm:h-2.5 bg-[#b8f526] mt-3 sm:mt-5 mb-5 shadow-sm shadow-[#b8f526]/40" />

          {/* Subtitle & Scope */}
          <div className="max-w-3xl space-y-2">
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-tight">
              Build, Deploy &amp; Run AI Agents in 4 Weeks.
            </h2>
            <p className="text-sm sm:text-xl text-zinc-300 font-medium">
              From Absolute Beginner to Shipping Real Agentic Systems.
            </p>
          </div>
        </div>

        {/* Flyer High-Voltage Banner Ribbon */}
        <div className="my-7 sm:my-10 -mx-4 sm:mx-0 px-3 py-2.5 sm:py-3.5 bg-[#b8f526] text-black shadow-md shadow-[#b8f526]/20">
          <div className="flex flex-wrap items-center justify-center gap-x-2 sm:gap-x-4 gap-y-1 font-mono font-black text-[11px] sm:text-sm md:text-base tracking-wider sm:tracking-[0.2em] uppercase text-center">
            <span>OPENCLAW</span>
            <span className="opacity-40">/</span>
            <span>GROKBOT</span>
            <span className="opacity-40">/</span>
            <span>META MUSE</span>
            <span className="opacity-40">/</span>
            <span>CLAUDE CODE</span>
          </div>
        </div>

        {/* Flyer Bullet Points with Solid Horizontal Bars */}
        <div className="my-8 sm:my-10 grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8 text-left">
          <div className="flex items-center gap-3.5">
            <span className="w-8 h-1.5 bg-[#b8f526] shrink-0" />
            <span className="text-base sm:text-lg font-bold text-white tracking-tight">
              For Absolute Beginners
            </span>
          </div>

          <div className="flex items-center gap-3.5">
            <span className="w-8 h-1.5 bg-[#b8f526] shrink-0" />
            <span className="text-base sm:text-lg font-bold text-white tracking-tight">
              Master OpenClaw • GrokBot • Meta Muse • Claude Code
            </span>
          </div>

          <div className="flex items-center gap-3.5">
            <span className="w-8 h-1.5 bg-[#b8f526] shrink-0" />
            <span className="text-base sm:text-lg font-bold text-white tracking-tight">
              Capstone Project: Build and Launch Your Own Agent
            </span>
          </div>

          <div className="flex items-center gap-3.5">
            <span className="w-8 h-1.5 bg-[#b8f526] shrink-0" />
            <span className="text-base sm:text-lg font-bold text-white tracking-tight">
              Business • Productivity • Problem-Solving
            </span>
          </div>
        </div>

        {/* Flyer 4-Week Milestone Timeline */}
        <div className="my-8 sm:my-10 p-4 sm:p-8 rounded-xl bg-zinc-950 border border-zinc-800 text-left relative overflow-hidden">
          <div className="text-xs font-mono tracking-widest text-[#b8f526] uppercase mb-4 font-semibold">
            4-WEEK ACCELERATION PATHWAY
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-4 relative">
            {/* 01 Foundations */}
            <div className="flex flex-col">
              <span className="font-display text-4xl sm:text-7xl font-black text-[#b8f526] leading-none">
                01
              </span>
              <div className="w-full h-1 bg-[#b8f526] my-2 sm:my-2.5 relative">
                <span className="absolute left-0 -top-1 w-3 h-3 bg-[#b8f526]" />
              </div>
              <span className="text-xs sm:text-base font-bold text-white uppercase tracking-wider">
                Foundations
              </span>
              <span className="text-[11px] sm:text-xs text-zinc-400 mt-0.5">Mindset &amp; First Wins</span>
            </div>

            {/* 02 Tool Mastery */}
            <div className="flex flex-col sm:border-l sm:border-zinc-800 sm:pl-4">
              <span className="font-display text-4xl sm:text-7xl font-black text-[#b8f526] leading-none">
                02
              </span>
              <div className="w-full h-1 bg-[#b8f526] my-2 sm:my-2.5 relative">
                <span className="absolute left-0 -top-1 w-3 h-3 bg-[#b8f526]" />
              </div>
              <span className="text-xs sm:text-base font-bold text-white uppercase tracking-wider">
                Tool Mastery
              </span>
              <span className="text-[11px] sm:text-xs text-zinc-400 mt-0.5">AI-Assisted Coding &amp; Agents</span>
            </div>

            {/* 03 Systems & Workflows */}
            <div className="flex flex-col sm:border-l sm:border-zinc-800 sm:pl-4">
              <span className="font-display text-4xl sm:text-7xl font-black text-[#b8f526] leading-none">
                03
              </span>
              <div className="w-full h-1 bg-[#b8f526] my-2 sm:my-2.5 relative">
                <span className="absolute left-0 -top-1 w-3 h-3 bg-[#b8f526]" />
              </div>
              <span className="text-xs sm:text-base font-bold text-white uppercase tracking-wider">
                Systems &amp; Workflows
              </span>
              <span className="text-[11px] sm:text-xs text-zinc-400 mt-0.5">Monetization &amp; Retainers</span>
            </div>

            {/* 04 Launch */}
            <div className="flex flex-col sm:border-l sm:border-zinc-800 sm:pl-4">
              <span className="font-display text-4xl sm:text-7xl font-black text-[#b8f526] leading-none">
                04
              </span>
              <div className="w-full h-1 bg-[#b8f526] my-2 sm:my-2.5 relative">
                <span className="absolute left-0 -top-1 w-3 h-3 bg-[#b8f526]" />
              </div>
              <span className="text-xs sm:text-base font-bold text-white uppercase tracking-wider">
                Launch
              </span>
              <span className="text-[11px] sm:text-xs text-zinc-400 mt-0.5">Live Capstone Shipped</span>
            </div>
          </div>
        </div>

        {/* Flyer Large Action Banner ("Enroll Now - Limited Seats.") */}
        <div className="mt-8 mb-6">
          <button
            onClick={scrollToRegister}
            className="w-full p-4 sm:p-6 bg-[#b8f526] hover:bg-[#a5e01b] transition-all text-black text-left flex flex-col sm:flex-row sm:items-center justify-between gap-4 cursor-pointer active:scale-[0.99] group shadow-xl shadow-[#b8f526]/20"
          >
            <div>
              <span className="font-display text-2xl sm:text-4xl md:text-5xl font-black tracking-tight uppercase block leading-none text-black">
                Enroll Now — Limited Seats.
              </span>
              <span className="text-xs sm:text-sm font-bold text-black/80 font-sans mt-1.5 block">
                Learn the tools. Understand the tech. Build something that <strong className="text-black underline">works.</strong>
              </span>
            </div>

            <div className="flex items-center gap-2 self-start sm:self-center px-4 sm:px-5 py-2 sm:py-2.5 bg-black text-[#b8f526] font-display text-base sm:text-lg uppercase tracking-wider font-bold shrink-0 group-hover:bg-zinc-900 transition-colors">
              <span>Claim Your Spot</span>
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 text-[#b8f526] stroke-[3]" />
            </div>
          </button>
        </div>

        {/* Live Seat Tracker Pill & Flyer Link */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4 text-xs font-mono text-zinc-400">
          <span>
            Cohort 1: <strong className="text-[#b8f526]">{remainingSeats}</strong> of {totalSeats} seats remaining
          </span>
          <span className="hidden sm:inline text-zinc-600">·</span>
          <span className="text-zinc-300">Pay-What-You-Want Model</span>
          <span className="text-zinc-600">·</span>
          <button
            onClick={() => setShowFlyerModal(true)}
            className="text-[#b8f526] hover:text-[#d3ff4d] underline underline-offset-4 flex items-center gap-1 cursor-pointer font-bold transition-colors"
          >
            <span>View Official Poster</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Interactive Late-2026 Agent Execution Terminal */}
        <div className="mt-10 sm:mt-14 max-w-4xl mx-auto rounded-xl bg-zinc-950 border border-zinc-800 shadow-2xl overflow-hidden text-left">
          {/* Header */}
          <div className="px-3 sm:px-4 py-2.5 sm:py-3 bg-zinc-900 border-b border-zinc-800 flex flex-wrap items-center justify-between gap-2">
            <div className="flex items-center gap-2">
              <div className="w-2.5 h-2.5 rounded-full bg-zinc-700" />
              <div className="w-2.5 h-2.5 rounded-full bg-zinc-700" />
              <div className="w-2.5 h-2.5 rounded-full bg-[#b8f526]" />
              <span className="ml-1 sm:ml-2 text-xs font-mono text-zinc-400 flex items-center gap-1.5 truncate">
                <Terminal className="w-3.5 h-3.5 text-[#b8f526] shrink-0" />
                <span>agent-runtime-simulator.sh</span>
              </span>
            </div>
            <span className="text-[10px] sm:text-[11px] font-mono text-[#b8f526] bg-[#b8f526]/10 border border-[#b8f526]/30 px-2 py-0.5 rounded">
              INTERACTIVE AGENTIC LAB
            </span>
          </div>

          {/* System Tabs */}
          <div className="p-2 sm:p-3 bg-zinc-950 border-b border-zinc-800 flex flex-wrap gap-1.5 sm:gap-2 text-[11px] sm:text-xs font-mono">
            <button
              onClick={() => setActiveTab('openclaw')}
              className={`px-2.5 py-1 sm:px-3 sm:py-1.5 rounded transition-all cursor-pointer ${
                activeTab === 'openclaw'
                  ? 'bg-[#b8f526] text-black font-bold'
                  : 'text-zinc-400 hover:text-white bg-zinc-900'
              }`}
            >
              OpenClaw (WhatsApp)
            </button>
            <button
              onClick={() => setActiveTab('grokbot')}
              className={`px-2.5 py-1 sm:px-3 sm:py-1.5 rounded transition-all cursor-pointer ${
                activeTab === 'grokbot'
                  ? 'bg-[#b8f526] text-black font-bold'
                  : 'text-zinc-400 hover:text-white bg-zinc-900'
              }`}
            >
              GrokBot (Cloud)
            </button>
            <button
              onClick={() => setActiveTab('muse')}
              className={`px-2.5 py-1 sm:px-3 sm:py-1.5 rounded transition-all cursor-pointer ${
                activeTab === 'muse'
                  ? 'bg-[#b8f526] text-black font-bold'
                  : 'text-zinc-400 hover:text-white bg-zinc-900'
              }`}
            >
              Meta Muse (Action)
            </button>
            <button
              onClick={() => setActiveTab('claude')}
              className={`px-2.5 py-1 sm:px-3 sm:py-1.5 rounded transition-all cursor-pointer ${
                activeTab === 'claude'
                  ? 'bg-[#b8f526] text-black font-bold'
                  : 'text-zinc-400 hover:text-white bg-zinc-900'
              }`}
            >
              Claude Code (Coding)
            </button>
          </div>

          {/* Terminal Body */}
          <div className="p-3.5 sm:p-5 font-mono text-[11px] sm:text-xs space-y-2.5 bg-black overflow-x-hidden">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between text-zinc-500 text-[10px] sm:text-[11px] pb-2 border-b border-zinc-900 gap-1">
              <span className="text-zinc-300 font-bold">{systems[activeTab].title}</span>
              <span className="text-[#b8f526]">{systems[activeTab].status}</span>
            </div>

            <div className="text-[#b8f526] pt-1 break-words">
              $ {systems[activeTab].command}
            </div>

            <div className="space-y-1.5 text-zinc-300 pl-2 border-l border-zinc-800">
              {systems[activeTab].output.map((line, idx) => (
                <div key={idx} className="leading-relaxed break-words">
                  {line}
                </div>
              ))}
            </div>

            <div className="mt-3 pt-3 border-t border-zinc-900 flex flex-col sm:flex-row sm:items-center justify-between text-[#b8f526] text-[10px] sm:text-[11px] gap-1.5">
              <span className="flex items-center gap-1.5 break-words">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#b8f526] shrink-0" />
                <span>{systems[activeTab].metric}</span>
              </span>
              <span className="text-zinc-500 font-sans">Hands-on Lab Exercise</span>
            </div>
          </div>
        </div>
      </div>

      {/* Official Poster Modal */}
      {showFlyerModal && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200"
          onClick={() => setShowFlyerModal(false)}
        >
          <div
            className="relative bg-zinc-950 border border-zinc-800 max-w-xl w-full max-h-[92vh] flex flex-col shadow-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="px-4 py-3 bg-zinc-900 border-b border-zinc-800 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#b8f526]">
                  Official Cohort Flyer
                </span>
                <span className="text-[11px] font-mono text-zinc-400">· 1536x2048</span>
              </div>
              <div className="flex items-center gap-2">
                <a
                  href="/meta-image.png"
                  download="Agentic-Advantage-Cohort1-Flyer.png"
                  className="px-2.5 py-1 text-xs font-mono bg-zinc-800 hover:bg-zinc-700 text-zinc-200 flex items-center gap-1.5 transition-colors border border-zinc-700"
                  title="Download full poster"
                >
                  <Download className="w-3.5 h-3.5 text-[#b8f526]" />
                  <span>Download</span>
                </a>
                <button
                  onClick={() => setShowFlyerModal(false)}
                  className="p-1 text-zinc-400 hover:text-white transition-colors cursor-pointer"
                  aria-label="Close modal"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Poster Preview */}
            <div className="p-2 sm:p-4 overflow-y-auto flex items-center justify-center bg-black/60">
              <img
                src="/meta-image.png"
                alt="Agentic Advantage 4-Week AI Agent & Coding Bootcamp Official Poster"
                className="max-h-[75vh] w-auto object-contain border border-zinc-800 shadow-xl"
              />
            </div>

            {/* Modal Footer */}
            <div className="px-4 py-2.5 bg-zinc-900 border-t border-zinc-800 flex items-center justify-between text-[11px] font-mono text-zinc-400">
              <span>ECCENTRIC SYSTEMS · Cohort 1</span>
              <button
                onClick={() => {
                  setShowFlyerModal(false);
                  scrollToRegister();
                }}
                className="text-[#b8f526] hover:underline cursor-pointer font-bold"
              >
                Enroll Now →
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
