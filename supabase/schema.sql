create extension if not exists pgcrypto;

create table public.sources (
  id uuid primary key default gen_random_uuid(),
  name text not null unique,
  listing_url text not null unique,
  parser_strategy text,
  is_active boolean not null default true,
  logo_url text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  constraint sources_listing_url_check check (listing_url ~ '^https?://')
);

create table public.articles (
  id uuid primary key default gen_random_uuid(),
  source_id uuid not null references public.sources(id) on delete restrict,
  original_url text not null unique,
  canonical_url text,
  title text not null,
  image_url text not null,
  published_at timestamptz not null,
  raw_text text not null,
  scraped_at timestamptz not null default now(),
  analyzed_at timestamptz,
  created_at timestamptz not null default now(),
  constraint articles_original_url_check check (original_url ~ '^https?://'),
  constraint articles_canonical_url_check check (canonical_url is null or canonical_url ~ '^https?://'),
  constraint articles_title_check check (length(trim(title)) > 0),
  constraint articles_image_url_check check (image_url ~ '^https?://'),
  constraint articles_raw_text_check check (length(trim(raw_text)) > 0)
);

create unique index articles_canonical_url_unique
  on public.articles (canonical_url)
  where canonical_url is not null;

create index articles_source_id_published_at_index
  on public.articles (source_id, published_at desc);

create index articles_pending_analysis_index
  on public.articles (id)
  where analyzed_at is null;

create table public.article_analyses (
  id uuid primary key default gen_random_uuid(),
  article_id uuid not null unique references public.articles(id) on delete cascade,
  summary text not null,
  sentiment_score numeric(4, 3) not null,
  sentiment_label text not null,
  bias_label text not null,
  left_percentage smallint not null,
  center_percentage smallint not null,
  right_percentage smallint not null,
  bias_score numeric(4, 3) generated always as ((right_percentage - left_percentage) / 100.0) stored,
  confidence numeric(4, 3) not null,
  framing_notes text[] not null default '{}',
  loaded_terms text[] not null default '{}',
  disclaimer text not null,
  model text not null,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  constraint article_analyses_sentiment_score_check check (sentiment_score between -1 and 1),
  constraint article_analyses_sentiment_label_check check (sentiment_label in ('positive', 'neutral', 'negative')),
  constraint article_analyses_bias_label_check check (bias_label in ('left', 'center', 'right', 'mixed', 'unclear')),
  constraint article_analyses_percentage_range_check check (
    left_percentage between 0 and 100
    and center_percentage between 0 and 100
    and right_percentage between 0 and 100
  ),
  constraint article_analyses_percentage_total_check check (
    left_percentage + center_percentage + right_percentage = 100
  ),
  constraint article_analyses_confidence_check check (confidence between 0 and 1)
);

create index article_analyses_bias_label_index
  on public.article_analyses (bias_label);

create table public.oxylabs_schedules (
  id uuid primary key default gen_random_uuid(),
  source_id uuid not null unique references public.sources(id) on delete restrict,
  oxylabs_schedule_id text not null unique,
  status text not null,
  schedule_expression text,
  request_payload jsonb not null default '{}'::jsonb,
  response_payload jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  constraint oxylabs_schedules_status_check check (length(trim(status)) > 0)
);

create index oxylabs_schedules_status_index
  on public.oxylabs_schedules (status);

create table public.oxylabs_schedule_runs (
  id uuid primary key default gen_random_uuid(),
  schedule_id uuid not null references public.oxylabs_schedules(id) on delete cascade,
  source_id uuid not null references public.sources(id) on delete restrict,
  oxylabs_job_id text not null unique,
  status text not null,
  started_at timestamptz,
  completed_at timestamptz,
  result_payload jsonb,
  error_message text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  constraint oxylabs_schedule_runs_status_check check (length(trim(status)) > 0)
);

create index oxylabs_schedule_runs_schedule_id_created_at_index
  on public.oxylabs_schedule_runs (schedule_id, created_at desc);

create index oxylabs_schedule_runs_status_index
  on public.oxylabs_schedule_runs (status);

create table public.logs (
  id uuid primary key default gen_random_uuid(),
  level text not null,
  event text not null,
  message text not null,
  source_id uuid references public.sources(id) on delete set null,
  article_id uuid references public.articles(id) on delete set null,
  schedule_id uuid references public.oxylabs_schedules(id) on delete set null,
  schedule_run_id uuid references public.oxylabs_schedule_runs(id) on delete set null,
  metadata jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now(),
  constraint logs_level_check check (level in ('debug', 'info', 'warn', 'error')),
  constraint logs_event_check check (length(trim(event)) > 0)
);

create index logs_created_at_index on public.logs (created_at desc);
create index logs_level_created_at_index on public.logs (level, created_at desc);

alter table public.sources enable row level security;
alter table public.articles enable row level security;
alter table public.article_analyses enable row level security;
alter table public.oxylabs_schedules enable row level security;
alter table public.oxylabs_schedule_runs enable row level security;
alter table public.logs enable row level security;

revoke all on table public.sources from anon, authenticated;
revoke all on table public.articles from anon, authenticated;
revoke all on table public.article_analyses from anon, authenticated;
revoke all on table public.oxylabs_schedules from anon, authenticated;
revoke all on table public.oxylabs_schedule_runs from anon, authenticated;
revoke all on table public.logs from anon, authenticated;

grant all on table public.sources to service_role;
grant all on table public.articles to service_role;
grant all on table public.article_analyses to service_role;
grant all on table public.oxylabs_schedules to service_role;
grant all on table public.oxylabs_schedule_runs to service_role;
grant all on table public.logs to service_role;
