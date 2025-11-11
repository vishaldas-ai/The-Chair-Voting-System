import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || '';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || '';

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error(
    'Missing Supabase environment variables. Please set VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY in your Netlify environment variables.'
  );
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export interface Chair {
  id: string;
  name: string;
  description: string;
  image_url?: string;
  created_at: string;
}

export interface Vote {
  id: string;
  chair_id: string;
  voter_session: string;
  created_at: string;
}
