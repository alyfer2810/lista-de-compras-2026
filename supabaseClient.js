import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/+esm'

const SUPABASE_URL = 'https://pquobavzpooyygfoczpn.supabase.co'
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBxdW9iYXZ6cG9veXlnZm9jenBuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzIxMTE5NDQsImV4cCI6MjA4NzY4Nzk0NH0.-6WeJxqq_bzYD0chC1SF2iZzpK96FzWtl3xmcjeuRi4'

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY)