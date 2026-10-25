import React, { useState } from 'react';
import { Users, ArrowRight, Menu, X, ChevronRight } from 'lucide-react';

interface NavbarProps {
  remainingSeats: number;
  totalSeats: number;
}

export const Navbar: React.FC<NavbarProps> = ({ remainingSeats, totalSeats }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToRegister = () => {
    scrollToSection('register');
  };

  const navItems = [
    { label: 'Curriculum', id: 'syllabus' },
    { label: 'Tools', id: 'tools' },
    { label: 'Capstones', id: 'capstone' },
    { label: 'Career Paths', id: 'careers' },
    { label: 'Schedule', id: 'schedule' },
    { label: 'FAQs', id: 'faqs' },
  ];

  return (
    <header className="sticky top-0 z-40 w-full border-b border-zinc-850 bg-[#07080a]/95 backdrop-blur-md">
      <div className="max-w-6xl mx-auto px-3.5 sm:px-6 h-16 flex items-center justify-between gap-2">
        {/* Brand / Logo */}
        <a href="#" className="flex items-center gap-2.5 shrink-0 group">
          <div className="flex flex-col">
            <span className="text-[9px] sm:text-[10px] font-mono tracking-widest text-[#b8f526] uppercase font-semibold">
              ECCENTRIC SYSTEMS
            </span>
            <div className="flex items-baseline gap-1 leading-none">
              <span className="font-display text-lg sm:text-xl text-white tracking-wider">AGENTIC</span>
              <span className="font-display text-lg sm:text-xl text-[#b8f526] tracking-wider">ADVANTAGE</span>
            </div>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden lg:flex items-center gap-5 xl:gap-7 text-xs font-mono uppercase tracking-wider text-zinc-300">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="hover:text-[#b8f526] transition-colors py-1"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Right side stats & CTA + Mobile Toggle */}
        <div className="flex items-center gap-2 sm:gap-3">
          <div className="hidden sm:flex items-center gap-1.5 px-2.5 sm:px-3 py-1 bg-zinc-900 border border-zinc-800 text-xs font-mono text-zinc-300 shrink-0">
            <span>
              <strong className="text-[#b8f526]">{remainingSeats}</strong> of {totalSeats} seats left
            </span>
          </div>

          <button
            onClick={scrollToRegister}
            className="flex items-center gap-1.5 px-3 sm:px-4 py-1.5 sm:py-2 rounded-sm bg-[#b8f526] hover:bg-[#a5e01b] text-black font-display text-sm sm:text-base tracking-wider transition-all cursor-pointer active:scale-95 shadow-sm shadow-[#b8f526]/30 font-bold uppercase shrink-0"
          >
            <span>Enroll</span>
            <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-black stroke-[3]" />
          </button>

          {/* Mobile / Tablet Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
            className="lg:hidden p-2 text-zinc-300 hover:text-white bg-zinc-900 border border-zinc-800 transition-colors cursor-pointer shrink-0"
          >
            {mobileMenuOpen ? <X className="w-5 h-5 text-[#b8f526]" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile / Tablet Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-zinc-800 bg-[#07080a] px-4 py-5 shadow-2xl animate-in slide-in-from-top-2 duration-150">
          <div className="mb-4 pb-3 border-b border-zinc-900 flex items-center justify-between font-mono text-xs text-zinc-400">
            <span className="uppercase text-[#b8f526] font-semibold tracking-wider">Cohort 1 Status</span>
            <span>
              <strong className="text-[#b8f526]">{remainingSeats}</strong> of {totalSeats} spots left
            </span>
          </div>

          <nav className="flex flex-col space-y-1 text-sm font-mono uppercase tracking-wider">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="w-full text-left py-2.5 px-3 flex items-center justify-between text-zinc-300 hover:text-black hover:bg-[#b8f526] transition-colors rounded-sm cursor-pointer"
              >
                <span>{item.label}</span>
                <ChevronRight className="w-4 h-4 opacity-60" />
              </button>
            ))}
          </nav>

          <div className="mt-5 pt-4 border-t border-zinc-900">
            <button
              onClick={scrollToRegister}
              className="w-full py-3 bg-[#b8f526] text-black font-display text-base uppercase tracking-wider font-bold flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Enroll Now (Pay What You Want)</span>
              <ArrowRight className="w-4 h-4 stroke-[3]" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

