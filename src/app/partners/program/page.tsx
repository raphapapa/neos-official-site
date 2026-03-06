import type { Metadata } from "next";
import Link from "next/link";
import { AnimateIn } from "@/components/shared/AnimateIn";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { SectionDivider } from "@/components/shared/SectionDivider";

export const metadata: Metadata = {
  title: "パートナーシッププログラム",
  description:
    "NEOS E-SPORTSのパートナーシッププログラム。Fortnite eスポーツチームとともに、次世代の成長を支える取り組みにご参加ください。",
};

const TIERS = [
  { name: "UNREAL", note: "1社限定", color: "from-purple-500 to-fuchsia-500" },
  { name: "CHAMPION", note: "3社限定", color: "from-red-500 to-orange-500" },
  { name: "DIAMOND", note: null, color: "from-cyan-400 to-blue-500" },
  { name: "PLATINUM", note: null, color: "from-emerald-400 to-teal-500" },
  { name: "GOLD", note: null, color: "from-yellow-400 to-amber-500" },
  { name: "SILVER", note: null, color: "from-gray-300 to-gray-400" },
] as const;

const BENEFITS = [
  { label: "公式サイトロゴ掲載", tiers: [true, true, true, true, true, true] },
  { label: "SNS紹介投稿", tiers: [true, true, true, true, true, true] },
  { label: "NEWS記事でのパートナー紹介", tiers: [true, true, true, true, true, false] },
  { label: "AI活動レポート提供", tiers: [true, true, true, true, false, false] },
  { label: "スクリム配信内ロゴ露出", tiers: [true, true, true, false, false, false] },
  { label: "物品の選手配布", tiers: [true, true, true, false, false, false] },
  { label: "ユニフォームロゴ掲載", tiers: [true, true, false, false, false, false] },
  { label: "スクリム冠ネーミングライツ", tiers: [true, false, false, false, false, false] },
  { label: "選手管理データ提供（集計）", tiers: [true, false, false, false, false, false] },
];

const VALUE_CATEGORIES = [
  {
    title: "BRAND EXPOSURE",
    subtitle: "ブランド露出",
    description:
      "公式サイト、SNS、ユニフォームなど、NEOSの活動に関わるあらゆるタッチポイントでパートナーのブランドを露出します",
  },
  {
    title: "CONTENT",
    subtitle: "コンテンツ連携",
    description:
      "NEWS記事でのパートナー紹介や、スクリム配信内でのロゴ露出を通じて、eスポーツファン層へ直接リーチできます",
  },
  {
    title: "DATA & REPORT",
    subtitle: "データ・レポート",
    description:
      "AIが自動生成する活動レポートやスクリムの実績データを定期的に提供。支援の効果を可視化します",
  },
  {
    title: "EXPERIENCE",
    subtitle: "体験・参加",
    description:
      "ユニフォームへのロゴ掲載、スクリムの冠ネーミング、物品の選手配布など、チームの活動に直接関わる体験を提供します",
  },
];

export default function PartnerProgramPage() {
  return (
    <div className="pt-28 pb-24">
      {/* 1. ヒーロー */}
      <AnimateIn>
        <SectionHeading title="PARTNERSHIP PROGRAM" subtitle="Grow together" />
      </AnimateIn>

      <AnimateIn delay={0.1}>
        <div className="max-w-2xl mx-auto px-4 text-center mb-16">
          <p className="text-white text-lg sm:text-xl leading-relaxed mb-6">
            NEOSは、理念に共感し
            <br />
            ともに歩んでくださるパートナーを求めています
          </p>
          <p className="text-sub-text text-sm sm:text-base leading-loose">
            eスポーツを通じて人が本気で成長する環境を設計し、伴走する
            <br />
            その取り組みに、それぞれの立場から関わっていただける仕組みを用意しました
          </p>
        </div>
      </AnimateIn>

      <SectionDivider />

      {/* 2. NEOSについて */}
      <AnimateIn delay={0.1}>
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="font-heading text-2xl sm:text-3xl tracking-wider text-white text-center mb-4">
              ABOUT NEOS
            </h2>
            <p className="text-sub-text text-sm tracking-widest text-center mb-12 uppercase">
              Who we are
            </p>

            <div className="max-w-2xl mx-auto text-center mb-16">
              <p className="text-sub-text text-sm sm:text-base leading-loose mb-4">
                NEOS E-SPORTSは2022年4月設立のFortnite eスポーツチーム
                <br />
                「人が成長する結果として強くなる」を理念に掲げ
                <br />
                選手の育成と競技力の両立を追求しています
              </p>
            </div>

            {/* 数字 */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
              {[
                { number: "57+", label: "所属選手" },
                { number: "7,100+", label: "SNSフォロワー" },
                { number: "300+", label: "スクリム参加者/回" },
                { number: "170,000+", label: "月間Xインプレッション" },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <p className="font-heading text-3xl sm:text-4xl text-white tracking-wider">
                    {stat.number}
                  </p>
                  <p className="text-sub-text text-xs sm:text-sm mt-2">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </AnimateIn>

      <SectionDivider />

      {/* 3. パートナーが関われること */}
      <AnimateIn delay={0.1}>
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="font-heading text-2xl sm:text-3xl tracking-wider text-white text-center mb-4">
              WHAT WE OFFER
            </h2>
            <p className="text-sub-text text-sm tracking-widest text-center mb-12 uppercase">
              Partnership value
            </p>

            <div className="grid sm:grid-cols-2 gap-6">
              {VALUE_CATEGORIES.map((cat) => (
                <div
                  key={cat.title}
                  className="relative border border-border rounded-sm p-6 sm:p-8"
                >
                  <div className="absolute top-0 left-0 w-1 h-full bg-neos-red" />
                  <h3 className="font-heading text-lg tracking-wider text-white mb-1">
                    {cat.title}
                  </h3>
                  <p className="text-sub-text text-xs tracking-widest mb-4">
                    {cat.subtitle}
                  </p>
                  <p className="text-sub-text text-sm leading-relaxed">
                    {cat.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </AnimateIn>

      <SectionDivider />

      {/* 4. 6段階プログラム */}
      <AnimateIn delay={0.1}>
        <section className="py-20">
          <div className="max-w-5xl mx-auto px-4">
            <h2 className="font-heading text-2xl sm:text-3xl tracking-wider text-white text-center mb-4">
              PROGRAM TIERS
            </h2>
            <p className="text-sub-text text-sm tracking-widest text-center mb-12 uppercase">
              6 levels of partnership
            </p>

            {/* ティア名 */}
            <div className="overflow-x-auto">
              <table className="w-full min-w-[700px]">
                <thead>
                  <tr>
                    <th className="text-left py-4 px-3 w-[220px]" />
                    {TIERS.map((tier) => (
                      <th key={tier.name} className="py-4 px-2 text-center">
                        <span
                          className={`inline-block font-heading text-sm sm:text-base tracking-wider bg-gradient-to-r ${tier.color} bg-clip-text text-transparent`}
                        >
                          {tier.name}
                        </span>
                        {tier.note && (
                          <span className="block text-sub-text text-[10px] mt-1">
                            {tier.note}
                          </span>
                        )}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {BENEFITS.map((benefit, i) => (
                    <tr
                      key={benefit.label}
                      className={i % 2 === 0 ? "bg-card/50" : ""}
                    >
                      <td className="py-3 px-3 text-sub-text text-sm">
                        {benefit.label}
                      </td>
                      {benefit.tiers.map((included, j) => (
                        <td key={j} className="py-3 px-2 text-center">
                          {included ? (
                            <span className="text-neos-red text-lg">●</span>
                          ) : (
                            <span className="text-border text-lg">−</span>
                          )}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="text-sub-text text-xs text-center mt-8">
              各ティアの詳細・条件については、お問い合わせください
            </p>
          </div>
        </section>
      </AnimateIn>

      <SectionDivider />

      {/* 5. CTA */}
      <AnimateIn delay={0.1}>
        <section className="py-20">
          <div className="max-w-2xl mx-auto px-4 text-center">
            <h2 className="font-heading text-2xl sm:text-3xl tracking-wider text-white mb-6">
              GET IN TOUCH
            </h2>
            <p className="text-sub-text text-sm sm:text-base leading-loose mb-10">
              NEOSの理念に共感いただける方からのご連絡をお待ちしています
              <br />
              規模や形態を問わず、まずはお気軽にご相談ください
            </p>
            <Link
              href="/contact"
              className="inline-block font-heading text-sm tracking-widest text-neos-red hover:text-neos-red-bright transition-colors border border-neos-red/30 hover:border-neos-red px-10 py-4"
            >
              CONTACT US
            </Link>
          </div>
        </section>
      </AnimateIn>
    </div>
  );
}
