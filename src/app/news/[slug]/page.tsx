import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { getArticleBySlug } from "@/lib/api";
import { ARTICLE_CATEGORY_LABELS, ARTICLE_CATEGORY_COLORS } from "@/lib/constants";
import { AnimateIn } from "@/components/shared/AnimateIn";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = await getArticleBySlug(slug);
  if (!article) return { title: "記事が見つかりません" };
  return {
    title: article.title,
    description: article.body.slice(0, 160).replace(/[#*\n]/g, ""),
  };
}

export default async function ArticleDetailPage({ params }: Props) {
  const { slug } = await params;
  const article = await getArticleBySlug(slug);

  if (!article) notFound();

  return (
    <div className="pt-28 pb-24 px-4">
      <div className="max-w-3xl mx-auto">
        <Link
          href="/news"
          className="inline-block text-sub-text hover:text-white text-sm mb-8 transition-colors"
        >
          ← お知らせ一覧に戻る
        </Link>

        <AnimateIn>
          <article>
            {/* Header */}
            <div className="mb-8">
              <div className="flex items-center gap-3 mb-4">
                <span
                  className={`text-[10px] font-bold px-2 py-0.5 rounded-sm ${
                    ARTICLE_CATEGORY_COLORS[article.category]
                  }`}
                >
                  {ARTICLE_CATEGORY_LABELS[article.category]}
                </span>
                <time className="text-sub-text text-sm">
                  {new Date(article.published_at).toLocaleDateString("ja-JP")}
                </time>
              </div>
              <h1 className="text-2xl md:text-3xl font-bold text-white leading-tight">
                {article.title}
              </h1>
            </div>

            {/* Thumbnail */}
            {article.thumbnail_url && (
              <div className="relative aspect-video overflow-hidden rounded-sm mb-10">
                <Image
                  src={article.thumbnail_url}
                  alt={article.title}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            )}

            {/* Body */}
            <div className="site-prose">
              <ReactMarkdown remarkPlugins={[remarkGfm]}>
                {article.body}
              </ReactMarkdown>
            </div>
          </article>
        </AnimateIn>
      </div>
    </div>
  );
}
