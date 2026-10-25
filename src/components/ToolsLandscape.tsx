import React from 'react';
import { Radio, Bot, Sparkles, Terminal } from 'lucide-react';

interface ToolItem {
  name: string;
  category: string;
  summary: string;
  highlights: string[];
  icon: React.ComponentType<{ className?: string }>;
}

const TOOLS: ToolItem[] = [
  {
    name: 'OpenClaw',
    category: 'Local-First Autonomous Control',
    summary: 'Open-source autonomous agents running natively inside WhatsApp, Telegram, Slack, and Discord with persistent local memory.',
    highlights: ['WhatsApp & Discord native', 'Local vector & SQLite memory', 'Custom skill plugins'],
    icon: Radio,
  },
  {
    name: 'GrokBot',
    category: 'Persistent Cloud AI Teammates',
    summary: 'Autonomous cloud workers executing continuous background research, multi-agent delegations, and scheduled cron jobs.',
    highlights: ['Dedicated cloud compute', '24/7 scheduled tasks', 'Multi-agent orchestration'],
    icon: Bot,
  },
  {
    name: 'Meta Muse',
    category: 'Consumer Action & Commerce',
    summary: 'Action-oriented agents connected directly to third-party APIs to autonomously handle bookings, purchases, and multi-step tasks.',
    highlights: ['Browser & app connectors', 'E-commerce checkout flows', 'Task automation'],
    icon: Sparkles,
  },
  {
    name: 'Claude Code',
    category: 'Agentic Software Engineering',
    summary: 'Anthropic\'s command-line agentic coding engine that plans, writes, tests, and deploys full production software via natural language.',
    highlights: ['Autonomous code exploration', 'Auto Mode test loops', 'Full-stack micro-SaaS creation'],
    icon: Terminal,
  },
];

export const ToolsLandscape: React.FC = () => {
  return (
    <section id="tools" className="py-16 bg-[#050608] border-t border-zinc-850">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 text-left">
        {/* Section Header - Clean & punchy */}
        <div className="max-w-2xl mb-8 sm:mb-10">
          <div className="text-xs font-mono uppercase tracking-wider text-[#b8f526] font-semibold mb-2">
            Tool Arsenal
          </div>
          <h2 className="font-display text-3xl sm:text-5xl font-black text-white uppercase tracking-tight">
            The 4 Frontier Systems You Master
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-zinc-400">
            Real production tools used by modern operators. Zero toy wrappers or theoretical slides.
          </p>
        </div>

        {/* 4 Clean Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {TOOLS.map((tool) => {
            const Icon = tool.icon;
            return (
              <div
                key={tool.name}
                className="p-4 sm:p-5 bg-zinc-950 border border-zinc-800 hover:border-[#b8f526] transition-colors flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-display text-2xl font-black text-white tracking-wide uppercase">
                      {tool.name}
                    </span>
                    <Icon className="w-5 h-5 text-[#b8f526]" />
                  </div>

                  <div className="text-[11px] font-mono text-[#b8f526] font-semibold mb-2">
                    {tool.category}
                  </div>

                  <p className="text-xs text-zinc-300 leading-relaxed">
                    {tool.summary}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-zinc-900 space-y-1">
                  {tool.highlights.map((h) => (
                    <div key={h} className="text-[11px] font-mono text-zinc-400 flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 bg-[#b8f526] shrink-0" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
