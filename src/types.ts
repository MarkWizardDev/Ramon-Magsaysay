export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: 'role' | 'financial' | 'security' | 'operations';
  highlight?: string;
}

export interface RoleNode {
  id: 'nexatech' | 'partner' | 'client';
  title: string;
  subtitle: string;
  iconName: string;
  responsibilities: string[];
  deliverables: string[];
  keyTools: string[];
  color: string;
}

export interface AttachmentFile {
  id: string;
  name: string;
  size: number;
  type: string;
  status: 'uploading' | 'complete' | 'error';
  progress: number;
}

export interface ContactFormData {
  name: string;
  email: string;
  country: string;
  subject: string;
  message: string;
  preferredContact: 'email' | 'telegram' | 'whatsapp';
  contactHandle: string;
}
