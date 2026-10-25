import React, { useState } from 'react';
import { 
  Currency, 
  ExperienceLevel, 
  RegistrationFormData, 
  BANK_DETAILS,
  COUNTRY_CODES, 
  PRESET_AMOUNTS, 
  MIN_AMOUNTS, 
  formatCurrency, 
  getMinimumAmount, 
  validateRegistrationForm,
  generateRegistrationId,
  getWhatsAppUrl,
  WHATSAPP_COHORT_PHONE
} from '../utils/registration';
import { 
  AlertCircle, 
  Loader2, 
  Lock, 
  ArrowRight, 
  MessageSquare,
  Copy,
  Check,
  Building2,
  Receipt,
  FileCheck2,
  UploadCloud,
  CheckCircle2,
  Info
} from 'lucide-react';

interface RegistrationFormProps {
  remainingSeats: number;
  totalSeats: number;
  onSuccess: (data: RegistrationFormData & { registrationId: string }) => void;
}

export const RegistrationForm: React.FC<RegistrationFormProps> = ({
  remainingSeats,
  totalSeats,
  onSuccess,
}) => {
  const [currency, setCurrency] = useState<Currency>('NGN');
  const [formData, setFormData] = useState<RegistrationFormData>({
    fullName: '',
    email: '',
    countryCode: '+234',
    phone: '',
    experienceLevel: '',
    goals: '',
    currency: 'NGN',
    amount: 75000,
    paymentMethod: 'bank_transfer',
    receiptConfirmed: true,
  });

  const [copiedAccount, setCopiedAccount] = useState<boolean>(false);
  const [receiptFileName, setReceiptFileName] = useState<string>('');
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [paymentStep, setPaymentStep] = useState<string>('');

  const handleCopyAccount = () => {
    navigator.clipboard.writeText(BANK_DETAILS.accountNumber);
    setCopiedAccount(true);
    setTimeout(() => setCopiedAccount(false), 2500);
  };

  const handleCurrencyChange = (newCurrency: Currency) => {
    setCurrency(newCurrency);
    const defaultAmount = newCurrency === 'USD' ? 50 : 75000;
    setFormData((prev) => ({
      ...prev,
      currency: newCurrency,
      amount: defaultAmount,
    }));
    setErrors((prev) => {
      const next = { ...prev };
      delete next.amount;
      return next;
    });
  };

  const handlePresetSelect = (preset: number) => {
    setFormData((prev) => ({ ...prev, amount: preset }));
    setErrors((prev) => {
      const next = { ...prev };
      delete next.amount;
      return next;
    });
  };

  const handleCustomAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const rawVal = e.target.value;
    if (rawVal === '') {
      setFormData((prev) => ({ ...prev, amount: 0 }));
      return;
    }
    const num = parseFloat(rawVal);
    setFormData((prev) => ({ ...prev, amount: isNaN(num) ? 0 : num }));
    if (num >= getMinimumAmount(currency)) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next.amount;
        return next;
      });
    }
  };

  const handleReceiptFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setReceiptFileName(file.name);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const validation = validateRegistrationForm({
      ...formData,
      currency,
    });

    if (!validation.isValid) {
      setErrors(validation.errors);
      const firstKey = Object.keys(validation.errors)[0];
      const target = document.getElementById(`field-${firstKey}`);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'center' });
        target.focus();
      }
      return;
    }

    setErrors({});
    setIsSubmitting(true);
    setPaymentStep('Formatting WhatsApp enrollment dossier & receipt request...');

    await new Promise((r) => setTimeout(r, 600));

    const regId = generateRegistrationId();
    const completeData = {
      ...formData,
      currency,
      registrationId: regId,
    };

    const whatsappUrl = getWhatsAppUrl(completeData);

    try {
      window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    } catch {
      // Handled via modal button
    }

    setIsSubmitting(false);
    setPaymentStep('');
    onSuccess(completeData);
  };

  const minAmount = getMinimumAmount(currency);
  const currentPresets = PRESET_AMOUNTS[currency];
  const isCustom = !currentPresets.includes(formData.amount);

  return (
    <section id="register" className="py-16 bg-[#07080a] border-t border-zinc-850">
      {/* Target anchor for #enroll as well */}
      <div id="enroll" className="sr-only" aria-hidden="true" />

      <div className="max-w-2xl mx-auto px-4 sm:px-6 text-left">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between text-xs font-mono text-zinc-400 mb-2">
            <span className="text-[#b8f526] font-semibold uppercase tracking-wider">Cohort 1 Enrollment</span>
            <span className="text-zinc-300">
              <strong className="text-[#b8f526]">{remainingSeats}</strong> of {totalSeats} seats remaining
            </span>
          </div>
          <h2 className="font-display text-4xl sm:text-5xl font-black text-white uppercase tracking-tight">
            Claim Your Spot
          </h2>
          <p className="mt-1 text-sm text-zinc-400">
            Pay-What-You-Want community model. Pay your desired amount by bank transfer to Kuda Microfinance Bank and send your receipt on WhatsApp to complete enrollment.
          </p>
        </div>

        {/* Card Form */}
        <div className="bg-zinc-950 border border-zinc-800 p-3.5 sm:p-7 shadow-2xl">
          <form onSubmit={handleSubmit} noValidate className="space-y-5">
            {/* Full Name */}
            <div>
              <label htmlFor="field-fullName" className="block text-xs font-mono uppercase tracking-wider text-zinc-300 mb-1 font-bold">
                Full Name *
              </label>
              <input
                id="field-fullName"
                type="text"
                placeholder="e.g. Maya Chen"
                value={formData.fullName}
                onChange={(e) => {
                  setFormData({ ...formData, fullName: e.target.value });
                  if (errors.fullName) {
                    setErrors((prev) => {
                      const next = { ...prev };
                      delete next.fullName;
                      return next;
                    });
                  }
                }}
                className={`w-full px-3.5 py-2.5 bg-black border text-sm text-zinc-100 placeholder-zinc-600 focus:outline-none transition-colors ${
                  errors.fullName ? 'border-rose-500' : 'border-zinc-800 focus:border-[#b8f526]'
                }`}
              />
              {errors.fullName && (
                <p className="mt-1 text-xs text-rose-400 flex items-center gap-1 font-mono">
                  <AlertCircle className="w-3.5 h-3.5" />
                  {errors.fullName}
                </p>
              )}
            </div>

            {/* Email Address */}
            <div>
              <label htmlFor="field-email" className="block text-xs font-mono uppercase tracking-wider text-zinc-300 mb-1 font-bold">
                Email Address *
              </label>
              <input
                id="field-email"
                type="email"
                placeholder="e.g. maya@company.com"
                value={formData.email}
                onChange={(e) => {
                  setFormData({ ...formData, email: e.target.value });
                  if (errors.email) {
                    setErrors((prev) => {
                      const next = { ...prev };
                      delete next.email;
                      return next;
                    });
                  }
                }}
                className={`w-full px-3.5 py-2.5 bg-black border text-sm text-zinc-100 placeholder-zinc-600 focus:outline-none transition-colors ${
                  errors.email ? 'border-rose-500' : 'border-zinc-800 focus:border-[#b8f526]'
                }`}
              />
              {errors.email && (
                <p className="mt-1 text-xs text-rose-400 flex items-center gap-1 font-mono">
                  <AlertCircle className="w-3.5 h-3.5" />
                  {errors.email}
                </p>
              )}
            </div>

            {/* WhatsApp / Phone with Country Code */}
            <div>
              <label htmlFor="field-phone" className="block text-xs font-mono uppercase tracking-wider text-zinc-300 mb-1 font-bold">
                WhatsApp Phone Number *
              </label>
              <div className="flex gap-2">
                <select
                  id="countryCode"
                  aria-label="Country Code"
                  value={formData.countryCode}
                  onChange={(e) => setFormData({ ...formData, countryCode: e.target.value })}
                  className="w-20 sm:w-28 px-2 py-2.5 bg-black border border-zinc-800 text-xs font-mono text-zinc-200 focus:outline-none focus:border-[#b8f526] cursor-pointer shrink-0"
                >
                  {COUNTRY_CODES.map((item) => (
                    <option key={item.code} value={item.code} className="bg-zinc-900 text-zinc-200">
                      {item.flag} {item.code} - {item.country}
                    </option>
                  ))}
                </select>

                <input
                  id="field-phone"
                  type="tel"
                  placeholder="e.g. 801 234 5678"
                  value={formData.phone}
                  onChange={(e) => {
                    setFormData({ ...formData, phone: e.target.value });
                    if (errors.phone) {
                      setErrors((prev) => {
                        const next = { ...prev };
                        delete next.phone;
                        return next;
                      });
                    }
                  }}
                  className={`min-w-0 flex-1 px-3 py-2.5 bg-black border text-sm text-zinc-100 placeholder-zinc-600 focus:outline-none transition-colors ${
                    errors.phone ? 'border-rose-500' : 'border-zinc-800 focus:border-[#b8f526]'
                  }`}
                />
              </div>
              {errors.phone && (
                <p className="mt-1 text-xs text-rose-400 flex items-center gap-1 font-mono">
                  <AlertCircle className="w-3.5 h-3.5" />
                  {errors.phone}
                </p>
              )}
            </div>

            {/* Experience Level */}
            <div>
              <label htmlFor="field-experienceLevel" className="block text-xs font-mono uppercase tracking-wider text-zinc-300 mb-1 font-bold">
                Background *
              </label>
              <select
                id="field-experienceLevel"
                value={formData.experienceLevel}
                onChange={(e) => {
                  setFormData({ ...formData, experienceLevel: e.target.value as ExperienceLevel });
                  if (errors.experienceLevel) {
                    setErrors((prev) => {
                      const next = { ...prev };
                      delete next.experienceLevel;
                      return next;
                    });
                  }
                }}
                className={`w-full px-3.5 py-2.5 bg-black border text-sm text-zinc-100 focus:outline-none transition-colors cursor-pointer ${
                  errors.experienceLevel ? 'border-rose-500' : 'border-zinc-800 focus:border-[#b8f526]'
                }`}
              >
                <option value="" disabled className="text-zinc-600">
                  Select your background
                </option>
                <option value="Absolute beginner" className="bg-zinc-900">
                  Absolute beginner (Solopreneur, marketer, or operator; zero code)
                </option>
                <option value="Tried ChatGPT/Claude" className="bg-zinc-900">
                  Tried ChatGPT/Claude (Familiar with prompting, want to build real agents &amp; AI-assisted coding)
                </option>
                <option value="Some automation experience" className="bg-zinc-900">
                  Some automation experience (Used Zapier, Make, or light scripts)
                </option>
              </select>
              {errors.experienceLevel && (
                <p className="mt-1 text-xs text-rose-400 flex items-center gap-1 font-mono">
                  <AlertCircle className="w-3.5 h-3.5" />
                  {errors.experienceLevel}
                </p>
              )}
            </div>

            {/* Contribution Amount */}
            <div className="pt-2 border-t border-zinc-900">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-mono uppercase tracking-wider text-zinc-300 font-bold">
                  Desired Contribution (Pay What You Want)
                </span>
                <div className="flex items-center border border-zinc-800 bg-black">
                  <button
                    type="button"
                    onClick={() => handleCurrencyChange('NGN')}
                    className={`px-3 py-1 text-xs font-mono font-bold cursor-pointer transition-colors flex items-center gap-1 ${
                      currency === 'NGN' ? 'bg-[#b8f526] text-black' : 'text-zinc-400 hover:text-white'
                    }`}
                  >
                    <span>NGN</span>
                    <span className="font-sans font-bold">(₦)</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => handleCurrencyChange('USD')}
                    className={`px-3 py-1 text-xs font-mono font-bold cursor-pointer transition-colors flex items-center gap-1 ${
                      currency === 'USD' ? 'bg-[#b8f526] text-black' : 'text-zinc-400 hover:text-white'
                    }`}
                  >
                    <span>USD</span>
                    <span className="font-sans font-bold">($)</span>
                  </button>
                </div>
              </div>

              {/* Preset Chips */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-3">
                {currentPresets.map((preset) => {
                  const isSelected = formData.amount === preset;
                  return (
                    <button
                      type="button"
                      key={preset}
                      onClick={() => handlePresetSelect(preset)}
                      className={`py-2 px-1 text-center border font-sans text-xs transition-colors cursor-pointer font-bold ${
                        isSelected
                          ? 'bg-[#b8f526] border-[#b8f526] text-black'
                          : 'bg-black border-zinc-800 text-zinc-300 hover:border-zinc-700'
                      }`}
                    >
                      {formatCurrency(preset, currency)}
                    </button>
                  );
                })}
              </div>

              {/* Custom Input */}
              <div className="relative">
                <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-zinc-400 font-sans text-xs">
                  {currency === 'USD' ? '$' : '₦'}
                </span>
                <input
                  id="field-amount"
                  type="number"
                  min={minAmount}
                  step={currency === 'USD' ? '5' : '1000'}
                  value={formData.amount > 0 ? formData.amount : ''}
                  placeholder={`Custom amount (min ${formatCurrency(minAmount, currency)})`}
                  onChange={handleCustomAmountChange}
                  className={`w-full pl-8 pr-3.5 py-2.5 bg-black border font-sans text-xs text-zinc-100 placeholder-zinc-700 focus:outline-none transition-colors ${
                    errors.amount
                      ? 'border-rose-500'
                      : isCustom
                      ? 'border-[#b8f526]'
                      : 'border-zinc-800 focus:border-[#b8f526]'
                  }`}
                />
              </div>
              {errors.amount && (
                <p className="mt-1 text-xs text-rose-400 flex items-center gap-1 font-mono">
                  <AlertCircle className="w-3.5 h-3.5" />
                  {errors.amount}
                </p>
              )}
            </div>

            {/* DEDICATED BANK TRANSFER CARD (Kuda Microfinance Bank / ClimatrixAI) */}
            <div className="p-4 sm:p-5 bg-gradient-to-b from-[#11160a] to-[#0a0c0e] border-2 border-[#b8f526]/40 rounded-sm space-y-3.5">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#b8f526]/20 pb-2.5">
                <div className="flex items-center gap-2">
                  <Building2 className="w-4 h-4 text-[#b8f526]" />
                  <span className="text-xs font-mono uppercase font-bold tracking-wider text-white">
                    Official Bank Transfer Payment Details
                  </span>
                </div>
                <span className="text-[10px] font-mono text-[#b8f526] bg-[#b8f526]/10 border border-[#b8f526]/30 px-2 py-0.5 font-bold uppercase">
                  Instant Verification
                </span>
              </div>

              {/* Bank Details Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 text-xs font-mono">
                {/* Bank */}
                <div className="bg-black/80 border border-zinc-800 p-2.5">
                  <div className="text-[10px] text-zinc-400 uppercase tracking-wider mb-0.5">Bank</div>
                  <div className="font-bold text-white text-xs sm:text-[13px]">{BANK_DETAILS.bankName}</div>
                </div>

                {/* Account Number with Copy */}
                <div className="bg-black/80 border border-[#b8f526]/50 p-2.5 sm:col-span-1 flex flex-col justify-between">
                  <div className="text-[10px] text-[#b8f526] uppercase tracking-wider font-bold mb-0.5">Account Number</div>
                  <div className="flex items-center justify-between gap-1">
                    <span className="font-bold text-white text-base sm:text-lg tracking-wider font-mono">
                      {BANK_DETAILS.accountNumber}
                    </span>
                    <button
                      type="button"
                      onClick={handleCopyAccount}
                      className="px-2 py-1 bg-[#b8f526] hover:bg-[#a6e01a] text-black text-[11px] font-mono font-bold flex items-center gap-1 transition-colors cursor-pointer rounded-xs"
                      title="Copy account number"
                    >
                      {copiedAccount ? (
                        <>
                          <Check className="w-3 h-3 text-black stroke-[3]" />
                          <span>Copied!</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3 h-3 text-black" />
                          <span>Copy</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>

                {/* Account Name */}
                <div className="bg-black/80 border border-zinc-800 p-2.5">
                  <div className="text-[10px] text-zinc-400 uppercase tracking-wider mb-0.5">Account Name</div>
                  <div className="font-bold text-white text-xs sm:text-[13px]">{BANK_DETAILS.accountName}</div>
                </div>
              </div>

              {/* Instructions Notice */}
              <div className="p-3 bg-black/60 border border-zinc-800/80 text-xs text-zinc-300 space-y-1.5 leading-relaxed">
                <div className="flex items-center gap-1.5 text-[#b8f526] font-bold text-xs uppercase font-mono">
                  <Receipt className="w-3.5 h-3.5" />
                  <span>How Enrollment Works (3 Steps):</span>
                </div>
                <ol className="list-decimal list-inside space-y-1 text-[11px] sm:text-xs text-zinc-300">
                  <li>
                    Transfer your contribution of <strong className="text-white font-sans">{formatCurrency(formData.amount, currency)}</strong> to <span className="text-[#b8f526] font-mono font-bold">{BANK_DETAILS.bankName}</span> (Account <strong className="text-white font-mono">{BANK_DETAILS.accountNumber}</strong>, <strong className="text-white">{BANK_DETAILS.accountName}</strong>).
                  </li>
                  <li>
                    Click <strong className="text-white">"Submit &amp; Send Receipt on WhatsApp"</strong> below.
                  </li>
                  <li>
                    Send your transfer receipt (screenshot or transaction PDF) in the WhatsApp chat to activate your seat immediately.
                  </li>
                </ol>
                {currency === 'USD' && (
                  <p className="pt-1 text-[11px] text-zinc-400 flex items-center gap-1">
                    <Info className="w-3 h-3 text-[#b8f526] shrink-0" />
                    <span>International candidates: transfer NGN equivalent or message WhatsApp for wire invoice.</span>
                  </p>
                )}
              </div>

              {/* Optional Local Receipt Selection */}
              <div className="border border-dashed border-zinc-800 p-2.5 bg-black/40 text-xs">
                <label className="flex items-center justify-between cursor-pointer group">
                  <div className="flex items-center gap-2 text-zinc-300">
                    <UploadCloud className="w-4 h-4 text-[#b8f526] group-hover:scale-110 transition-transform" />
                    <span className="text-[11px] font-mono">
                      {receiptFileName ? (
                        <span className="text-[#b8f526] font-bold">Selected: {receiptFileName}</span>
                      ) : (
                        <span>Optional: Attach receipt screenshot locally for quick reference</span>
                      )}
                    </span>
                  </div>
                  <span className="text-[10px] font-mono text-zinc-400 bg-zinc-900 border border-zinc-700 px-2 py-0.5">
                    Browse
                  </span>
                  <input
                    type="file"
                    accept="image/*,application/pdf"
                    onChange={handleReceiptFileChange}
                    className="sr-only"
                  />
                </label>
              </div>

              {/* Mandatory WhatsApp Receipt Checkbox */}
              <label className="flex items-start gap-2.5 cursor-pointer pt-1">
                <input
                  type="checkbox"
                  checked={formData.receiptConfirmed ?? true}
                  onChange={(e) => setFormData({ ...formData, receiptConfirmed: e.target.checked })}
                  className="mt-0.5 accent-[#b8f526] w-4 h-4 cursor-pointer"
                />
                <span className="text-[11px] sm:text-xs text-zinc-300 leading-normal">
                  I will send my bank transfer receipt for <strong className="text-white font-sans">{formatCurrency(formData.amount, currency)}</strong> to the Admissions WhatsApp (<strong className="text-[#b8f526] font-mono">+{WHATSAPP_COHORT_PHONE}</strong>) to lock in my Cohort 1 seat.
                </span>
              </label>
            </div>

            {/* Action Submit */}
            <div className="pt-2">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 px-4 sm:px-6 bg-[#b8f526] hover:bg-[#a5e01b] text-black font-display text-lg sm:text-xl uppercase tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-75 font-black text-center shadow-lg shadow-[#b8f526]/20"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin text-black" />
                    <span className="font-sans text-xs font-bold">{paymentStep || 'Processing...'}</span>
                  </>
                ) : (
                  <>
                    <MessageSquare className="w-5 h-5 text-black shrink-0" />
                    <span className="flex items-center justify-center gap-1.5 flex-wrap">
                      <span>Submit &amp; Send Receipt on WhatsApp</span>
                      <span className="font-sans font-black tracking-normal lowercase opacity-90 hidden sm:inline">•</span>
                      <span className="font-sans font-black tracking-normal normal-case">({formatCurrency(formData.amount, currency)})</span>
                    </span>
                    <ArrowRight className="w-4 h-4 text-black stroke-[3] shrink-0" />
                  </>
                )}
              </button>

              <div className="mt-3 flex items-center justify-center gap-2 text-[11px] font-mono text-zinc-400 text-center">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#b8f526]" />
                <span>Bank: {BANK_DETAILS.bankName} • Acc: {BANK_DETAILS.accountNumber} ({BANK_DETAILS.accountName})</span>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};
