import Link from "next/link";
import Image from "next/image";
import { AnimateIn } from "@/components/shared/AnimateIn";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { ARTICLE_CATEGORY_LABELS, ARTICLE_CATEGORY_COLORS } from "@/lib/constants";
import type { ArticleSummary } from "@/lib/types";

type Props = {
  articles: ArticleSummary[];
};

export function NewsPreview({ articles }: Props) {
  if (articles.length === 0) return null;

  return (
    <section className="py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <AnimateIn>
          <SectionHeading title="NEWS" subtitle="お知らせ" />
        </AnimateIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {articles.slice(0, 3).map((article, i) => (
            <AnimateIn key={article.id} delay={0.1 * i}>
              <Link
                href={`/news/${article.slug}`}
                className="group block bg-card hover:bg-card-hover rounded-sm overflow-hidden transition-colors"
              >
                {/* Thumbnail */}
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
                      <span className="font-heading text-3xl text-white/10">
                        NEWS
                      </span>
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

                {/* Content */}
                <div className="p-4">
                  <time className="text-sub-text text-xs">
                    {new Date(article.published_at).toLocaleDateString("ja-JP")}
                  </time>
                  <h3 className="text-white text-sm font-medium mt-1 line-clamp-2 group-hover:text-neos-red transition-colors">
                    {article.title}
                  </h3>
                </div>
              </Link>
            </AnimateIn>
          ))}
        </div>

        <AnimateIn delay={0.3}>
          <div className="text-center mt-12">
            <Link
              href="/news"
              className="inline-block font-heading text-sm tracking-widest text-neos-red hover:text-neos-red-bright transition-colors border border-neos-red/30 hover:border-neos-red px-8 py-3"
            >
              VIEW ALL NEWS →
            </Link>
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}
