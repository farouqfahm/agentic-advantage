import React from 'react';
import { ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 border-t border-zinc-800 bg-[#050608] text-zinc-400 text-xs font-mono">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pb-8 border-b border-zinc-900">
          <div className="flex flex-col text-left">
            <span className="text-[10px] tracking-widest text-[#b8f526] uppercase font-semibold">
              ECCENTRIC SYSTEMS
            </span>
            <div className="flex items-baseline gap-1.5 leading-none mt-0.5">
              <span className="font-display text-xl text-white tracking-wider">AGENTIC</span>
              <span className="font-display text-xl text-[#b8f526] tracking-wider">ADVANTAGE</span>
            </div>
            <div className="text-[11px] text-zinc-500 mt-1">
              Cohort 1 • 4-Week Live Agent &amp; AI-Assisted Coding Incubator
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center sm:justify-end gap-x-5 gap-y-2 uppercase tracking-wider text-xs">
            <a href="#syllabus" className="hover:text-[#b8f526] transition-colors">Curriculum</a>
            <a href="#tools" className="hover:text-[#b8f526] transition-colors">Tools</a>
            <a href="#capstone" className="hover:text-[#b8f526] transition-colors">Capstones</a>
            <a href="#careers" className="hover:text-[#b8f526] transition-colors">Careers</a>
            <a href="#schedule" className="hover:text-[#b8f526] transition-colors">Schedule</a>
            <a href="#faqs" className="hover:text-[#b8f526] transition-colors">FAQs</a>
            <button
              onClick={scrollToTop}
              className="p-2 bg-zinc-900 border border-zinc-800 hover:border-[#b8f526] hover:text-[#b8f526] transition-colors cursor-pointer shrink-0"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-zinc-500 text-[11px] text-center sm:text-left">
          <div>
            &copy; {new Date().getFullYear()} ECCENTRIC SYSTEMS • Agentic Advantage. All rights reserved.
          </div>
          <div>
            Learn the tools. Understand the tech. Build something that <strong className="text-[#b8f526]">works.</strong>
          </div>
        </div>
      </div>
    </footer>
  );
};
