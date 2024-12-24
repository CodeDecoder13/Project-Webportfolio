import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://djlazirmldgslrixcvda.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRqbGF6aXJtbGRnc2xyaXhjdmRhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzUwNTAzNjgsImV4cCI6MjA1MDYyNjM2OH0.66MI97IXJD6x0GJHCUSHQ87vlqBayfyKFrfDtCsr-EM';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
