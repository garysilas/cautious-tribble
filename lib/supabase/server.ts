import "server-only";

import { createClient } from "@supabase/supabase-js";

import type { Database } from "./types";

function getRequiredEnvironmentVariable(name: "NEXT_PUBLIC_SUPABASE_URL" | "SUPABASE_SERVICE_ROLE_KEY") {
  const value = process.env[name];

  if (!value) {
    throw new Error(`Missing required environment variable: ${name}`);
  }

  return value;
}

export function getSupabaseServerClient() {
  const url = getRequiredEnvironmentVariable("NEXT_PUBLIC_SUPABASE_URL");
  const serviceRoleKey = getRequiredEnvironmentVariable("SUPABASE_SERVICE_ROLE_KEY");

  return createClient<Database>(url, serviceRoleKey, {
    auth: {
      autoRefreshToken: false,
      detectSessionInUrl: false,
      persistSession: false,
    },
  });
}
