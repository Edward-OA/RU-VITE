
import { createClient } from '@supabase/supabase-js'
export const supabaseUrl = 'https://vozbmlonfylnymqweiys.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZvemJtbG9uZnlsbnltcXdlaXlzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTEyNjQyNTEsImV4cCI6MjA2Njg0MDI1MX0.kpdCdUhijneJ3iqfRqD0esdXbBUhPG-JFvcMtOSDrxk'
const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase;