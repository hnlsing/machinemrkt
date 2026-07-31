// Fill in the two values below from your Supabase project:
// Settings → API → Project URL, and Settings → API → anon public key
// It is safe for these to be visible in your site's code — access is
// controlled by the Row Level Security policies set up in supabase-setup.sql,
// not by hiding this key.

const SUPABASE_URL = "https://drcgzdofvmmhmhttsxhy.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRyY2d6ZG9mdm1taG1odHRzeGh5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODQ5MDM3MTEsImV4cCI6MjEwMDQ3OTcxMX0.--_DNOPRztfF6Js3vBte0ANZpD1YCoibRi-c2HvMaFc";

const supabaseClient = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
