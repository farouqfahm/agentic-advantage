import React, { useState } from 'react';
import { FAQS, FaqItem } from '../data/faqs';
import { ChevronDown, ChevronUp } from 'lucide-react';

export const FaqSection: React.FC = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const toggleFaq = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section id="faqs" className="py-16 bg-[#07080a] border-t border-zinc-850">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-left">
        <div className="max-w-2xl mb-8">
          <div className="text-xs font-mono uppercase tracking-wider text-[#b8f526] font-semibold mb-2">
            Questions &amp; Logistics
          </div>
          <h2 className="font-display text-4xl sm:text-5xl font-black text-white uppercase tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="mt-2 text-sm text-zinc-400">
            Everything you need to know about tools, monetization, and the pilot cohort.
          </p>
        </div>

        <div className="space-y-2">
          {FAQS.map((item: FaqItem, idx: number) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={item.question}
                className="bg-zinc-950 border border-zinc-800 transition-colors"
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(idx)}
                  className="w-full p-4 text-left flex items-center justify-between gap-4 cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span className="font-semibold text-sm sm:text-base text-zinc-100 flex items-center gap-3">
                    <span className="font-mono text-[#b8f526] text-xs font-bold">0{idx + 1}.</span>
                    <span>{item.question}</span>
                  </span>
                  <div className="text-zinc-400 shrink-0">
                    {isOpen ? <ChevronUp className="w-4 h-4 text-[#b8f526]" /> : <ChevronDown className="w-4 h-4" />}
                  </div>
                </button>

                {isOpen && (
                  <div className="px-4 pb-4 pt-0 text-xs sm:text-sm text-zinc-300 leading-relaxed border-t border-zinc-900 mt-1">
                    <p className="pt-2">{item.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
