export interface Service {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  benefits: string[];
  procedure: string[];
  duration: string;
  faqs: { question: string; answer: string }[];
  slug: string;
  icon: string; // Lucide icon name
  whyChooseCcdc?: string;
}

export interface Review {
  id: string;
  name: string;
  rating: number;
  comment: string;
  date: string;
  treatment: string;
  verified: boolean;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  author: string;
  readTime: string;
  category: string;
  slug: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: string;
  beforeLabel?: string;
  afterLabel?: string;
  beforeImage?: string; // We can use elegant styling or geometric patterns if images are missing
  afterImage?: string;
}

export interface Appointment {
  id: string;
  name: string;
  phone: string;
  email: string;
  date: string;
  time: string;
  treatment: string;
  message?: string;
  status: 'pending' | 'confirmed' | 'cancelled';
  createdAt: string;
}

export interface ContactMessage {
  id: string;
  name: string;
  phone: string;
  email: string;
  subject: string;
  message: string;
  createdAt: string;
}
