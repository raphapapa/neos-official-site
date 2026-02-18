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
          <p className="text-sub-text text-sm">
            ※ 本ポリシーは法的レビュー前のドラフトです。正式版は弁護士の確認後に公開されます。
          </p>
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
          <ul className="text-sm text-sub-text list-disc pl-6 space-y-1">
            <li>お名前</li>
            <li>メールアドレス</li>
            <li>年齢</li>
            <li>Epic Games ID</li>
            <li>プレイ歴</li>
            <li>志望動機</li>
            <li>保護者氏名・連絡先（未成年の場合）</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-bold text-white border-b border-white/10 pb-2">3. 利用目的</h2>
          <ul className="text-sm text-sub-text list-disc pl-6 space-y-1">
            <li>お問い合わせへの回答・連絡</li>
            <li>入隊希望者の審査および連絡</li>
            <li>サービスの改善</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-bold text-white border-b border-white/10 pb-2">4. 第三者提供</h2>
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
          <h2 className="text-lg font-bold text-white border-b border-white/10 pb-2">5. 開示・訂正・削除</h2>
          <p className="text-sm text-sub-text leading-relaxed">
            ご本人は、当チームが保有する個人情報の開示・訂正・削除を請求できます。チーム管理者までご連絡ください。
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-bold text-white border-b border-white/10 pb-2">6. ポリシーの改定</h2>
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
