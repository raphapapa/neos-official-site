import type { PlayerCategory, ArticleCategory, SponsorTier } from "./types";

// サイト表示用カテゴリ（5つに集約）
export type DisplayCategory = "ATHLETE" | "GROWTH" | "YOUTH" | "JUNIOR" | "STAFF";

export const DISPLAY_CATEGORY_LABELS: Record<DisplayCategory, string> = {
  ATHLETE: "ATHLETE",
  GROWTH: "GROWTH",
  YOUTH: "YOUTH",
  JUNIOR: "JUNIOR",
  STAFF: "STAFF",
};

// DB category → 表示カテゴリへのマッピング
const STAFF_CATEGORIES: PlayerCategory[] = [
  "OWNER", "OPERATOR", "OPERATOR_SUPPORT", "OPERATOR_INTERN",
  "JUNIOR_MANAGER", "JUNIOR_SUB_MANAGER",
  "DESIGNER", "EDITOR", "STREAMER",
];

export function toDisplayCategory(cat: PlayerCategory): DisplayCategory {
  if (cat === "ATHLETE" || cat === "GROWTH" || cat === "YOUTH" || cat === "JUNIOR") return cat;
  if (STAFF_CATEGORIES.includes(cat)) return "STAFF";
  return "STAFF";
}

export const DISPLAY_CATEGORY_ORDER: DisplayCategory[] = [
  "ATHLETE", "GROWTH", "YOUTH", "JUNIOR", "STAFF",
];

export const CATEGORY_LABELS: Record<PlayerCategory, string> = {
  ATHLETE: "ATHLETE",
  GROWTH: "GROWTH",
  YOUTH: "YOUTH",
  JUNIOR: "JUNIOR",
  OWNER: "STAFF",
  OPERATOR: "STAFF",
  OPERATOR_SUPPORT: "STAFF",
  OPERATOR_INTERN: "STAFF",
  JUNIOR_MANAGER: "STAFF",
  JUNIOR_SUB_MANAGER: "STAFF",
  DESIGNER: "STAFF",
  EDITOR: "STAFF",
  STREAMER: "STAFF",
  TRYOUT: "TRYOUT",
  SUSPENDED: "SUSPENDED",
};

export const PUBLIC_CATEGORIES: PlayerCategory[] = [
  "ATHLETE", "GROWTH", "YOUTH", "JUNIOR",
  "OWNER", "OPERATOR", "OPERATOR_SUPPORT", "OPERATOR_INTERN",
  "JUNIOR_MANAGER", "JUNIOR_SUB_MANAGER",
  "DESIGNER", "EDITOR", "STREAMER",
];

export const CATEGORY_COLORS: Record<PlayerCategory, string> = {
  ATHLETE: "bg-red-900/60 text-red-300 border border-red-700",
  GROWTH: "bg-amber-900/60 text-amber-300 border border-amber-700",
  YOUTH: "bg-sky-900/60 text-sky-300 border border-sky-700",
  JUNIOR: "bg-emerald-900/60 text-emerald-300 border border-emerald-700",
  OWNER: "bg-indigo-900/60 text-indigo-300 border border-indigo-700",
  OPERATOR: "bg-indigo-900/60 text-indigo-300 border border-indigo-700",
  OPERATOR_SUPPORT: "bg-indigo-900/60 text-indigo-300 border border-indigo-700",
  OPERATOR_INTERN: "bg-indigo-900/60 text-indigo-300 border border-indigo-700",
  JUNIOR_MANAGER: "bg-indigo-900/60 text-indigo-300 border border-indigo-700",
  JUNIOR_SUB_MANAGER: "bg-indigo-900/60 text-indigo-300 border border-indigo-700",
  DESIGNER: "bg-indigo-900/60 text-indigo-300 border border-indigo-700",
  EDITOR: "bg-indigo-900/60 text-indigo-300 border border-indigo-700",
  STREAMER: "bg-indigo-900/60 text-indigo-300 border border-indigo-700",
  TRYOUT: "bg-gray-900/60 text-gray-300 border border-gray-700",
  SUSPENDED: "bg-gray-900/60 text-gray-400 border border-gray-700",
};

export const DISPLAY_CATEGORY_COLORS: Record<DisplayCategory, string> = {
  ATHLETE: "bg-red-900/60 text-red-300 border border-red-700",
  GROWTH: "bg-amber-900/60 text-amber-300 border border-amber-700",
  YOUTH: "bg-sky-900/60 text-sky-300 border border-sky-700",
  JUNIOR: "bg-emerald-900/60 text-emerald-300 border border-emerald-700",
  STAFF: "bg-indigo-900/60 text-indigo-300 border border-indigo-700",
};

export const SPONSOR_TIER_LABELS: Record<SponsorTier, string> = {
  GOLD: "GOLD",
  SILVER: "SILVER",
  BRONZE: "BRONZE",
  STANDARD: "STANDARD",
};

export const ARTICLE_CATEGORY_LABELS: Record<ArticleCategory, string> = {
  NEWS: "NEWS",
  BLOG: "BLOG",
  RESULT: "RESULT",
};

export const ARTICLE_CATEGORY_COLORS: Record<ArticleCategory, string> = {
  NEWS: "bg-neos-red/80 text-white",
  BLOG: "bg-blue-700/80 text-white",
  RESULT: "bg-amber-700/80 text-white",
};

// メンバーのソート（PR昇順、PRなしは名前昇順で後ろ）
export function sortMembers<T extends { pr_rank: number | null; name: string }>(players: T[]): T[] {
  return [...players].sort((a, b) => {
    if (a.pr_rank && b.pr_rank) return a.pr_rank - b.pr_rank;
    if (a.pr_rank && !b.pr_rank) return -1;
    if (!a.pr_rank && b.pr_rank) return 1;
    return a.name.localeCompare(b.name, "ja");
  });
}
