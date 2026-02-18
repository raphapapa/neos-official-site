import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "利用規約",
};

export default function TermsPage() {
  return (
    <div className="min-h-screen py-20 px-4">
      <article className="max-w-3xl mx-auto space-y-8">
        <div className="text-center mb-12">
          <h1 className="font-heading text-4xl text-neos-red mb-4">TERMS OF SERVICE</h1>
          <p className="text-sub-text text-sm">
            ※ 本規約は法的レビュー前のドラフトです。正式版は弁護士の確認後に公開されます。
          </p>
        </div>

        <section className="space-y-3">
          <h2 className="text-lg font-bold text-white border-b border-white/10 pb-2">第1条（適用範囲）</h2>
          <p className="text-sm text-sub-text leading-relaxed">
            本規約は、NEOS E-SPORTS（以下「当チーム」）が運営する公式ウェブサイト（以下「本サイト」）の利用条件を定めるものです。
            本サイトを利用する場合、本規約に同意したものとみなします。
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-bold text-white border-b border-white/10 pb-2">第2条（禁止事項）</h2>
          <ul className="text-sm text-sub-text list-disc pl-6 space-y-1">
            <li>本サイトのコンテンツを無断で複製・転載する行為</li>
            <li>本サイトの運営を妨害する行為</li>
            <li>お問い合わせフォームを通じた虚偽情報の送信</li>
            <li>その他、当チームが不適切と判断する行為</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-bold text-white border-b border-white/10 pb-2">第3条（個人情報）</h2>
          <p className="text-sm text-sub-text leading-relaxed">
            個人情報の取り扱いについては、
            <Link href="/privacy" className="text-neos-red hover:text-neos-red-bright transition-colors">プライバシーポリシー</Link>
            に定めるとおりとします。
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-bold text-white border-b border-white/10 pb-2">第4条（免責事項）</h2>
          <ul className="text-sm text-sub-text list-disc pl-6 space-y-1">
            <li>当チームは、本サイトの情報の正確性・完全性を保証しません。</li>
            <li>本サイトの利用により生じた損害について、当チームは責任を負いません。</li>
            <li>本サイトは予告なく変更・停止されることがあります。</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-bold text-white border-b border-white/10 pb-2">第5条（準拠法）</h2>
          <p className="text-sm text-sub-text leading-relaxed">
            本規約は日本法に準拠し、紛争が生じた場合は大阪地方裁判所を専属的合意管轄裁判所とします。
          </p>
        </section>

        <div className="pt-8 text-center">
          <p className="text-xs text-sub-text/60 mb-6">制定日: 2026年2月18日</p>
          <Link
            href="/"
            className="inline-block font-heading text-sm tracking-widest text-neos-red hover:text-neos-red-bright transition-colors border border-neos-red/30 hover:border-neos-red px-8 py-3"
          >
            TOP PAGE
          </Link>
        </div>
      </article>
    </div>
  );
}
