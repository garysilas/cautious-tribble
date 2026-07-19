import "server-only";

import { getSupabaseServerClient } from "../server";
import type { Article, ArticleAnalysis, Source } from "../types";

const URL_CHECK_CHUNK_SIZE = 15;

export type ArticleWithSourceAndAnalysis = Article & {
  source: Source;
  analysis: ArticleAnalysis | null;
};

type ArticleJoinRow = Article & {
  sources: Source | null;
  article_analyses: ArticleAnalysis[];
};

function toArticleWithSourceAndAnalysis(row: ArticleJoinRow): ArticleWithSourceAndAnalysis {
  if (!row.sources) {
    throw new Error(`Article ${row.id} is missing its source relation`);
  }

  return {
    ...row,
    source: row.sources,
    analysis: row.article_analyses[0] ?? null,
  };
}

export async function getExistingArticleUrls(urls: readonly string[]): Promise<Set<string>> {
  if (urls.length === 0) {
    return new Set();
  }

  const client = getSupabaseServerClient();
  const existingUrls = new Set<string>();

  for (let index = 0; index < urls.length; index += URL_CHECK_CHUNK_SIZE) {
    const chunk = urls.slice(index, index + URL_CHECK_CHUNK_SIZE);
    const [{ data: originalMatches, error: originalError }, { data: canonicalMatches, error: canonicalError }] = await Promise.all([
      client.from("articles").select("original_url").in("original_url", chunk),
      client.from("articles").select("canonical_url").in("canonical_url", chunk),
    ]);

    if (originalError) {
      throw new Error(`Unable to check existing article URLs: ${originalError.message}`);
    }

    if (canonicalError) {
      throw new Error(`Unable to check existing canonical article URLs: ${canonicalError.message}`);
    }

    for (const article of originalMatches) {
      existingUrls.add(article.original_url);
    }

    for (const article of canonicalMatches) {
      if (article.canonical_url) {
        existingUrls.add(article.canonical_url);
      }
    }
  }

  return existingUrls;
}

export async function getArticles(limit = 50): Promise<ArticleWithSourceAndAnalysis[]> {
  const { data, error } = await getSupabaseServerClient()
    .from("articles")
    .select("*, sources (*), article_analyses (*)")
    .order("published_at", { ascending: false })
    .limit(limit);

  if (error) {
    throw new Error(`Unable to load articles: ${error.message}`);
  }

  return (data as ArticleJoinRow[]).map(toArticleWithSourceAndAnalysis);
}

export async function getArticleById(id: string): Promise<ArticleWithSourceAndAnalysis | null> {
  const { data, error } = await getSupabaseServerClient()
    .from("articles")
    .select("*, sources (*), article_analyses (*)")
    .eq("id", id)
    .maybeSingle();

  if (error) {
    throw new Error(`Unable to load article ${id}: ${error.message}`);
  }

  return data ? toArticleWithSourceAndAnalysis(data as ArticleJoinRow) : null;
}

export async function getArticleByUrl(url: string): Promise<ArticleWithSourceAndAnalysis | null> {
  const client = getSupabaseServerClient();
  const [{ data: originalArticle, error: originalError }, { data: canonicalArticle, error: canonicalError }] = await Promise.all([
    client.from("articles").select("*, sources (*), article_analyses (*)").eq("original_url", url).maybeSingle(),
    client.from("articles").select("*, sources (*), article_analyses (*)").eq("canonical_url", url).maybeSingle(),
  ]);

  if (originalError) {
    throw new Error(`Unable to load article by original URL: ${originalError.message}`);
  }

  if (canonicalError) {
    throw new Error(`Unable to load article by canonical URL: ${canonicalError.message}`);
  }

  const article = originalArticle ?? canonicalArticle;
  return article ? toArticleWithSourceAndAnalysis(article as ArticleJoinRow) : null;
}

export async function getPendingAnalysisArticles(limit = 50): Promise<Article[]> {
  const { data, error } = await getSupabaseServerClient()
    .from("articles")
    .select("*, article_analyses (id)")
    .order("scraped_at");

  if (error) {
    throw new Error(`Unable to load pending analysis articles: ${error.message}`);
  }

  return (data as Array<Article & { article_analyses: Array<{ id: string }> }>)
    .filter((article) => article.article_analyses.length === 0)
    .slice(0, limit);
}
