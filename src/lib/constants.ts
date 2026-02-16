import type { PlayerCategory, ArticleCategory, SponsorTier } from "./types";

// フィルタメニュー用カテゴリ（5つに集約）
export type DisplayCategory = "ATHLETE" | "GROWTH" | "YOUTH" | "JUNIOR" | "STAFF";

export const DISPLAY_CATEGORY_LABELS: Record<DisplayCategory, string> = {
  ATHLETE: "ATHLETE",
  GROWTH: "GROWTH",
  YOUTH: "YOUTH",
  JUNIOR: "JUNIOR",
  STAFF: "STAFF",
};

// DB category → フィルタカテゴリへのマッピング
const STAFF_CATEGORIES: PlayerCategory[] = [
  "OWNER", "OPERATOR", "OPERATOR_SUPPORT", "OPERATOR_INTERN",
  "JUNIOR_MANAGER", "JUNIOR_SUB_MANAGER",
  "STREAMER", "DESIGNER", "EDITOR",
];

export function toDisplayCategory(cat: PlayerCategory): DisplayCategory {
  if (cat === "ATHLETE" || cat === "GROWTH" || cat === "YOUTH" || cat === "JUNIOR") return cat;
  if (STAFF_CATEGORIES.includes(cat)) return "STAFF";
  return "STAFF";
}

export const DISPLAY_CATEGORY_ORDER: DisplayCategory[] = [
  "ATHLETE", "GROWTH", "YOUTH", "JUNIOR", "STAFF",
];

// カード上のバッジに表示する正式な役職ラベル
export const CATEGORY_LABELS: Record<PlayerCategory, string> = {
  ATHLETE: "ATHLETE",
  GROWTH: "GROWTH",
  YOUTH: "YOUTH",
  JUNIOR: "JUNIOR",
  OWNER: "OWNER",
  OPERATOR: "OPERATOR",
  OPERATOR_SUPPORT: "OPERATOR SUPPORT",
  OPERATOR_INTERN: "OPERATOR INTERN",
  JUNIOR_MANAGER: "JUNIOR MANAGER",
  JUNIOR_SUB_MANAGER: "JUNIOR SUB MANAGER",
  DESIGNER: "DESIGNER",
  EDITOR: "EDITOR",
  STREAMER: "STREAMER",
  TRYOUT: "TRYOUT",
  SUSPENDED: "SUSPENDED",
};

export const PUBLIC_CATEGORIES: PlayerCategory[] = [
  "ATHLETE", "GROWTH", "YOUTH", "JUNIOR",
  "OWNER", "OPERATOR", "OPERATOR_SUPPORT", "OPERATOR_INTERN",
  "JUNIOR_MANAGER", "JUNIOR_SUB_MANAGER",
  "STREAMER", "DESIGNER", "EDITOR",
];

// STAFFカテゴリの表示順序
const STAFF_SORT_ORDER: Record<PlayerCategory, number> = {
  OWNER: 0,
  OPERATOR: 1,
  OPERATOR_SUPPORT: 2,
  OPERATOR_INTERN: 3,
  JUNIOR_MANAGER: 4,
  JUNIOR_SUB_MANAGER: 5,
  STREAMER: 6,
  DESIGNER: 7,
  EDITOR: 8,
  ATHLETE: 99, GROWTH: 99, YOUTH: 99, JUNIOR: 99, TRYOUT: 99, SUSPENDED: 99,
};

export const CATEGORY_COLORS: Record<PlayerCategory, string> = {
  ATHLETE: "bg-red-900/60 text-red-300 border border-red-700",
  GROWTH: "bg-amber-900/60 text-amber-300 border border-amber-700",
  YOUTH: "bg-sky-900/60 text-sky-300 border border-sky-700",
  JUNIOR: "bg-emerald-900/60 text-emerald-300 border border-emerald-700",
  OWNER: "bg-purple-900/60 text-purple-300 border border-purple-700",
  OPERATOR: "bg-indigo-900/60 text-indigo-300 border border-indigo-700",
  OPERATOR_SUPPORT: "bg-indigo-900/60 text-indigo-300 border border-indigo-700",
  OPERATOR_INTERN: "bg-indigo-900/60 text-indigo-300 border border-indigo-700",
  JUNIOR_MANAGER: "bg-teal-900/60 text-teal-300 border border-teal-700",
  JUNIOR_SUB_MANAGER: "bg-teal-900/60 text-teal-300 border border-teal-700",
  DESIGNER: "bg-pink-900/60 text-pink-300 border border-pink-700",
  EDITOR: "bg-orange-900/60 text-orange-300 border border-orange-700",
  STREAMER: "bg-violet-900/60 text-violet-300 border border-violet-700",
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
export function sortMembers<T extends { pr_rank: number | null; name: string; category: PlayerCategory }>(players: T[]): T[] {
  return [...players].sort((a, b) => {
    // STAFFはまとめて後ろ、STAFFの中はSTAFF_SORT_ORDERで並ぶ
    const aIsStaff = STAFF_CATEGORIES.includes(a.category);
    const bIsStaff = STAFF_CATEGORIES.includes(b.category);
    if (aIsStaff && !bIsStaff) return 1;
    if (!aIsStaff && bIsStaff) return -1;
    if (aIsStaff && bIsStaff) {
      const aOrder = STAFF_SORT_ORDER[a.category] ?? 99;
      const bOrder = STAFF_SORT_ORDER[b.category] ?? 99;
      if (aOrder !== bOrder) return aOrder - bOrder;
      return a.name.localeCompare(b.name, "ja");
    }
    // 選手: PR昇順、PRなしは名前昇順で後ろ
    if (a.pr_rank && b.pr_rank) return a.pr_rank - b.pr_rank;
    if (a.pr_rank && !b.pr_rank) return -1;
    if (!a.pr_rank && b.pr_rank) return 1;
    return a.name.localeCompare(b.name, "ja");
  });
}
