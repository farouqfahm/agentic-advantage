import test from 'node:test';
import assert from 'node:assert/strict';
import {
  validateEmail,
  validatePhone,
  validateRegistrationForm,
  formatCurrency,
  getMinimumAmount,
  calculateRemainingSeats,
  generateRegistrationId,
  generateWhatsAppMessage,
  getWhatsAppUrl,
  WHATSAPP_COHORT_PHONE,
  RegistrationFormData,
} from './registration';

test('validateEmail handles valid and invalid formats correctly', () => {
  assert.equal(validateEmail('user@domain.com'), true);
  assert.equal(validateEmail('engineer+cohort@sub.domain.org'), true);
  assert.equal(validateEmail('invalid-email'), false);
  assert.equal(validateEmail('no-domain@'), false);
  assert.equal(validateEmail(''), false);
});

test('validatePhone validates realistic phone digit lengths', () => {
  assert.equal(validatePhone('09015567269'), true);
  assert.equal(validatePhone('4155552671'), true);
  assert.equal(validatePhone('123'), false); // too short
  assert.equal(validatePhone(''), false);
});

test('formatCurrency outputs expected symbol and localized values', () => {
  assert.equal(formatCurrency(75000, 'NGN'), '₦75,000');
  assert.equal(formatCurrency(50, 'USD'), '$50');
  assert.equal(formatCurrency(15000, 'NGN'), '₦15,000');
});

test('getMinimumAmount returns exact minimums for NGN and USD', () => {
  assert.equal(getMinimumAmount('NGN'), 15000);
  assert.equal(getMinimumAmount('USD'), 10);
});

test('validateRegistrationForm rejects missing required fields and low amount', () => {
  const invalidData: Partial<RegistrationFormData> = {
    fullName: '',
    email: 'bademail',
    phone: '',
    currency: 'NGN',
    amount: 5000, // Below ₦15,000 min
  };

  const result = validateRegistrationForm(invalidData);
  assert.equal(result.isValid, false);
  assert.ok(result.errors.fullName);
  assert.ok(result.errors.email);
  assert.ok(result.errors.phone);
  assert.ok(result.errors.experienceLevel);
  assert.ok(result.errors.amount);
});

test('validateRegistrationForm accepts complete and valid registration', () => {
  const validData: RegistrationFormData = {
    fullName: 'Adeola Balogun',
    email: 'adeola@agencyops.ng',
    countryCode: '+234',
    phone: '09015567269',
    experienceLevel: 'Tried ChatGPT/Claude',
    goals: 'Build AI agents with AI-assisted coding to automate customer service',
    currency: 'NGN',
    amount: 75000,
  };

  const result = validateRegistrationForm(validData);
  assert.equal(result.isValid, true);
  assert.equal(Object.keys(result.errors).length, 0);
});

test('calculateRemainingSeats handles 10 total spots with 2 already taken', () => {
  // Total 10 spots, 2 taken -> 8 remaining initially
  assert.equal(calculateRemainingSeats(10, 8, 0), 8);
  assert.equal(calculateRemainingSeats(10, 8, 1), 7);
  assert.equal(calculateRemainingSeats(10, 8, 8), 0); // clamp to 0
});

test('generateWhatsAppMessage creates customized message for WhatsApp +2349015567269', () => {
  const data: RegistrationFormData & { registrationId: string } = {
    registrationId: 'ADV1-TEST99',
    fullName: 'Adeola Balogun',
    email: 'adeola@agencyops.ng',
    countryCode: '+234',
    phone: '09015567269',
    experienceLevel: 'Tried ChatGPT/Claude',
    goals: 'Launch an autonomous B2B agent',
    currency: 'NGN',
    amount: 75000,
    paymentMethod: 'bank_transfer',
  };

  const msg = generateWhatsAppMessage(data);
  assert.ok(msg.includes('ADV1-TEST99'));
  assert.ok(msg.includes('Adeola Balogun'));
  assert.ok(msg.includes('₦75,000'));
  assert.ok(msg.includes('3002704154'));
  assert.ok(msg.includes('Kuda Microfinance Bank'));
  assert.ok(msg.includes('ClimatrixAI'));
  assert.ok(msg.includes('PROOF OF PAYMENT'));
  assert.ok(msg.includes('receipt/screenshot'));
  assert.ok(msg.includes('Tue, Wed, Sat & Sun'));
  assert.ok(msg.includes('9:00 PM - 10:00 PM (GMT+1)'));

  const url = getWhatsAppUrl(data);
  assert.ok(url.startsWith(`https://wa.me/${WHATSAPP_COHORT_PHONE}`));
  assert.ok(url.includes('ADV1-TEST99'));
});
