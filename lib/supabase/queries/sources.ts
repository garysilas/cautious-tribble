import "server-only";

import { getSupabaseServerClient } from "../server";
import type { Source } from "../types";

export async function getActiveSources(): Promise<Source[]> {
  const { data, error } = await getSupabaseServerClient()
    .from("sources")
    .select("*")
    .eq("is_active", true)
    .order("name");

  if (error) {
    throw new Error(`Unable to load active sources: ${error.message}`);
  }

  return data;
}
