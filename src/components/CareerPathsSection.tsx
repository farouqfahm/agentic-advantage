import React from 'react';
import { TrendingUp, Cpu, Building, Zap, Database, Boxes, UserCheck } from 'lucide-react';

export interface CareerPath {
  id?: string;
  title: string;
  type?: string;
  roleType?: string;
  compensation: string;
  outcome?: string;
  summary?: string;
  dayInTheLife?: string;
  keySkill?: string;
  topSkillsAcquired?: string[];
  icon?: React.ComponentType<{ className?: string }>;
}

export const CAREER_PATHS: CareerPath[] = [
  {
    title: 'AI Operations Architect',
    type: 'Full-Time / Corporate',
    compensation: '$110,000 – $185,000/yr',
    outcome: 'Orchestrate persistent internal AI teammates (GrokBot, OpenClaw) to automate company back-office workflows.',
    keySkill: 'Multi-agent orchestration & safety guardrails',
    icon: Cpu,
  },
  {
    title: 'AI Automation Agency (AaaS) Founder',
    type: 'Agency / Productized Services',
    compensation: '$5,000 – $25,000+/mo MRR',
    outcome: 'Deploy turnkey 24/7 client receptionists, quote generators, and invoice chasers for local & SMB businesses.',
    keySkill: 'WhatsApp & CRM agents + recurring retainers',
    icon: Building,
  },
  {
    title: '1-Person Micro-SaaS Founder',
    type: 'Solopreneur / Software',
    compensation: '$2,000 – $15,000+/mo MRR',
    outcome: 'Build, test, and ship niche single-purpose web software using Claude Code and Cursor with zero full-time dev hires.',
    keySkill: 'AI-assisted coding & automated deployments',
    icon: Zap,
  },
  {
    title: 'Operational Data Licensing Broker',
    type: 'Deal Brokerage / Contingency',
    compensation: '15% – 25% fees on $100k+ deals',
    outcome: 'Audit, clean, and package company customer logs and SOPs to license to frontier AI labs hungry for domain data.',
    keySkill: 'Data valuation heuristics & PII anonymization',
    icon: Database,
  },
  {
    title: 'Agent Skills & MCP Developer',
    type: 'Marketplace / Digital Products',
    compensation: '$1,000 – $5,000/mo passive',
    outcome: 'Package modular skills and Model Context Protocol servers to sell on open agent marketplaces (OpenClaw, Muse).',
    keySkill: 'Plugin architecture & API tool wrappers',
    icon: Boxes,
  },
  {
    title: 'Forward-Deployed AI Product Lead',
    type: 'Growth Startup / Product',
    compensation: '$95,000 – $160,000/yr',
    outcome: 'Bridge executive business strategy and rapid execution by converting plain-language specs into working code in days.',
    keySkill: 'Rapid prototyping & agentic workflow design',
    icon: UserCheck,
  },
];

export const CareerPathsSection: React.FC = () => {
  return (
    <section id="careers" className="py-16 bg-[#07080a] border-t border-zinc-850">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 text-left">
        {/* Header */}
        <div className="max-w-3xl mb-8">
          <div className="text-xs font-mono uppercase tracking-wider text-[#b8f526] font-semibold mb-2">
            Career &amp; Income Outcomes
          </div>
          <h2 className="font-display text-4xl sm:text-5xl font-black text-white uppercase tracking-tight">
            6 High-Leverage Paths This Unlocks
          </h2>
          <p className="mt-2 text-sm text-zinc-400">
            Basic prompt chat is commoditized. Agentic systems engineering is where high-ticket contracts and recurring software cash flow live.
          </p>
        </div>

        {/* 6 Clean Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {CAREER_PATHS.map((c) => {
            const Icon = c.icon || Cpu;
            return (
              <div
                key={c.title}
                className="p-5 bg-zinc-950 border border-zinc-800 hover:border-[#b8f526] transition-colors flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between text-[11px] font-mono text-zinc-400 mb-2">
                    <span>{c.type}</span>
                    <Icon className="w-4 h-4 text-[#b8f526]" />
                  </div>

                  <h3 className="font-display text-xl font-bold text-white uppercase tracking-wide">
                    {c.title}
                  </h3>

                  <div className="my-2 text-xs font-mono text-[#b8f526] font-bold flex items-center gap-1.5">
                    <TrendingUp className="w-3.5 h-3.5" />
                    <span>{c.compensation}</span>
                  </div>

                  <p className="text-xs text-zinc-300 mt-2 leading-relaxed">
                    {c.outcome}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-zinc-900 text-[11px] font-mono text-zinc-400">
                  <strong className="text-zinc-200">Core Superpower:</strong> {c.keySkill}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
