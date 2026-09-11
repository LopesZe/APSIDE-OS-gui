import { createClient } from "@supabase/supabase-js";

const url = process.env.SUPABASE_URL;
const key = process.env.SUPABASE_KEY;

if (!url || !key) {
  console.error("Configure SUPABASE_URL e SUPABASE_KEY no arquivo .env");
  process.exit(1);
}

export const supabase = createClient(url, key);
