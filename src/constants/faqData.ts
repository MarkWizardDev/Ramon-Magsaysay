import { FaqItem } from '../types';

export const FAQ_DATA: FaqItem[] = [
  {
    id: 'role',
    question: 'What is my role?',
    answer: "You'll provide remote access to your computer for verification. No technical skills are required. For privacy, you may install VMware and provide access to a virtual machine.",
    category: 'role',
    highlight: 'VMware Virtual Machine isolation supported for total privacy.'
  },
  {
    id: 'it-skills',
    question: "I'm not IT-savvy; is that okay?",
    answer: "Yes, no technical or IT skills are needed. We'll provide full guidance.",
    category: 'role',
    highlight: 'Step-by-step 1-on-1 walkthrough and onboarding provided.'
  },
  {
    id: 'own-account',
    question: 'Why not use your own account?',
    answer: 'We are expanding into international markets, and working with clients in your region helps us explore new business opportunities and grow our market presence.',
    category: 'operations',
    highlight: 'Bridges cross-border verification while we expand global legal entities.'
  },
  {
    id: 'bank-account',
    question: 'Whose bank account will be used?',
    answer: 'Your account will be used for agreed financial transactions, and you will be responsible for sending funds to us. All transactions must be documented and comply with bank policies and laws.',
    category: 'financial',
    highlight: '100% formal transaction logs, bank policy compliance, and audit trails.'
  },
  {
    id: 'compensation',
    question: 'How much will I be paid?',
    answer: 'You will receive a fixed percentage of generated income, as agreed upon before work commences.',
    category: 'financial',
    highlight: 'Guaranteed agreed percentage distribution upon each completed milestone.'
  },
  {
    id: 'trust-verification',
    question: 'How can I trust you?',
    answer: 'We are an experienced team with six years in the field, prioritizing transparency and respect for clients and partners. Review the agreement and verify our information. You can cease participation according to agreed terms if uncomfortable.',
    category: 'security',
    highlight: 'Formal written agreement, independent audit rights, and cancel-anytime terms.'
  },
  {
    id: 'work-type',
    question: 'What kind of work does your team do?',
    answer: 'We are an experienced software development team working on software and web development projects, including those from freelance platforms like Freelancer and Upwork.',
    category: 'operations',
    highlight: 'Full-stack engineering, web applications, SaaS tools, and client platforms.'
  },
  {
    id: 'computer-upfront',
    question: 'Can you provide a computer upfront?',
    answer: 'Not initially. After establishing a working relationship and mutual trust, we can discuss providing equipment if needed.',
    category: 'security',
    highlight: 'Hardware stipend and dedicated workstations eligible after trial milestones.'
  },
];
