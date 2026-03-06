import type { Metadata } from "next";
import Image from "next/image";
import { AnimateIn } from "@/components/shared/AnimateIn";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { SectionDivider } from "@/components/shared/SectionDivider";

export const metadata: Metadata = {
  title: "スクリム紹介",
  description:
    "NEOS E-SPORTSが定期開催するFortniteスクリム情報。APF SCRIMとJUNIOR SCRIMの紹介。",
};

const X_ICON = (
  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const DISCORD_ICON = (
  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
    <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.095 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.095 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
  </svg>
);

const YOUTUBE_ICON = (
  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
  </svg>
);

export default function ScrimPage() {
  return (
    <div className="pt-28 pb-24">
      {/* Header */}
      <div className="max-w-4xl mx-auto px-4">
        <AnimateIn>
          <SectionHeading title="SCRIM" subtitle="Stay hungry" />
        </AnimateIn>

        {/* Introduction */}
        <AnimateIn delay={0.2}>
          <div className="max-w-2xl mx-auto text-center mb-24">
            <p className="text-white text-lg sm:text-xl leading-relaxed mb-6">
              勝負を分けるのは、準備の総量
              <br />
              最後に残るのは、続けた者だけ
            </p>
            <p className="text-sub-text text-sm sm:text-base leading-loose">
              練習環境の提供を目的としたスクリムの定期開催
              <br />
              特別な一日ではなく、当たり前の日常にこそ成長がある
              <br />
              毎週、同じ時間に、同じ熱量で臨む
              <br />
              その積み重ねが、本番で折れない地力になる
            </p>
          </div>
        </AnimateIn>
      </div>

      <SectionDivider />

      {/* APF SCRIM */}
      <AnimateIn delay={0.1}>
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4">
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
          </div>

          <div className="relative aspect-[16/9] overflow-hidden mb-8">
            <Image
              src="/images/scrim/apf-scrim.jpg"
              alt="APF SCRIM"
              fill
              className="object-cover"
            />
          </div>

          <div className="max-w-4xl mx-auto px-4">
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
              <a
                href="https://discord.gg/V7bJRMezu7"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sub-text hover:text-white transition-colors"
              >
                {DISCORD_ICON}
                <span>Discord</span>
              </a>
              <a
                href="https://www.youtube.com/@nakasanta"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sub-text hover:text-white transition-colors"
              >
                {YOUTUBE_ICON}
                <span>@nakasanta</span>
              </a>
            </div>
          </div>
        </section>
      </AnimateIn>

      <SectionDivider />

      {/* JUNIOR SCRIM */}
      <AnimateIn delay={0.1}>
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4">
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
                一人ひとりが獅子になる
                <br />
                U13を対象としたNEOS主催ソロラガ
              </p>
              <p className="text-white text-lg">
                勝った日も負けた日も、また集まる
                <br />
                場数が「考える力」と「向き合う力」に変わる
              </p>
            </div>
          </div>

          <div className="relative aspect-[16/9] overflow-hidden mb-8">
            <Image
              src="/images/scrim/junior-scrim.jpg"
              alt="JUNIOR SCRIM"
              fill
              className="object-cover"
            />
          </div>

          <div className="max-w-4xl mx-auto px-4">
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
              <a
                href="https://discord.gg/f6D66TAWzx"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sub-text hover:text-white transition-colors"
              >
                {DISCORD_ICON}
                <span>Discord</span>
              </a>
              <a
                href="https://www.youtube.com/@akigori-555"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sub-text hover:text-white transition-colors"
              >
                {YOUTUBE_ICON}
                <span>@akigori-555</span>
              </a>
            </div>
          </div>
        </section>
      </AnimateIn>
    </div>
  );
}
