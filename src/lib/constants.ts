import type { PlayerCategory, ArticleCategory, SponsorTier } from "./types";

export const CATEGORY_LABELS: Record<PlayerCategory, string> = {
  ATHLETE: "アスリート",
  GROWTH: "育成",
  YOUTH: "ユース",
  JUNIOR: "ジュニア",
  OWNER: "オーナー",
  OPERATOR: "運営",
  OPERATOR_SUPPORT: "運営サポート",
  OPERATOR_INTERN: "運営インターン",
  JUNIOR_MANAGER: "ジュニアマネージャー",
  JUNIOR_SUB_MANAGER: "ジュニアサブマネージャー",
  DESIGNER: "デザイナー",
  EDITOR: "エディター",
  STREAMER: "ストリーマー",
  TRYOUT: "トライアウト",
  SUSPENDED: "休止中",
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

export const SPONSOR_TIER_LABELS: Record<SponsorTier, string> = {
  GOLD: "ゴールドスポンサー",
  SILVER: "シルバースポンサー",
  BRONZE: "ブロンズスポンサー",
  STANDARD: "スポンサー",
};

export const ARTICLE_CATEGORY_LABELS: Record<ArticleCategory, string> = {
  NEWS: "お知らせ",
  BLOG: "ブログ",
  RESULT: "大会結果",
};

export const ARTICLE_CATEGORY_COLORS: Record<ArticleCategory, string> = {
  NEWS: "bg-neos-red/80 text-white",
  BLOG: "bg-blue-700/80 text-white",
  RESULT: "bg-amber-700/80 text-white",
};
