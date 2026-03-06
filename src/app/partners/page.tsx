import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { getSponsors } from "@/lib/api";
import { AnimateIn } from "@/components/shared/AnimateIn";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { SectionDivider } from "@/components/shared/SectionDivider";
import { SPONSOR_TIER_LABELS, SPONSOR_TIER_ORDER } from "@/lib/constants";

export const metadata: Metadata = {
  title: "パートナー・スポンサー",
  description:
    "NEOS E-SPORTSのパートナー企業・サポーターをご紹介。Fortniteのeスポーツチームの育成を支えるパートナーシッププログラム",
};

const PARTNER_RANKS = [
  {
    name: "UNREAL PARTNER",
    type: "PARTNER" as const,
    description: "最上位パートナー — チームの顔として共に歩む",
    color: "text-red-400",
    border: "border-red-500/40",
  },
  {
    name: "CHAMPION PARTNER",
    type: "PARTNER" as const,
    description: "育成プログラムに深く関与するパートナー",
    color: "text-amber-400",
    border: "border-amber-500/40",
  },
  {
    name: "PLATINUM PARTNER",
    type: "PARTNER" as const,
    description: "ロゴ掲出・活動レポートによる基本パートナーシップ",
    color: "text-slate-300",
    border: "border-slate-400/40",
  },
  {
    name: "GOLD SUPPORTER",
    type: "SUPPORTER" as const,
    description: "小規模な企業・団体による支援",
    color: "text-amber-300",
    border: "border-amber-400/30",
  },
  {
    name: "SILVER SUPPORTER",
    type: "SUPPORTER" as const,
    description: "個人による継続的な支援",
    color: "text-slate-300",
    border: "border-slate-300/30",
  },
  {
    name: "BRONZE SUPPORTER",
    type: "SUPPORTER" as const,
    description: "最も手軽な個人支援プラン",
    color: "text-orange-300",
    border: "border-orange-400/30",
  },
];

const STATS = [
  { label: "設立", value: "2022年" },
  { label: "所属選手", value: "57名" },
  { label: "年齢層", value: "10〜20代" },
  { label: "ゲームタイトル", value: "Fortnite" },
];

const SPONSOR_DESCRIPTIONS: Record<string, string> = {
  トラゼミ:
    "オンライン学習支援サービス。NEOS選手の学業と競技の両立をサポートしていただいています",
};

export default async function PartnersPage() {
  const sponsors = await getSponsors();

  const grouped = SPONSOR_TIER_ORDER.map((tier) => ({
    tier,
    label: SPONSOR_TIER_LABELS[tier],
    items: sponsors.filter((s) => s.tier === tier),
  })).filter((g) => g.items.length > 0);

  return (
    <div className="pt-28 pb-24">
      {/* 1. Hero */}
      <div className="max-w-4xl mx-auto px-4">
        <AnimateIn>
          <SectionHeading title="PARTNERS" subtitle="Our partners" />
        </AnimateIn>
        <AnimateIn delay={0.1}>
          <p className="text-center text-sub-text text-sm sm:text-base leading-relaxed mb-16">
            NEOS E-SPORTSを支えてくださるパートナー企業をご紹介します
          </p>
        </AnimateIn>
      </div>

      <SectionDivider />

      {/* 2. NEOSの数字 */}
      <AnimateIn delay={0.1}>
        <div className="max-w-4xl mx-auto px-4 py-16">
          <h2 className="font-heading text-2xl sm:text-3xl tracking-wider text-white text-center mb-10">
            NEOS E-SPORTS
          </h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {STATS.map((stat) => (
              <div
                key={stat.label}
                className="bg-card rounded-sm p-6 text-center"
              >
                <p className="text-neos-red font-heading text-2xl sm:text-3xl tracking-wider mb-1">
                  {stat.value}
                </p>
                <p className="text-sub-text text-xs tracking-wider">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </AnimateIn>

      <SectionDivider />

      {/* 3. パートナーランクの説明 */}
      <AnimateIn delay={0.1}>
        <div className="max-w-4xl mx-auto px-4 py-16">
          <h2 className="font-heading text-2xl sm:text-3xl tracking-wider text-white text-center mb-4">
            PARTNERSHIP PROGRAM
          </h2>
          <p className="text-center text-sub-text text-sm mb-10">
            Fortniteのランクに準じた6段階のパートナーシッププログラム
          </p>

          {/* PARTNER（企業向け） */}
          <div className="mb-8">
            <p className="text-xs text-sub-text tracking-widest mb-4 uppercase">
              Partner — 企業・団体向け
            </p>
            <div className="grid gap-3">
              {PARTNER_RANKS.filter((r) => r.type === "PARTNER").map((rank) => (
                <div
                  key={rank.name}
                  className={`flex items-center gap-4 bg-card rounded-sm p-4 border ${rank.border}`}
                >
                  <span
                    className={`font-heading text-sm sm:text-base tracking-wider whitespace-nowrap ${rank.color}`}
                  >
                    {rank.name}
                  </span>
                  <span className="text-sub-text text-xs sm:text-sm">
                    {rank.description}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* SUPPORTER（個人向け） */}
          <div className="mb-10">
            <p className="text-xs text-sub-text tracking-widest mb-4 uppercase">
              Supporter — 個人向け
            </p>
            <div className="grid gap-3">
              {PARTNER_RANKS.filter((r) => r.type === "SUPPORTER").map(
                (rank) => (
                  <div
                    key={rank.name}
                    className={`flex items-center gap-4 bg-card rounded-sm p-4 border ${rank.border}`}
                  >
                    <span
                      className={`font-heading text-sm sm:text-base tracking-wider whitespace-nowrap ${rank.color}`}
                    >
                      {rank.name}
                    </span>
                    <span className="text-sub-text text-xs sm:text-sm">
                      {rank.description}
                    </span>
                  </div>
                )
              )}
            </div>
          </div>

          <div className="text-center">
            <Link
              href="/partners/program"
              className="inline-block font-heading text-sm tracking-widest text-neos-red hover:text-neos-red-bright transition-colors border border-neos-red/30 hover:border-neos-red px-8 py-3"
            >
              VIEW PROGRAM DETAILS →
            </Link>
          </div>
        </div>
      </AnimateIn>

      <SectionDivider />

      {/* 4. 現在のパートナー紹介 */}
      <AnimateIn delay={0.1}>
        <div className="max-w-5xl mx-auto px-4 py-16">
          <h2 className="font-heading text-2xl sm:text-3xl tracking-wider text-white text-center mb-12">
            CURRENT PARTNERS
          </h2>

          {grouped.length > 0 ? (
            <div className="space-y-12">
              {grouped.map((group) => (
                <div key={group.tier}>
                  <p className="text-center text-sub-text text-xs tracking-widest mb-8 uppercase">
                    {group.label}
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
                    {group.items.map((sponsor) => (
                      <a
                        key={sponsor.id}
                        href={sponsor.website_url || "#"}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group w-full bg-card rounded-sm p-6 border border-border hover:border-neos-red/30 transition-colors"
                      >
                        <div className="flex items-center justify-center h-24 mb-4">
                          {sponsor.logo_url ? (
                            <Image
                              src={sponsor.logo_url}
                              alt={sponsor.name}
                              width={220}
                              height={110}
                              className="object-contain opacity-70 group-hover:opacity-100 transition-opacity duration-300 max-h-24"
                            />
                          ) : (
                            <span className="font-heading text-xl text-sub-text group-hover:text-white transition-colors">
                              {sponsor.name}
                            </span>
                          )}
                        </div>
                        <div className="text-center">
                          <span className="inline-block text-[10px] font-bold px-2 py-0.5 rounded-sm bg-neos-red/20 text-neos-red mb-2">
                            {group.label}
                          </span>
                          <p className="font-heading text-sm tracking-wider text-white mb-1">
                            {sponsor.name}
                          </p>
                          {SPONSOR_DESCRIPTIONS[sponsor.name] && (
                            <p className="text-sub-text text-xs leading-relaxed">
                              {SPONSOR_DESCRIPTIONS[sponsor.name]}
                            </p>
                          )}
                        </div>
                      </a>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-center text-sub-text py-16">
              Partner information coming soon
            </p>
          )}
        </div>
      </AnimateIn>

      <SectionDivider />

      {/* 5. CTA */}
      <AnimateIn delay={0.1}>
        <div className="max-w-3xl mx-auto px-4 py-16 text-center">
          <h2 className="font-heading text-2xl sm:text-3xl tracking-wider text-white mb-4">
            BECOME A PARTNER
          </h2>
          <p className="text-sub-text text-sm leading-relaxed mb-10">
            NEOS E-SPORTSと共に、eスポーツの未来を創りませんか
            <br />
            企業・個人を問わず、さまざまな形での支援をお待ちしています
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/contact"
              className="inline-block font-heading text-sm tracking-widest text-white bg-neos-red hover:bg-neos-red-bright transition-colors px-8 py-3"
            >
              CONTACT US →
            </Link>
            <Link
              href="/partners/program"
              className="inline-block font-heading text-sm tracking-widest text-neos-red hover:text-neos-red-bright transition-colors border border-neos-red/30 hover:border-neos-red px-8 py-3"
            >
              PROGRAM DETAILS →
            </Link>
          </div>
        </div>
      </AnimateIn>
    </div>
  );
}
