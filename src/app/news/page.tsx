import type { Metadata } from "next";
import Link from "next/link";
import { getArticles } from "@/lib/api";
import { AnimateIn } from "@/components/shared/AnimateIn";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { ArticleCard } from "@/components/article/ArticleCard";
import { ARTICLE_CATEGORY_LABELS } from "@/lib/constants";
import type { ArticleCategory } from "@/lib/types";

export const metadata: Metadata = {
  title: "お知らせ",
  description: "NEOS E-SPORTSの最新ニュース、ブログ、大会結果をお届けします。",
};

type Props = {
  searchParams: Promise<{ page?: string; category?: string }>;
};

const CATEGORIES: (ArticleCategory | "ALL")[] = ["ALL", "NEWS", "BLOG", "RESULT"];

export default async function NewsPage({ searchParams }: Props) {
  const { page: pageStr, category } = await searchParams;
  const page = Number(pageStr) || 1;

  const { articles, pagination } = await getArticles(
    page,
    9,
    category && category !== "ALL" ? category : undefined
  );

  return (
    <div className="pt-28 pb-24 px-4">
      <div className="max-w-7xl mx-auto">
        <AnimateIn>
          <SectionHeading title="NEWS" subtitle="Latest updates" />
        </AnimateIn>

        {/* Category filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {CATEGORIES.map((cat) => {
            const isActive = cat === "ALL" ? !category || category === "ALL" : category === cat;
            const href =
              cat === "ALL"
                ? "/news"
                : `/news?category=${cat}`;
            return (
              <Link
                key={cat}
                href={href}
                className={`text-xs px-4 py-2 rounded-sm transition-colors ${
                  isActive
                    ? "bg-neos-red text-white"
                    : "bg-card text-sub-text hover:text-white"
                }`}
              >
                {cat === "ALL"
                  ? "ALL"
                  : ARTICLE_CATEGORY_LABELS[cat as ArticleCategory]}
              </Link>
            );
          })}
        </div>

        {/* Articles grid */}
        {articles.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.map((article, i) => (
              <AnimateIn key={article.id} delay={0.05 * i}>
                <ArticleCard article={article} />
              </AnimateIn>
            ))}
          </div>
        ) : (
          <p className="text-center text-sub-text py-16">
            No articles found
          </p>
        )}

        {/* Pagination */}
        {pagination.totalPages > 1 && (
          <div className="flex justify-center items-center gap-4 mt-12">
            {page > 1 && (
              <Link
                href={`/news?page=${page - 1}${category ? `&category=${category}` : ""}`}
                className="text-sm text-sub-text hover:text-white transition-colors border border-border px-4 py-2 rounded-sm"
              >
                ← PREV
              </Link>
            )}
            <span className="text-sm text-sub-text">
              {page} / {pagination.totalPages}
            </span>
            {page < pagination.totalPages && (
              <Link
                href={`/news?page=${page + 1}${category ? `&category=${category}` : ""}`}
                className="text-sm text-sub-text hover:text-white transition-colors border border-border px-4 py-2 rounded-sm"
              >
                NEXT →
              </Link>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
