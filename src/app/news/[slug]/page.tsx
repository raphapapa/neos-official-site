import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { getArticleBySlug } from "@/lib/api";
import { ARTICLE_CATEGORY_LABELS, ARTICLE_CATEGORY_COLORS, formatDateJP } from "@/lib/constants";
import { AnimateIn } from "@/components/shared/AnimateIn";
import { ShareButtons } from "@/components/article/ShareButtons";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = await getArticleBySlug(slug);
  if (!article) return { title: "記事が見つかりません" };
  const description = article.body.slice(0, 160).replace(/[#*\n]/g, "");
  return {
    title: article.title,
    description,
    openGraph: {
      title: article.title,
      description,
      ...(article.thumbnail_url && {
        images: [{ url: article.thumbnail_url, width: 1200, height: 630 }],
      }),
    },
    twitter: {
      card: "summary_large_image",
      title: article.title,
      description,
      ...(article.thumbnail_url && {
        images: [article.thumbnail_url],
      }),
    },
  };
}

export default async function ArticleDetailPage({ params }: Props) {
  const { slug } = await params;
  const article = await getArticleBySlug(slug);

  if (!article) notFound();

  return (
    <div className="pt-28 pb-24">
      <AnimateIn>
        <article>
          {/* Thumbnail — full bleed */}
          {article.thumbnail_url && (
            <div className="relative aspect-video overflow-hidden">
              <Image
                src={article.thumbnail_url}
                alt={article.title}
                fill
                className="object-cover"
                priority
              />
            </div>
          )}

          {/* Header */}
          <div className="max-w-3xl mx-auto px-4 mt-10 mb-10">

            <div className="flex items-center gap-3 mb-4">
              <span
                className={`text-[10px] font-bold px-2 py-0.5 rounded-sm ${
                  ARTICLE_CATEGORY_COLORS[article.category]
                }`}
              >
                {ARTICLE_CATEGORY_LABELS[article.category]}
              </span>
              <time className="text-sub-text text-sm">
                {formatDateJP(article.published_at)}
              </time>
            </div>
            <h1 className="text-2xl md:text-3xl font-bold text-white leading-tight mb-6">
              {article.title}
            </h1>
            <ShareButtons title={article.title} slug={slug} />
          </div>

          {/* Body */}
          <div className="max-w-3xl mx-auto px-4">
            <div className="site-prose">
              <ReactMarkdown
                remarkPlugins={[remarkGfm]}
                components={{
                  img: ({ src, alt }) => (
                    <span className="block my-6">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={src || ""} alt={alt || ""} className="w-full rounded-sm" />
                    </span>
                  ),
                }}
              >
                {article.body}
              </ReactMarkdown>
            </div>

            {/* Adjacent Articles Navigation */}
            {article.adjacent && (article.adjacent.prev || article.adjacent.next) && (
              <nav className="border-t border-border mt-16 pt-8 flex justify-between items-start gap-8">
                {article.adjacent.prev ? (
                  <Link
                    href={`/news/${article.adjacent.prev.slug}`}
                    className="group flex-1 min-w-0"
                  >
                    <span className="text-sub-text text-xs tracking-wider">← PREV</span>
                    <p className="text-white text-sm mt-1 truncate group-hover:text-neos-red transition-colors">
                      {article.adjacent.prev.title}
                    </p>
                  </Link>
                ) : (
                  <div className="flex-1" />
                )}
                {article.adjacent.next ? (
                  <Link
                    href={`/news/${article.adjacent.next.slug}`}
                    className="group flex-1 min-w-0 text-right"
                  >
                    <span className="text-sub-text text-xs tracking-wider">NEXT →</span>
                    <p className="text-white text-sm mt-1 truncate group-hover:text-neos-red transition-colors">
                      {article.adjacent.next.title}
                    </p>
                  </Link>
                ) : (
                  <div className="flex-1" />
                )}
              </nav>
            )}
          </div>
        </article>
      </AnimateIn>
    </div>
  );
}
