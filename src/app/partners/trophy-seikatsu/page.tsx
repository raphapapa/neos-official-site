import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { AnimateIn } from "@/components/shared/AnimateIn";
import { SectionHeading } from "@/components/shared/SectionHeading";

export const metadata: Metadata = {
  title: "トロフィー生活 | パートナー",
  description:
    "NEOS E-SPORTSのスポンサー「トロフィー生活」のご紹介。「おめでとう」や「ありがとう」の想いを形にし、日本に表彰文化を広めることを目指すブランドです。",
};

export default function TrophySeikatsuPage() {
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
                <div className="w-48 h-48 md:w-56 md:h-56 bg-white rounded-lg flex items-center justify-center p-4">
                  <Image
                    src="/images/partners/trophy-seikatsu-logo.jpg"
                    alt="トロフィー生活"
                    width={200}
                    height={200}
                    className="object-contain"
                  />
                </div>
              </div>

              {/* テキスト */}
              <div className="flex-1 text-center md:text-left">
                <h3 className="font-heading text-2xl md:text-3xl tracking-wider text-white mb-6">
                  トロフィー生活
                </h3>
                <div className="space-y-4 text-sub-text text-sm leading-relaxed">
                  <p>
                    トロフィー生活は、「おめでとう」や「ありがとう」といった想いを形にし、日本に表彰文化を広めることを目指すブランドです
                  </p>
                  <p>
                    トロフィーや賞状、メダルなどの表彰品を通じて、賞賛される喜びを一人でも多くの人へ届けることを大切にしています
                  </p>
                  <p>
                    表彰品を通じて、お祝いや感謝の気持ちを形にし、贈る人と贈られる人の双方に喜びを届けることを目指しています
                  </p>
                </div>

                {/* SNS・サイトリンク */}
                <div className="mt-8 flex flex-wrap items-center gap-6 justify-center md:justify-start">
                  <a
                    href="https://x.com/tachikawakeiho1"
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
                    <span>@tachikawakeiho1</span>
                  </a>
                  <a
                    href="https://trophy-seikatsu.com"
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
                    <span>trophy-seikatsu.com</span>
                  </a>
                </div>
              </div>
            </div>
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
