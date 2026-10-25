import React from 'react';
import { Terminal, DollarSign, CheckCircle } from 'lucide-react';

interface WeekSummary {
  week: string;
  title: string;
  focus: string;
  topics: string[];
  deliverable: string;
  moneyPlay: string;
  tools: string[];
}

const WEEKS: WeekSummary[] = [
  {
    week: '01',
    title: 'Foundations & Agent Architecture',
    focus: 'Demystify agents vs chatbots: perception, planning, memory, and tools across OpenClaw, GrokBot & Claude Code.',
    topics: [
      'The autonomy loop: perception → planning → tools → memory',
      'OpenClaw local control plane vs GrokBot cloud containers',
      '3 instant wins: research agent, inbox triage, content pipeline',
    ],
    deliverable: 'Agent Opportunity Map (5 high-leverage problems to automate)',
    moneyPlay: 'Operational Data Licensing ($100k–$2M+ deals with AI labs)',
    tools: ['OpenClaw', 'GrokBot', 'Claude Code', 'Meta Muse'],
  },
  {
    week: '02',
    title: 'AI-Assisted Coding & Real Agents',
    focus: 'Build functional business agents and micro-SaaS with natural language via Claude Code and Cursor without manual syntax.',
    topics: [
      'Claude Code Auto Mode & remote cloud sessions',
      'Persistent memory (SQLite/Vector) & scheduled cron triggers',
      'Building live operator agents (lead scrapers, billing chasers)',
    ],
    deliverable: 'Functional Multi-Step Business Agent + Video Walkthrough',
    moneyPlay: 'Packaged Skills & Micro-Agent Setups ($1,500–$5,000/deal)',
    tools: ['Claude Code', 'Cursor', 'OpenClaw Skills', 'SQLite'],
  },
  {
    week: '03',
    title: 'Workflows & Client Monetization',
    focus: 'Turn standalone prototypes into commercial offers, client retainers, and productized Agent-as-a-Service businesses.',
    topics: [
      'The 5 monetization models: retainers, SaaS, data licensing, skills, agencies',
      'Proposals, ROI pricing, and closing non-technical SMB clients',
      'Reliability, human-in-the-loop approvals, and cost guardrails',
    ],
    deliverable: 'Validated Client Offer & Clickable Prototype Blueprint',
    moneyPlay: 'Productized Agent Agency Retainers ($1,000–$2,500/mo)',
    tools: ['n8n', 'Paystack / Stripe', 'Webhooks', 'Client Portals'],
  },
  {
    week: '04',
    title: 'Capstone Launch & Scale',
    focus: 'Coached live build sprints to deploy a publicly accessible capstone project with payments, messaging, and real users.',
    topics: [
      'Production hardening: session isolation, rate limits, webhooks',
      'Launch stack: AI-assisted landing page, checkout, WhatsApp onboarding',
      'Demo Day presentations & 30-day post-cohort revenue roadmap',
    ],
    deliverable: 'Live Deployed Capstone with Checkout or Booking Enabled',
    moneyPlay: 'First Paying Customer Acquisition & Scaling Plan',
    tools: ['Claude Code Cloud', 'Vercel / Cloud Run', 'Stripe / Paystack'],
  },
];

export const SyllabusSection: React.FC = () => {
  return (
    <section id="syllabus" className="py-16 bg-[#07080a] border-t border-zinc-850">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 text-left">
        {/* Header */}
        <div className="max-w-2xl mb-8 sm:mb-10">
          <div className="text-xs font-mono uppercase tracking-wider text-[#b8f526] font-semibold mb-2">
            Curriculum
          </div>
          <h2 className="font-display text-3xl sm:text-5xl font-black text-white uppercase tracking-tight">
            4 Weeks From Scratch To Shipped System
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-zinc-400">
            70% hands-on building, 20% system architecture, 10% direct monetization. Tue, Wed, Sat &amp; Sun (9:00 PM – 10:00 PM GMT+1).
          </p>
        </div>

        {/* 4 Clean Editorial Week Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
          {WEEKS.map((w) => (
            <div
              key={w.week}
              className="p-4 sm:p-6 bg-zinc-950 border border-zinc-800 hover:border-[#b8f526] transition-colors flex flex-col justify-between"
            >
              <div>
                <div className="flex items-baseline justify-between mb-2">
                  <span className="font-display text-4xl sm:text-5xl font-black text-[#b8f526] leading-none">
                    {w.week}
                  </span>
                  <div className="flex gap-1.5 flex-wrap">
                    {w.tools.map((t) => (
                      <span key={t} className="text-[10px] font-mono text-zinc-400 bg-black px-2 py-0.5 border border-zinc-850">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <h3 className="font-display text-xl sm:text-2xl font-black text-white uppercase tracking-wide mt-1">
                  {w.title}
                </h3>
                <p className="text-xs text-zinc-300 mt-2 leading-relaxed font-sans">
                  {w.focus}
                </p>

                {/* Topics */}
                <div className="mt-4 space-y-1.5 text-xs text-zinc-400">
                  {w.topics.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <span className="text-[#b8f526] mt-0.5 font-bold">›</span>
                      <span className="break-words">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Deliverable & Money Vector */}
              <div className="mt-5 pt-4 border-t border-zinc-900 space-y-2 text-xs font-mono">
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-3.5 h-3.5 text-[#b8f526] shrink-0 mt-0.5" />
                  <span className="text-zinc-200 break-words">
                    <strong className="text-white">Output:</strong> {w.deliverable}
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <DollarSign className="w-3.5 h-3.5 text-[#b8f526] shrink-0 mt-0.5" />
                  <span className="text-zinc-300 break-words">
                    <strong className="text-[#b8f526]">Money Play:</strong> {w.moneyPlay}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
