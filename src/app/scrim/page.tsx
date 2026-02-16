import type { Metadata } from "next";
import { AnimateIn } from "@/components/shared/AnimateIn";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { SectionDivider } from "@/components/shared/SectionDivider";

export const metadata: Metadata = {
  title: "SCRIM",
  description:
    "NEOS E-SPORTSが定期開催するスクリム情報 APF SCRIMとJUNIOR SCRIMの紹介",
};

const X_ICON = (
  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

export default function ScrimPage() {
  return (
    <div className="pt-28 pb-24 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <AnimateIn>
          <SectionHeading title="SCRIM" subtitle="続けた先に、強さがある" />
        </AnimateIn>

        {/* Introduction */}
        <AnimateIn delay={0.2}>
          <div className="max-w-2xl mx-auto text-center mb-24">
            <p className="text-white text-lg sm:text-xl leading-relaxed mb-6">
              才能だけで勝てることは少ない
              <br />
              準備した者が、最後に残る
            </p>
            <p className="text-sub-text text-sm sm:text-base leading-loose">
              NEOSは練習環境の提供を目的にスクリムを定期開催している
              <br />
              特別な一日ではなく、当たり前の日常にこそ成長がある
              <br />
              毎週、同じ時間に、同じ熱量で臨む
              <br />
              その積み重ねが、本番で折れない地力になる
            </p>
          </div>
        </AnimateIn>

        <SectionDivider />

        {/* APF SCRIM */}
        <AnimateIn delay={0.1}>
          <section className="py-20">
            <div className="flex items-end gap-4 mb-2">
              <h2 className="font-heading text-3xl sm:text-5xl tracking-wider text-white leading-none">
                APF SCRIM
              </h2>
              <span className="hidden sm:block w-16 h-[1px] bg-neos-red mb-2" />
            </div>
            <p className="text-neos-red font-heading text-sm tracking-widest mb-8 italic">
              週末の朝に、実戦を
            </p>

            <div className="space-y-4 mb-8">
              <p className="text-sub-text leading-relaxed">
                NEOSとAPFの共同運営による朝活スクリム
                <br />
                高い緊張感の中で判断力と対応力を磨く
              </p>
              <p className="text-white text-lg">
                量ではなく密度
                <br />
                一戦ごとに意味のある経験を刻む
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-6 text-sm">
              <span className="bg-card px-4 py-2 rounded-sm text-white font-heading tracking-wider">
                毎週末
              </span>
              <a
                href="https://x.com/APF0401"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sub-text hover:text-white transition-colors"
              >
                {X_ICON}
                <span>@APF0401</span>
              </a>
            </div>
          </section>
        </AnimateIn>

        <SectionDivider />

        {/* JUNIOR SCRIM */}
        <AnimateIn delay={0.1}>
          <section className="py-20">
            <div className="flex items-end gap-4 mb-2">
              <h2 className="font-heading text-3xl sm:text-5xl tracking-wider text-white leading-none">
                JUNIOR SCRIM
              </h2>
              <span className="hidden sm:block w-16 h-[1px] bg-neos-red mb-2" />
            </div>
            <p className="text-neos-red font-heading text-sm tracking-widest mb-8 italic">
              同じ世代で、競い合う
            </p>

            <div className="space-y-4 mb-8">
              <p className="text-sub-text leading-relaxed">
                U13を対象としたNEOS主催の対抗戦
                <br />
                同年代だからこそ生まれる本気の競争がある
              </p>
              <p className="text-white text-lg">
                勝った日も負けた日も、また集まる
                <br />
                場数が「考える力」と「向き合う力」に変わる
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-6 text-sm">
              <span className="bg-card px-4 py-2 rounded-sm text-white font-heading tracking-wider">
                毎週 月・水曜
              </span>
              <a
                href="https://x.com/neosclan_u13"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sub-text hover:text-white transition-colors"
              >
                {X_ICON}
                <span>@neosclan_u13</span>
              </a>
            </div>
          </section>
        </AnimateIn>
      </div>
    </div>
  );
}
