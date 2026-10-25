import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { SyllabusSection } from './components/SyllabusSection';
import { ToolsLandscape } from './components/ToolsLandscape';
import { CapstoneShowcase } from './components/CapstoneShowcase';
import { CareerPathsSection } from './components/CareerPathsSection';
import { ScheduleSection } from './components/ScheduleSection';
import { RegistrationForm } from './components/RegistrationForm';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';
import { ConfirmationModal } from './components/ConfirmationModal';
import { RegistrationFormData, calculateRemainingSeats } from './utils/registration';

export default function App() {
  const TOTAL_SEATS = 10;
  const INITIAL_REMAINING = 8;

  const [claimedCount, setClaimedCount] = useState<number>(0);
  const [confirmedData, setConfirmedData] = useState<(RegistrationFormData & { registrationId: string }) | null>(null);

  // Initialize from localStorage if exists
  useEffect(() => {
    try {
      const stored = localStorage.getItem('agentic_advantage_claimed');
      if (stored) {
        const parsed = parseInt(stored, 10);
        if (!isNaN(parsed) && parsed >= 0) {
          setClaimedCount(parsed);
        }
      }
    } catch {
      // ignore
    }
  }, []);

  const remainingSeats = calculateRemainingSeats(TOTAL_SEATS, INITIAL_REMAINING, claimedCount);

  const handleRegistrationSuccess = (data: RegistrationFormData & { registrationId: string }) => {
    const nextClaimed = claimedCount + 1;
    setClaimedCount(nextClaimed);
    try {
      localStorage.setItem('agentic_advantage_claimed', nextClaimed.toString());
    } catch {
      // ignore
    }
    setConfirmedData(data);
  };

  const handleResetRegistration = () => {
    setConfirmedData(null);
    const formElement = document.getElementById('enroll');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#08090c] text-zinc-100 flex flex-col font-sans selection:bg-[#b8f526] selection:text-black">
      <Navbar remainingSeats={remainingSeats} totalSeats={TOTAL_SEATS} />

      <main className="flex-1">
        <HeroSection remainingSeats={remainingSeats} totalSeats={TOTAL_SEATS} />
        <SyllabusSection />
        <ToolsLandscape />
        <CapstoneShowcase />
        <CareerPathsSection />
        <ScheduleSection />
        <RegistrationForm
          remainingSeats={remainingSeats}
          totalSeats={TOTAL_SEATS}
          onSuccess={handleRegistrationSuccess}
        />
        <FaqSection />
      </main>

      <Footer />

      {/* Confirmation Modal */}
      {confirmedData && (
        <ConfirmationModal
          data={confirmedData}
          onClose={() => setConfirmedData(null)}
          onReset={handleResetRegistration}
        />
      )}
    </div>
  );
}
