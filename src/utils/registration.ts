export type Currency = 'NGN' | 'USD';

export type ExperienceLevel = 
  | 'Absolute beginner' 
  | 'Tried ChatGPT/Claude' 
  | 'Some automation experience';

export interface RegistrationFormData {
  fullName: string;
  email: string;
  countryCode: string;
  phone: string;
  experienceLevel: ExperienceLevel | '';
  goals: string;
  currency: Currency;
  amount: number;
  paymentMethod?: 'bank_transfer' | 'paystack' | 'stripe';
  receiptConfirmed?: boolean;
}

export interface ValidationResult {
  isValid: boolean;
  errors: Record<string, string>;
}

export const BANK_DETAILS = {
  bankName: 'Kuda Microfinance Bank',
  accountNumber: '3002704154',
  accountName: 'ClimatrixAI',
} as const;

export const MIN_AMOUNTS: Record<Currency, number> = {
  NGN: 15000,
  USD: 10,
};

export const PRESET_AMOUNTS: Record<Currency, number[]> = {
  NGN: [35000, 75000, 150000, 300000],
  USD: [25, 50, 100, 200],
};

export const COUNTRY_CODES = [
  { code: '+234', country: 'Nigeria', flag: '🇳🇬' },
  { code: '+1', country: 'US / Canada', flag: '🇺🇸' },
  { code: '+44', country: 'United Kingdom', flag: '🇬🇧' },
  { code: '+49', country: 'Germany', flag: '🇩🇪' },
  { code: '+91', country: 'India', flag: '🇮🇳' },
  { code: '+254', country: 'Kenya', flag: '🇰🇪' },
  { code: '+27', country: 'South Africa', flag: '🇿🇦' },
  { code: '+233', country: 'Ghana', flag: '🇬🇭' },
  { code: '+61', country: 'Australia', flag: '🇦🇺' },
  { code: '+971', country: 'UAE', flag: '🇦🇪' },
  { code: '+33', country: 'France', flag: '🇫🇷' },
  { code: '+31', country: 'Netherlands', flag: '🇳🇱' },
  { code: '+65', country: 'Singapore', flag: '🇸🇬' },
] as const;

export const WHATSAPP_COHORT_PHONE = '2349015567269';

export function validateEmail(email: string): boolean {
  if (!email || typeof email !== 'string') return false;
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email.trim());
}

export function validatePhone(phone: string): boolean {
  if (!phone || typeof phone !== 'string') return false;
  const cleanDigits = phone.replace(/[^0-9]/g, '');
  return cleanDigits.length >= 6 && cleanDigits.length <= 15;
}

export function getMinimumAmount(currency: Currency): number {
  return MIN_AMOUNTS[currency] || MIN_AMOUNTS.NGN;
}

export function getRecommendedPresetAmounts(currency: Currency): number[] {
  return PRESET_AMOUNTS[currency] || PRESET_AMOUNTS.NGN;
}

export function formatCurrency(amount: number, currency: Currency): string {
  const safeAmount = Number.isFinite(amount) ? amount : 0;
  if (currency === 'USD') {
    return `$${safeAmount.toLocaleString('en-US')}`;
  }
  return `₦${safeAmount.toLocaleString('en-NG')}`;
}

export function validateRegistrationForm(data: Partial<RegistrationFormData>): ValidationResult {
  const errors: Record<string, string> = {};

  // Full Name
  if (!data.fullName || !data.fullName.trim()) {
    errors.fullName = 'Please enter your full name.';
  } else if (data.fullName.trim().length < 2) {
    errors.fullName = 'Full name must be at least 2 characters.';
  }

  // Email
  if (!data.email || !data.email.trim()) {
    errors.email = 'Please provide your email address.';
  } else if (!validateEmail(data.email)) {
    errors.email = 'Please enter a valid email address (e.g., name@example.com).';
  }

  // Phone
  if (!data.phone || !data.phone.trim()) {
    errors.phone = 'WhatsApp / phone number is required to send your enrollment details.';
  } else if (!validatePhone(data.phone)) {
    errors.phone = 'Please enter a valid phone number with digits only.';
  }

  // Experience Level
  if (!data.experienceLevel) {
    errors.experienceLevel = 'Please select your current background / experience level.';
  }

  // Currency & Contribution Amount
  const currency: Currency = data.currency === 'USD' ? 'USD' : 'NGN';
  const minRequired = getMinimumAmount(currency);
  const amount = Number(data.amount);

  if (isNaN(amount) || amount <= 0) {
    errors.amount = 'Please enter a contribution amount.';
  } else if (amount < minRequired) {
    errors.amount = `Minimum commitment is ${formatCurrency(minRequired, currency)} to secure your seat.`;
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
}

export function calculateRemainingSeats(
  initialTotal: number = 10,
  initialRemaining: number = 8,
  additionalClaimed: number = 0
): number {
  const remaining = initialRemaining - additionalClaimed;
  return Math.max(0, Math.min(initialTotal, remaining));
}

export function generateRegistrationId(): string {
  const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
  let result = 'ADV1-';
  for (let i = 0; i < 6; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return result;
}

export function generateWhatsAppMessage(data: RegistrationFormData & { registrationId: string }): string {
  const currencyLabel = data.currency;
  const formattedAmt = formatCurrency(data.amount, data.currency);
  const goalsText = data.goals?.trim() ? data.goals.trim() : 'Build custom agent workflows and monetize';

  return `👋 *NEW ENROLLMENT & PAYMENT RECEIPT: AGENTIC ADVANTAGE (COHORT 1)*
------------------------------------
🆔 *Registration ID:* #${data.registrationId}
👤 *Name:* ${data.fullName}
📧 *Email:* ${data.email}
📱 *Phone / WhatsApp:* ${data.countryCode} ${data.phone}
🎯 *Background:* ${data.experienceLevel}
💡 *Goals:* ${goalsText}
💰 *Enrolled Contribution:* ${formattedAmt} (${currencyLabel})

🏦 *BANK TRANSFER DETAILS:*
• Bank: ${BANK_DETAILS.bankName}
• Account Number: ${BANK_DETAILS.accountNumber}
• Account Name: ${BANK_DETAILS.accountName}

🧾 *PROOF OF PAYMENT:*
Attached below is my bank transfer receipt/screenshot for ${formattedAmt}.

📅 *Class Schedule:* Tue, Wed, Sat & Sun • 9:00 PM - 10:00 PM (GMT+1) [4 days/wk]
------------------------------------
_Hello admissions team! I have completed my registration on the site and transferred my contribution to ClimatrixAI (${BANK_DETAILS.bankName}). Please verify my attached receipt and confirm my Cohort 1 seat._`;
}

export function getWhatsAppUrl(data: RegistrationFormData & { registrationId: string }): string {
  const message = generateWhatsAppMessage(data);
  return `https://wa.me/${WHATSAPP_COHORT_PHONE}?text=${encodeURIComponent(message)}`;
}
