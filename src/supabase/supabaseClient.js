import { createClient } from "@supabase/supabase-js";
const supabaseUrl = import.meta.env.VITE_APP_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_APP_SUPABASE_KEY;
let supabase;
if (supabaseUrl && supabaseAnonKey) {
    supabase = createClient(supabaseUrl, supabaseAnonKey);
}
else {
    console.log("Supabase URL or key is not defined");
}
export { supabase };
