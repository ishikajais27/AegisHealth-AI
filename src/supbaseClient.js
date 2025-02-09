import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://yypzznyadgbdtmkzyajv.supabase.co' // Replace with your Supabase URL
const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inl5cHp6bnlhZGdiZHRta3p5YWp2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzkwNDYyNDgsImV4cCI6MjA1NDYyMjI0OH0.RJqSsNtH5i9eTcAQDsXlSKoujj-w6_EArT0p4t5Dyiw' // Replace with your Supabase anon key

const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase
