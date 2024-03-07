import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://vejwzcrkjsbashywwzld.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZland6Y3JranNiYXNoeXd3emxkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDk4MTAzNDksImV4cCI6MjAyNTM4NjM0OX0.VQmuJtlBz-bfjrJuTVJVriB3S72CQW-huPQJdKkdyiQ';

export const supabase = createClient(supabaseUrl, supabaseKey);
