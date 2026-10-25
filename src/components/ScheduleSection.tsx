import React from 'react';
import { Calendar, Clock, Users } from 'lucide-react';

export const ScheduleSection: React.FC = () => {
  return (
    <section id="schedule" className="py-14 sm:py-20 bg-[#050608] border-t border-zinc-850">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 text-left">
        {/* Header */}
        <div className="max-w-3xl mb-8 sm:mb-10">
          <div className="text-xs font-mono uppercase tracking-wider text-[#b8f526] font-semibold mb-2">
            Schedule &amp; Cohort Format
          </div>
          <h2 className="font-display text-3xl sm:text-5xl md:text-6xl font-black text-white uppercase tracking-tight leading-none">
            Tue, Wed, Sat &amp; Sun <span className="text-[#b8f526] block sm:inline mt-1 sm:mt-0">• 9-10 PM GMT+1</span>
          </h2>
          <p className="mt-3 text-xs sm:text-sm text-zinc-400 font-sans leading-relaxed">
            4 live sessions per week designed specifically for operators, solopreneurs, and working professionals across African and European time zones.
          </p>
        </div>

        {/* 3 Clean Compact Responsive Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 sm:gap-4">
          <div className="p-5 sm:p-6 bg-zinc-950 border border-zinc-850 flex flex-col justify-between">
            <div>
              <Calendar className="w-5 h-5 text-[#b8f526] mb-3" />
              <h3 className="font-display text-xl sm:text-2xl font-black text-white uppercase tracking-wide">
                4 Days A Week
              </h3>
              <p className="text-xs text-zinc-300 mt-2 leading-relaxed">
                Tuesdays, Wednesdays, Saturdays, and Sundays. 4 focused 60-minute sprints each week to maintain momentum without burnout.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-zinc-900 font-mono text-[11px] text-[#b8f526]">
              Tue · Wed · Sat · Sun
            </div>
          </div>

          <div className="p-5 sm:p-6 bg-zinc-950 border border-zinc-850 flex flex-col justify-between">
            <div>
              <Clock className="w-5 h-5 text-[#b8f526] mb-3" />
              <h3 className="font-display text-xl sm:text-2xl font-black text-white uppercase tracking-wide">
                9:00 PM – 10:00 PM
              </h3>
              <p className="text-xs text-zinc-300 mt-2 leading-relaxed">
                West Africa Time / British Summer Time (GMT+1). Prime evening slot so you never have to choose between your day job and building agents.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-zinc-900 font-mono text-[11px] text-[#b8f526]">
              60 Minutes Per Session
            </div>
          </div>

          <div className="p-5 sm:p-6 bg-zinc-950 border border-zinc-850 sm:col-span-2 lg:col-span-1 flex flex-col justify-between">
            <div>
              <Users className="w-5 h-5 text-[#b8f526] mb-3" />
              <h3 className="font-display text-xl sm:text-2xl font-black text-white uppercase tracking-wide">
                10 Spots Strictly Capped
              </h3>
              <p className="text-xs text-zinc-300 mt-2 leading-relaxed">
                2 spots taken; 8 remaining. Ensures direct architectural guidance, instant code reviews, and personal capstone shipping support.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-zinc-900 font-mono text-[11px] text-[#b8f526]">
              8 Seats Remaining
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
