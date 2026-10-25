export interface FaqItem {
  question: string;
  answer: string;
  category: 'general' | 'curriculum' | 'tools' | 'money' | 'logistics';
}

export const FAQS: FaqItem[] = [
  {
    category: 'general',
    question: 'Who is this bootcamp for?',
    answer: 'Non-technical and lightly technical builders — solopreneurs, operators, agency founders, and marketers looking to automate operations and launch revenue-generating agent projects without learning manual coding syntax.',
  },
  {
    category: 'general',
    question: 'Do I need prior coding experience?',
    answer: 'No coding experience is required. We focus on AI-assisted coding — specifying business logic in plain language while autonomous tools (Claude Code, Cursor) write, test, and deploy the software for you.',
  },
  {
    category: 'tools',
    question: 'What specific agent systems are covered?',
    answer: 'OpenClaw (local-first autonomous agent living in WhatsApp/Discord), GrokBot (persistent cloud teammates on scheduled cron loops), Meta Muse (action-oriented task agent), and Claude Code (agentic software development).',
  },
  {
    category: 'money',
    question: 'What are the primary money angles?',
    answer: 'We cover 5 proven vectors: licensing operational data (SOPs, ticket archives) to frontier AI labs ($100k+ deals), building productized client agents on retainer ($1k–$2.5k/mo), packaging agent skills, launching 1-person micro-SaaS, and autonomous content stores.',
  },
  {
    category: 'curriculum',
    question: 'Are the capstone project ideas mandatory?',
    answer: 'No. The 6 capstone tracks shown on the site are curated inspirations. You are free (and encouraged) to bring your own startup concept, internal company workflow, or paying client project to build during the 4 weeks.',
  },
  {
    category: 'curriculum',
    question: 'What career paths does this unlock?',
    answer: 'Graduates step into high-demand roles: AI Operations Architect ($110k–$185k/yr), AI Automation Agency Founder ($5k–$25k/mo MRR), 1-Person Micro-SaaS Founder, Operational Data Licensing Broker, or Forward-Deployed AI Product Lead.',
  },
  {
    category: 'logistics',
    question: 'When are the live classes held?',
    answer: 'Classes run 4 days a week on Tuesdays, Wednesdays, Saturdays, and Sundays from 9:00 PM to 10:00 PM (GMT+1). All sessions are interactive live builds designed to fit alongside your day job.',
  },
  {
    category: 'money',
    question: 'How do I pay and confirm my enrollment?',
    answer: 'Pay your desired contribution amount by direct bank transfer to Kuda Microfinance Bank (Account Number: 3002704154, Account Name: ClimatrixAI). After making the transfer, submit the enrollment form and send your payment receipt/screenshot directly to our admissions WhatsApp (+234 901 556 7269) for instant verification and Discord onboarding.',
  },
  {
    category: 'money',
    question: 'Why Pay What You Want for Cohort 1?',
    answer: 'Cohort 1 is our flagship pilot strictly capped at 10 seats (2 are already taken). We want a hungry, committed group focused on building live projects and generating strong case studies. Choose any amount in NGN or USD that fits your budget.',
  },
];
