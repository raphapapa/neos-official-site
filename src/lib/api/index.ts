import { cache } from "react";
import { apiFetch } from "./client";
import type {
  Player,
  PlayerDetail,
  ArticlesResponse,
  Article,
  Sponsor,
  SiteSettings,
} from "../types";

export async function getPlayers(): Promise<Player[]> {
  return (await apiFetch<Player[]>("/api/public/players", { revalidate: 60 })) || [];
}

export const getPlayerById = cache(async (id: string): Promise<PlayerDetail | null> => {
  return apiFetch<PlayerDetail>(`/api/public/players/${id}`, { revalidate: 60 });
});

export async function getArticles(
  page = 1,
  limit = 10,
  category?: string
): Promise<ArticlesResponse> {
  const params = new URLSearchParams({ page: String(page), limit: String(limit) });
  if (category) params.set("category", category);
  return (
    (await apiFetch<ArticlesResponse>(`/api/public/articles?${params}`, { revalidate: 60 })) || {
      articles: [],
      pagination: { page, limit, total: 0, totalPages: 0 },
    }
  );
}

export const getArticleBySlug = cache(async (slug: string): Promise<Article | null> => {
  return apiFetch<Article>(`/api/public/articles/${slug}`, { revalidate: 60 });
});

export async function getSponsors(): Promise<Sponsor[]> {
  return (await apiFetch<Sponsor[]>("/api/public/sponsors", { revalidate: 60 })) || [];
}

export async function getSiteSettings(): Promise<SiteSettings> {
  return (await apiFetch<SiteSettings>("/api/public/site-settings", { revalidate: 60 })) || {};
}
