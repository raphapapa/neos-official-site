// Player types
export type PlayerCategory =
  | "ATHLETE" | "GROWTH" | "YOUTH" | "JUNIOR"
  | "OWNER" | "OPERATOR" | "OPERATOR_SUPPORT" | "OPERATOR_INTERN"
  | "JUNIOR_MANAGER" | "JUNIOR_SUB_MANAGER"
  | "DESIGNER" | "EDITOR" | "STREAMER"
  | "TRYOUT" | "SUSPENDED";

export type Player = {
  id: string;
  name: string;
  name_en: string | null;
  category: PlayerCategory;
  profile: string | null;
  achievements: string | null;
  x_account: string | null;
  pr_rank: number | null;
  earnings: number | null;
  jersey_number: string | null;
  image_url: string | null;
};

export type PlayerImage = {
  id: string;
  url: string;
  type: "AVATAR" | "ORIGINAL_CHAR" | "PHOTO" | "OTHER";
  is_primary: boolean;
};

export type TournamentResult = {
  tournament_name: string;
  tournament_date: string;
  tournament_type: string | null;
  region: string | null;
  placement: number | null;
  kills: number | null;
  prize: number | null;
  team_members: string[] | null;
};

export type PlayerDetail = Omit<Player, "image_url"> & {
  join_date: string | null;
  detail_image_url?: string | null;
  images: PlayerImage[];
  tournament_results: TournamentResult[];
};

// Article types
export type ArticleCategory = "NEWS" | "BLOG" | "RESULT";

export type ArticleSummary = {
  id: string;
  title: string;
  slug: string;
  excerpt: string | null;
  thumbnail_url: string | null;
  category: ArticleCategory;
  published_at: string;
};

export type Article = {
  id: string;
  title: string;
  slug: string;
  body: string;
  thumbnail_url: string | null;
  category: ArticleCategory;
  published_at: string;
};

export type Pagination = {
  page: number;
  limit: number;
  total: number;
  totalPages: number;
};

export type ArticlesResponse = {
  articles: ArticleSummary[];
  pagination: Pagination;
};

// Sponsor types
export type SponsorTier = "DIAMOND" | "PLATINUM" | "GOLD" | "SILVER" | "BRONZE";

export type Sponsor = {
  id: string;
  name: string;
  logo_url: string | null;
  website_url: string | null;
  tier: SponsorTier;
};

// Contact types
export type ContactForm = {
  name: string;
  email?: string;
  age?: number;
  epic_id?: string;
  motivation?: string;
  play_history?: string;
  parent_name?: string;
  parent_contact?: string;
  message?: string;
  type?: "JOIN" | "GENERAL";
};

// Site settings
export type SiteSettings = Record<string, string>;
