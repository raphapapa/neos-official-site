import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { AnimateIn } from "@/components/shared/AnimateIn";
import { SectionHeading } from "@/components/shared/SectionHeading";

export const metadata: Metadata = {
  title: "MOJHON | パートナー",
  description:
    "NEOS E-SPORTSのスポンサー「MOJHON（モジョン）」のご紹介。グローバルブランド「BIGBIGWON」の日本展開ブランドとして、プロ仕様のゲーミングコントローラー・アダプターを開発・提供しています。",
};

export default function MojhonJpPage() {
  return (
    <div className="pt-28 pb-24 px-4">
      <div className="max-w-4xl mx-auto">
        <AnimateIn>
          <SectionHeading title="PARTNERS" />
        </AnimateIn>

        <AnimateIn delay={0.1}>
          <div className="mb-16">
            {/* SPONSOR ラベル */}
            <div className="flex justify-center mb-10">
              <span className="text-xs tracking-widest text-neos-red border border-neos-red/40 px-4 py-1.5 uppercase">
                Sponsor
              </span>
            </div>

            {/* メインコンテンツ: ロゴ + 説明 */}
            <div className="flex flex-col md:flex-row items-center md:items-start gap-10 md:gap-14">
              {/* ロゴ */}
              <div className="flex-shrink-0">
                <div className="w-48 h-48 md:w-56 md:h-56 bg-white rounded-lg flex items-center justify-center p-6">
                  <Image
                    src="/images/partners/mojhon-jp/logo/MOJHON.png"
                    alt="MOJHON"
                    width={200}
                    height={200}
                    className="object-contain"
                  />
                </div>
              </div>

              {/* テキスト */}
              <div className="flex-1 text-center md:text-left">
                <h3 className="font-heading text-2xl md:text-3xl tracking-wider text-white mb-2">
                  MOJHON
                </h3>
                <p className="text-xs tracking-widest text-neos-red uppercase mb-6">
                  Play Big Won Big
                </p>
                <div className="space-y-4 text-sub-text text-sm leading-relaxed">
                  <p>
                    MOJHON（モジョン）は、グローバルブランド「BIGBIGWON」の日本展開ブランド
                  </p>
                  <p>
                    プロゲーマーの実戦から逆算した設計思想のもと、ワイヤレスコントローラー・アダプター・振動トリガーなど、勝つために最適化されたゲーミングデバイスを開発・提供
                  </p>
                  <p>
                    BLITZ2・CHOCO・RAINBOW3・storm など、用途とプレイスタイルに応じた幅広いラインナップを展開
                  </p>
                </div>

                {/* SNS・サイトリンク */}
                <div className="mt-8 flex flex-wrap items-center gap-6 justify-center md:justify-start">
                  <a
                    href="https://twitter.com/bigbigwonJP"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sub-text hover:text-white transition-colors text-sm"
                  >
                    <svg
                      className="w-4 h-4"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                    </svg>
                    <span>@bigbigwonJP</span>
                  </a>
                  <a
                    href="https://jp.mojhon.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sub-text hover:text-white transition-colors text-sm"
                  >
                    <svg
                      className="w-4 h-4"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <circle cx="12" cy="12" r="10" />
                      <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                    </svg>
                    <span>jp.mojhon.com</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </AnimateIn>

        {/* 製品ビジュアル */}
        <AnimateIn delay={0.15}>
          <div className="mb-16">
            <div className="relative w-full aspect-video rounded-sm overflow-hidden bg-card">
              <Image
                src="/images/partners/mojhon-jp/product/all-1920x1080.jpg"
                alt="MOJHON 製品ラインナップ"
                fill
                sizes="(max-width: 768px) 100vw, 896px"
                className="object-cover"
              />
            </div>
            <p className="text-center text-sub-text text-xs tracking-widest mt-4 uppercase">
              Product Lineup
            </p>
          </div>
        </AnimateIn>

        {/* パートナーページへ戻る */}
        <AnimateIn delay={0.2}>
          <div className="text-center mt-12">
            <Link
              href="/partners"
              className="inline-block text-sub-text hover:text-white transition-colors text-sm tracking-wider"
            >
              ← BACK TO PARTNERS
            </Link>
          </div>
        </AnimateIn>
      </div>
    </div>
  );
}
