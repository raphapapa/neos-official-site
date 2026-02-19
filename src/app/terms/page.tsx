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
        </div>

        <section className="space-y-3">
          <h2 className="text-lg font-bold text-white border-b border-white/10 pb-2">第1条（適用範囲）</h2>
          <p className="text-sm text-sub-text leading-relaxed">
            本規約は、NEOS E-SPORTS（以下「当チーム」）が運営する公式ウェブサイト（以下「本サイト」）の利用条件を定めるものです。
            本サイトを利用する場合、本規約に同意したものとみなします。
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-bold text-white border-b border-white/10 pb-2">第2条（知的財産権）</h2>
          <p className="text-sm text-sub-text leading-relaxed">
            本サイトに掲載されるロゴ、画像、テキスト、デザイン等のコンテンツに関する著作権その他の知的財産権は、当チームまたは正当な権利者に帰属します。
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-bold text-white border-b border-white/10 pb-2">第3条（禁止事項）</h2>
          <ul className="text-sm text-sub-text list-disc pl-6 space-y-1">
            <li>本サイトのコンテンツを無断で複製・転載する行為</li>
            <li>本サイトの運営を妨害する行為</li>
            <li>お問い合わせフォームを通じた虚偽情報の送信</li>
            <li>その他、当チームが不適切と判断する行為</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-bold text-white border-b border-white/10 pb-2">第4条（未成年の利用）</h2>
          <p className="text-sm text-sub-text leading-relaxed">
            未成年の方が本サイトのフォームを通じて情報を送信する場合は、保護者の同意を得た上で行ってください。
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-bold text-white border-b border-white/10 pb-2">第5条（個人情報）</h2>
          <p className="text-sm text-sub-text leading-relaxed">
            個人情報の取り扱いについては、
            <Link href="/privacy" className="text-neos-red hover:text-neos-red-bright transition-colors">プライバシーポリシー</Link>
            に定めるとおりとします。
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-bold text-white border-b border-white/10 pb-2">第6条（外部リンク）</h2>
          <p className="text-sm text-sub-text leading-relaxed">
            本サイトには外部サイトへのリンクが含まれることがあります。リンク先のコンテンツや個人情報の取り扱いについて、当チームは一切の責任を負いません。
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-bold text-white border-b border-white/10 pb-2">第7条（免責事項）</h2>
          <ul className="text-sm text-sub-text list-disc pl-6 space-y-1">
            <li>当チームは、本サイトの情報の正確性・完全性を保証しません。</li>
            <li>本サイトの利用により生じた損害について、当チームは責任を負いません。</li>
            <li>本サイトは予告なく変更・停止されることがあります。</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-bold text-white border-b border-white/10 pb-2">第8条（規約の改定）</h2>
          <p className="text-sm text-sub-text leading-relaxed">
            本規約は必要に応じて改定されることがあります。改定後の規約は本ページに掲載した時点で効力を生じます。
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-bold text-white border-b border-white/10 pb-2">第9条（準拠法・管轄）</h2>
          <p className="text-sm text-sub-text leading-relaxed">
            本規約は日本法に準拠し、紛争が生じた場合は東京地方裁判所を第一審の専属的合意管轄裁判所とします。
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
