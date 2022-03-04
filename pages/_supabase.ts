import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://pvzahlnpcbwqocdinhvr.supabase.co'
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InB2emFobG5wY2J3cW9jZGluaHZyIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NDYzMDI1MjUsImV4cCI6MTk2MTg3ODUyNX0.tYwq3TVX2gWAsXAFxuGsl12d_QvugvGWnI_TV0fa3GE";
const supabase = createClient(supabaseUrl, supabaseKey);
export default supabase;