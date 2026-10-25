import React, { useState } from 'react';
import { 
  RegistrationFormData, 
  formatCurrency, 
  getWhatsAppUrl, 
  BANK_DETAILS,
  WHATSAPP_COHORT_PHONE 
} from '../utils/registration';
import { 
  Check, 
  Copy, 
  ExternalLink, 
  MessageSquare, 
  X, 
  FileText,
  Building2,
  Receipt,
  CheckCircle2,
  AlertTriangle
} from 'lucide-react';

interface ConfirmationModalProps {
  data: RegistrationFormData & { registrationId: string };
  onClose: () => void;
  onReset: () => void;
}

export const ConfirmationModal: React.FC<ConfirmationModalProps> = ({
  data,
  onClose,
  onReset,
}) => {
  const [copiedAccount, setCopiedAccount] = useState<boolean>(false);
  const discordLink = 'https://discord.gg/agentic-advantage-cohort1';
  const whatsappGroupLink = 'https://chat.whatsapp.com/agentic-advantage-cohort1';
  const directWhatsAppUrl = getWhatsAppUrl(data);

  const handleCopyAccount = () => {
    navigator.clipboard.writeText(BANK_DETAILS.accountNumber);
    setCopiedAccount(true);
    setTimeout(() => setCopiedAccount(false), 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/85 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-xl max-h-[94vh] overflow-y-auto bg-[#0a0c10] border border-white/20 p-5 sm:p-7 my-auto text-left text-zinc-100 shadow-2xl animate-in fade-in duration-150">
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close confirmation"
          className="absolute top-4 right-4 p-1.5 text-zinc-400 hover:text-white transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="pb-4 border-b border-white/10">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#b8f526] font-semibold">
            <span className="w-2 h-2 bg-[#b8f526]" />
            <span>ENROLLMENT RESERVED</span>
            <span className="text-zinc-500">•</span>
            <span className="text-white">#{data.registrationId}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white mt-1.5 font-display">
            Next Step: Send Your Receipt on WhatsApp
          </h2>
          <p className="text-xs text-zinc-300 mt-1">
            Hi <strong className="text-white">{data.fullName.split(' ')[0]}</strong>, your registration dossier has been prepared. Follow the steps below to finalize your Cohort 1 seat.
          </p>
        </div>

        {/* BANK TRANSFER CARD (Kuda Microfinance Bank / ClimatrixAI) */}
        <div className="my-5 p-4 bg-gradient-to-b from-[#14190c] to-[#0c0e12] border-2 border-[#b8f526]/50 space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-xs font-mono uppercase tracking-wider text-[#b8f526] font-bold flex items-center gap-1.5">
              <Building2 className="w-4 h-4 text-[#b8f526]" />
              <span>Official Bank Transfer Details</span>
            </span>
            <span className="text-[10px] font-mono text-zinc-400">Step 1 of 2</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs font-mono">
            <div className="p-2.5 bg-black/70 border border-zinc-800">
              <div className="text-[10px] text-zinc-400 uppercase">Bank</div>
              <div className="font-bold text-white text-xs">{BANK_DETAILS.bankName}</div>
            </div>

            <div className="p-2.5 bg-black/70 border border-[#b8f526]/40 flex flex-col justify-between">
              <div className="text-[10px] text-[#b8f526] uppercase font-bold">Account Number</div>
              <div className="flex items-center justify-between gap-1 mt-0.5">
                <span className="font-bold text-white text-base tracking-wider font-mono">
                  {BANK_DETAILS.accountNumber}
                </span>
                <button
                  type="button"
                  onClick={handleCopyAccount}
                  className="px-2 py-0.5 bg-[#b8f526] hover:bg-[#a6e01a] text-black text-[10px] font-mono font-bold flex items-center gap-1 transition-colors cursor-pointer"
                >
                  {copiedAccount ? (
                    <>
                      <Check className="w-3 h-3 stroke-[3]" />
                      <span>Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3 h-3" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            <div className="p-2.5 bg-black/70 border border-zinc-800">
              <div className="text-[10px] text-zinc-400 uppercase">Account Name</div>
              <div className="font-bold text-white text-xs">{BANK_DETAILS.accountName}</div>
            </div>
          </div>

          <div className="text-xs font-mono text-zinc-300 pt-1 flex items-center justify-between border-t border-zinc-800/80">
            <span className="text-zinc-400">Contribution Amount:</span>
            <span className="font-bold text-[#b8f526] font-sans text-sm">
              {formatCurrency(data.amount, data.currency)} ({data.currency})
            </span>
          </div>
        </div>

        {/* WhatsApp Direct Action (Priority #1) */}
        <div className="my-5 p-4 bg-zinc-900/80 border border-[#b8f526] space-y-3">
          <div className="flex items-center justify-between text-xs font-mono uppercase tracking-wider text-[#b8f526] font-bold">
            <span className="flex items-center gap-1.5">
              <Receipt className="w-4 h-4 text-[#b8f526]" />
              <span>Step 2: Send Receipt on WhatsApp</span>
            </span>
            <span className="text-[10px] bg-[#b8f526]/10 px-2 py-0.5 border border-[#b8f526]/30">
              Admissions Desk
            </span>
          </div>

          <p className="text-xs text-zinc-200 leading-relaxed">
            Click the button below to open the official Admissions WhatsApp (+{WHATSAPP_COHORT_PHONE}). Your registration details are already typed out. <strong className="text-white underline">Attach your transfer receipt screenshot or PDF</strong> to complete verification!
          </p>

          <a
            href={directWhatsAppUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-3.5 px-4 bg-[#b8f526] hover:bg-[#a6e01a] text-black font-bold text-xs uppercase tracking-wider font-mono flex items-center justify-center gap-2 transition-all cursor-pointer shadow-lg shadow-[#b8f526]/20"
          >
            <MessageSquare className="w-4 h-4 text-black shrink-0" />
            <span>Open WhatsApp &amp; Send Receipt (+{WHATSAPP_COHORT_PHONE})</span>
            <ExternalLink className="w-3.5 h-3.5 text-black shrink-0" />
          </a>
        </div>

        {/* Ledger Receipt Summary */}
        <div className="my-5 p-3.5 bg-black/60 border border-white/10 text-xs font-mono space-y-1.5">
          <div className="flex justify-between items-center pb-1.5 border-b border-white/5">
            <span className="text-zinc-400 uppercase text-[11px]">Registration ID:</span>
            <span className="font-semibold text-[#b8f526]">#{data.registrationId}</span>
          </div>
          <div className="flex justify-between items-center pb-1.5 border-b border-white/5">
            <span className="text-zinc-400 uppercase text-[11px]">Applicant:</span>
            <span className="text-white">{data.fullName} ({data.countryCode} {data.phone})</span>
          </div>
          <div className="flex justify-between items-center pb-1.5 border-b border-white/5">
            <span className="text-zinc-400 uppercase text-[11px]">Email:</span>
            <span className="text-white">{data.email}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-zinc-400 uppercase text-[11px]">Class Schedule:</span>
            <span className="text-[#b8f526] font-semibold">Tue, Wed, Sat, Sun • 9-10 PM GMT+1</span>
          </div>
        </div>

        {/* Cohort Communities */}
        <div className="space-y-2 mb-5">
          <div className="text-[11px] font-mono uppercase tracking-widest text-zinc-400 font-semibold">
            Cohort 1 Channels
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
            <div className="p-2.5 bg-zinc-900/40 border border-white/10 flex items-center justify-between gap-2">
              <div>
                <div className="font-semibold text-white">Private Discord</div>
                <div className="text-[10px] text-zinc-400">#cohort1-intros</div>
              </div>
              <a
                href={discordLink}
                target="_blank"
                rel="noreferrer"
                className="px-2 py-1 bg-white text-black text-[11px] font-semibold transition-colors hover:bg-zinc-200"
              >
                Join
              </a>
            </div>

            <div className="p-2.5 bg-zinc-900/40 border border-white/10 flex items-center justify-between gap-2">
              <div>
                <div className="font-semibold text-white">WhatsApp Community</div>
                <div className="text-[10px] text-zinc-400">Broadcast updates</div>
              </div>
              <a
                href={whatsappGroupLink}
                target="_blank"
                rel="noreferrer"
                className="px-2 py-1 bg-white text-black text-[11px] font-semibold transition-colors hover:bg-zinc-200"
              >
                Join
              </a>
            </div>
          </div>
        </div>

        {/* Actions */}
        <div className="flex items-center justify-between pt-3 border-t border-white/10 text-xs font-mono">
          <button
            onClick={() => window.print()}
            className="flex items-center gap-1.5 text-zinc-400 hover:text-white transition-colors cursor-pointer"
          >
            <FileText className="w-3.5 h-3.5" />
            <span>Print Receipt</span>
          </button>

          <button
            onClick={onClose}
            className="px-4 py-1.5 bg-zinc-900 hover:bg-zinc-800 border border-white/10 text-white font-medium text-xs transition-colors cursor-pointer"
          >
            Done
          </button>
        </div>
      </div>
    </div>
  );
};
