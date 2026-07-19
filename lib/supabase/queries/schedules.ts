import "server-only";

import { getSupabaseServerClient } from "../server";
import type { OxylabsSchedule, OxylabsScheduleRun } from "../types";

export async function getOxylabsSchedules(): Promise<OxylabsSchedule[]> {
  const { data, error } = await getSupabaseServerClient()
    .from("oxylabs_schedules")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) {
    throw new Error(`Unable to load Oxylabs schedules: ${error.message}`);
  }

  return data;
}

export async function getRecentOxylabsScheduleRuns(limit = 100): Promise<OxylabsScheduleRun[]> {
  const { data, error } = await getSupabaseServerClient()
    .from("oxylabs_schedule_runs")
    .select("*")
    .order("created_at", { ascending: false })
    .limit(limit);

  if (error) {
    throw new Error(`Unable to load Oxylabs schedule runs: ${error.message}`);
  }

  return data;
}
