import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "プライバシーポリシー",
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen py-20 px-4">
      <article className="max-w-3xl mx-auto space-y-8">
        <div className="text-center mb-12">
          <h1 className="font-heading text-4xl text-neos-red mb-4">PRIVACY POLICY</h1>
        </div>

        <section className="space-y-3">
          <h2 className="text-lg font-bold text-white border-b border-white/10 pb-2">1. 運営者情報</h2>
          <p className="text-sm text-sub-text leading-relaxed">
            NEOS E-SPORTS（以下「当チーム」）は、公式ウェブサイト（以下「本サイト」）における個人情報の取り扱いについて、以下のとおりプライバシーポリシーを定めます。
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-bold text-white border-b border-white/10 pb-2">2. 収集する個人情報</h2>
          <p className="text-sm text-sub-text leading-relaxed">本サイトでは、お問い合わせ・入隊希望フォームを通じて以下の情報を収集することがあります。</p>
          <p className="text-xs text-sub-text/60 mt-1 mb-2">※ 当チームでは本名の収集は行いません。活動名（ハンドルネーム）のみお預かりします。</p>
          <ul className="text-sm text-sub-text list-disc pl-6 space-y-1">
            <li>活動名（ハンドルネーム）</li>
            <li>年齢・生年月日</li>
            <li>Epic Games ID</li>
            <li>X（Twitter）ID</li>
            <li>使用デバイス</li>
            <li>志望動機・アピールポイント・他チーム経歴</li>
            <li>パワーランキング・トラッカーURL（任意）</li>
            <li>保護者のX ID・保護者同意の有無（未成年の場合）</li>
            <li>お問い合わせ内容（一般お問い合わせの場合）</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-bold text-white border-b border-white/10 pb-2">3. 利用目的</h2>
          <ul className="text-sm text-sub-text list-disc pl-6 space-y-1">
            <li>お問い合わせへの回答・連絡</li>
            <li>入隊希望者の審査および連絡</li>
            <li>チーム運営・活動の改善</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-bold text-white border-b border-white/10 pb-2">4. Cookie・アクセスログ</h2>
          <p className="text-sm text-sub-text leading-relaxed">
            本サイトでは、サービスの提供・改善のためにCookieおよびアクセスログ（IPアドレス、ブラウザ情報、閲覧ページ等）を取得しています。
            これらの情報は個人を特定するものではありませんが、利用状況の分析に使用することがあります。
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-bold text-white border-b border-white/10 pb-2">5. 第三者提供</h2>
          <p className="text-sm text-sub-text leading-relaxed">
            法令に基づく場合を除き、本人の同意なく個人情報を第三者に提供することはありません。
            サービス運営のため、以下の業務委託先を利用しています。
          </p>
          <ul className="text-sm text-sub-text list-disc pl-6 space-y-1">
            <li>Supabase（データベース）</li>
            <li>Vercel（ホスティング）</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-bold text-white border-b border-white/10 pb-2">6. 未成年者の個人情報</h2>
          <p className="text-sm text-sub-text leading-relaxed">
            当チームはeスポーツチームの性質上、未成年者からの情報を収集することがあります。
            13歳以上の未成年者がフォームを送信する場合は、保護者の同意を得た上で行うようお願いしています。
            保護者の方から開示・訂正・削除の請求があった場合は、速やかに対応いたします。
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-bold text-white border-b border-white/10 pb-2">7. 開示・訂正・削除</h2>
          <p className="text-sm text-sub-text leading-relaxed">
            ご本人（または保護者）は、当チームが保有する個人情報の開示・訂正・削除を請求できます。
            本サイトの<Link href="/contact" className="text-neos-red hover:text-neos-red-bright transition-colors">お問い合わせフォーム</Link>またはX（<a href="https://x.com/neos_fortnite" target="_blank" rel="noopener noreferrer" className="text-neos-red hover:text-neos-red-bright transition-colors">@neos_fortnite</a>）よりご連絡ください。
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-bold text-white border-b border-white/10 pb-2">8. ポリシーの改定</h2>
          <p className="text-sm text-sub-text leading-relaxed">
            本ポリシーは必要に応じて改定されることがあります。改定後のポリシーは本ページに掲載した時点で効力を生じます。
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
