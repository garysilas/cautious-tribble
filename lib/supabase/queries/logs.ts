import "server-only";

import { getSupabaseServerClient } from "../server";
import type { Log } from "../types";

export async function getRecentLogs(limit = 100): Promise<Log[]> {
  const { data, error } = await getSupabaseServerClient()
    .from("logs")
    .select("*")
    .order("created_at", { ascending: false })
    .limit(limit);

  if (error) {
    throw new Error(`Unable to load logs: ${error.message}`);
  }

  return data;
}
