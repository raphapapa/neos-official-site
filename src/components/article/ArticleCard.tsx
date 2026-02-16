import Link from "next/link";
import Image from "next/image";
import { ARTICLE_CATEGORY_LABELS, ARTICLE_CATEGORY_COLORS } from "@/lib/constants";
import type { ArticleSummary } from "@/lib/types";

type Props = {
  article: ArticleSummary;
};

export function ArticleCard({ article }: Props) {
  return (
    <Link
      href={`/news/${article.slug}`}
      className="group block bg-card hover:bg-card-hover rounded-sm overflow-hidden transition-colors"
    >
      <div className="relative aspect-video overflow-hidden">
        {article.thumbnail_url ? (
          <Image
            src={article.thumbnail_url}
            alt={article.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="absolute inset-0 bg-gradient-to-br from-card to-neos-red/10 flex items-center justify-center">
            <span className="font-heading text-3xl text-white/10">NEWS</span>
          </div>
        )}
        <span
          className={`absolute top-3 left-3 text-[10px] font-bold px-2 py-0.5 rounded-sm ${
            ARTICLE_CATEGORY_COLORS[article.category]
          }`}
        >
          {ARTICLE_CATEGORY_LABELS[article.category]}
        </span>
      </div>
      <div className="p-4">
        <time className="text-sub-text text-xs">
          {new Date(article.published_at).toLocaleDateString("ja-JP")}
        </time>
        <h3 className="text-white text-sm font-medium mt-1 line-clamp-2 group-hover:text-neos-red transition-colors">
          {article.title}
        </h3>
        {article.excerpt && (
          <p className="text-sub-text text-xs mt-2 line-clamp-2">
            {article.excerpt}
          </p>
        )}
      </div>
    </Link>
  );
}
