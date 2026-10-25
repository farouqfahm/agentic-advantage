import React, { useState } from 'react';
import { CAPSTONE_PROJECT_IDEAS, CapstoneProjectIdea } from '../data/capstones';
import { TrendingUp, ArrowRight, Sparkles } from 'lucide-react';

export const CapstoneShowcase: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const categories = ['All', 'Data Play', 'Service', 'Micro-SaaS', 'Analytics & Ops'];

  const filteredProjects = selectedCategory === 'All'
    ? CAPSTONE_PROJECT_IDEAS
    : CAPSTONE_PROJECT_IDEAS.filter((p) => p.category === selectedCategory);

  return (
    <section id="capstone" className="py-16 bg-[#050608] border-t border-zinc-850">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 text-left">
        {/* Header */}
        <div className="max-w-3xl mb-8">
          <div className="text-xs font-mono uppercase tracking-wider text-[#b8f526] font-semibold mb-2">
            Capstone Inspiration
          </div>
          <h2 className="font-display text-4xl sm:text-5xl font-black text-white uppercase tracking-tight">
            6 Ideas Built For Real Revenue
          </h2>
          <p className="mt-2 text-sm text-zinc-400">
            Curated launch inspirations. <strong className="text-white">These are suggestions, not requirements</strong>—students are free to bring their own company problem, client project, or custom concept to Week 1.
          </p>
        </div>

        {/* Filter Bar */}
        <div className="mb-6 flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setSelectedCategory(cat)}
              className={`px-3 py-1 text-xs font-mono uppercase transition-colors cursor-pointer font-bold ${
                selectedCategory === cat
                  ? 'bg-[#b8f526] text-black'
                  : 'bg-zinc-950 border border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-700'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* 6 Clean Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredProjects.map((idea: CapstoneProjectIdea) => (
            <div
              key={idea.id}
              className="p-5 bg-zinc-950 border border-zinc-800 hover:border-[#b8f526] transition-colors flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between text-[10px] font-mono mb-2">
                  <span className="text-[#b8f526] font-semibold uppercase">{idea.category}</span>
                  {idea.startupInspirationId && (
                    <span className="text-zinc-500">Startup Idea #{idea.startupInspirationId}</span>
                  )}
                </div>

                <h3 className="font-display text-xl font-bold text-white uppercase tracking-wide">
                  {idea.title}
                </h3>

                <p className="text-xs text-zinc-300 mt-2 leading-relaxed">
                  {idea.description}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-zinc-900 space-y-2">
                <div className="flex items-center gap-1.5 text-xs font-mono text-[#b8f526]">
                  <TrendingUp className="w-3.5 h-3.5 shrink-0" />
                  <span className="truncate">{idea.monetizationModel}</span>
                </div>

                <div className="flex gap-1 flex-wrap">
                  {idea.primaryTools.map((t) => (
                    <span key={t} className="text-[10px] font-mono text-zinc-400 bg-black px-1.5 py-0.5 border border-zinc-900">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Compact Custom Idea Prompt */}
        <div className="mt-8 p-4 bg-zinc-950 border border-zinc-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-xs text-zinc-300 font-mono">
            <strong className="text-white block font-sans text-sm">Have your own custom concept or client?</strong>
            Bring it to Week 1. We help you scope the architecture, select the right agent tool, and ship it.
          </div>
          <a
            href="#register"
            className="px-4 py-2 bg-[#b8f526] hover:bg-[#a5e01b] text-black text-xs font-mono font-bold uppercase tracking-wider shrink-0 transition-colors"
          >
            Register &amp; Build It
          </a>
        </div>
      </div>
    </section>
  );
};
