// Importa a função de criação do client Supabase via CDN
import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm'

// Cria o client com a URL e a chave fornecidas
export const supabase = createClient(
  'https://pquobavzpooyygfoczpn.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBxdW9iYXZ6cG9veXlnZm9jenBuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzIxMTE5NDQsImV4cCI6MjA4NzY4Nzk0NH0.-6WeJxqq_bzYD0chC1SF2iZzpK96FzWtl3xmcjeuRi4'
)
    