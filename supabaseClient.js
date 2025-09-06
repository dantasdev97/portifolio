import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://wpmjyvxfxcgpaatwngry.supabase.co';
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndwbWp5dnhmeGNncGFhdHduZ3J5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTcxNDA3NDcsImV4cCI6MjA3MjcxNjc0N30.VQyGD7oozkdCkVawXlNttYvdk4kqgZhcFeUvDe5x994';

export const supabase = createClient(supabaseUrl, supabaseKey);