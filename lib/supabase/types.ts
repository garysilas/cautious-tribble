export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[];

export type Source = { id: string; name: string; listing_url: string; parser_strategy: string | null; is_active: boolean; logo_url: string | null; created_at: string; updated_at: string };
export type Article = { id: string; source_id: string; original_url: string; canonical_url: string | null; title: string; image_url: string; published_at: string; raw_text: string; scraped_at: string; analyzed_at: string | null; created_at: string };
export type ArticleAnalysis = { id: string; article_id: string; summary: string; sentiment_score: number; sentiment_label: "positive" | "neutral" | "negative"; bias_label: "left" | "center" | "right" | "mixed" | "unclear"; left_percentage: number; center_percentage: number; right_percentage: number; bias_score: number; confidence: number; framing_notes: string[]; loaded_terms: string[]; disclaimer: string; model: string; created_at: string; updated_at: string };
export type OxylabsSchedule = { id: string; source_id: string; oxylabs_schedule_id: string; status: string; schedule_expression: string | null; request_payload: Json; response_payload: Json; created_at: string; updated_at: string };
export type OxylabsScheduleRun = { id: string; schedule_id: string; source_id: string; oxylabs_job_id: string; status: string; started_at: string | null; completed_at: string | null; result_payload: Json | null; error_message: string | null; created_at: string; updated_at: string };
export type Log = { id: string; level: "debug" | "info" | "warn" | "error"; event: string; message: string; source_id: string | null; article_id: string | null; schedule_id: string | null; schedule_run_id: string | null; metadata: Json; created_at: string };

export type SourceInsert = Pick<Source, "name" | "listing_url"> & Partial<Pick<Source, "parser_strategy" | "is_active" | "logo_url">>;
export type ArticleInsert = Pick<Article, "source_id" | "original_url" | "title" | "image_url" | "published_at" | "raw_text"> & Partial<Pick<Article, "canonical_url" | "scraped_at" | "analyzed_at">>;
export type ArticleAnalysisInsert = Omit<ArticleAnalysis, "id" | "bias_score" | "created_at" | "updated_at">;
export type OxylabsScheduleInsert = Pick<OxylabsSchedule, "source_id" | "oxylabs_schedule_id" | "status"> & Partial<Pick<OxylabsSchedule, "schedule_expression" | "request_payload" | "response_payload">>;
export type OxylabsScheduleRunInsert = Pick<OxylabsScheduleRun, "schedule_id" | "source_id" | "oxylabs_job_id" | "status"> & Partial<Pick<OxylabsScheduleRun, "started_at" | "completed_at" | "result_payload" | "error_message">>;
export type LogInsert = Pick<Log, "level" | "event" | "message"> & Partial<Pick<Log, "source_id" | "article_id" | "schedule_id" | "schedule_run_id" | "metadata">>;

export type Database = {
  public: {
    Tables: {
      sources: { Row: Source; Insert: SourceInsert; Update: Partial<SourceInsert>; Relationships: [] };
      articles: { Row: Article; Insert: ArticleInsert; Update: Partial<Omit<ArticleInsert, "source_id" | "original_url">>; Relationships: [] };
      article_analyses: { Row: ArticleAnalysis; Insert: ArticleAnalysisInsert; Update: Partial<Omit<ArticleAnalysisInsert, "article_id">>; Relationships: [] };
      oxylabs_schedules: { Row: OxylabsSchedule; Insert: OxylabsScheduleInsert; Update: Partial<Omit<OxylabsScheduleInsert, "source_id" | "oxylabs_schedule_id">>; Relationships: [] };
      oxylabs_schedule_runs: { Row: OxylabsScheduleRun; Insert: OxylabsScheduleRunInsert; Update: Partial<Omit<OxylabsScheduleRunInsert, "schedule_id" | "source_id" | "oxylabs_job_id">>; Relationships: [] };
      logs: { Row: Log; Insert: LogInsert; Update: never; Relationships: [] };
    };
    Views: Record<string, never>;
    Functions: Record<string, never>;
    Enums: Record<string, never>;
    CompositeTypes: Record<string, never>;
  };
};
