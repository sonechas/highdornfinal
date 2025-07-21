import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://your-project.supabase.co';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'your-anon-key';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export interface Property {
  id: string;
  title: string;
  description: string;
  price: number;
  location: string;
  bedrooms: number;
  bathrooms: number;
  area: number;
  image_url: string;
  type: 'residential' | 'commercial';
  status: 'available' | 'sold' | 'pending';
  created_at: string;
}

export interface ContactSubmission {
  id?: string;
  name: string;
  email: string;
  phone: string;
  message: string;
  property_interest?: string;
  created_at?: string;
}