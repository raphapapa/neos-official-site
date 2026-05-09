import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { getSponsors } from "@/lib/api";
import { AnimateIn } from "@/components/shared/AnimateIn";
import { SectionHeading } from "@/components/shared/SectionHeading";

export const metadata: Metadata = {
  title: "トラゼミ | パートナー",
  description:
    "NEOS E-SPORTSのスポンサー「トラゼミ」のご紹介。一人ひとりに合わせたオンライン1対1の個別指導で、無理なく学習を続けられる環境を届けます。",
};

export default async function TorazemiPage() {
  const sponsors = await getSponsors();
  const torazemi = sponsors.find((s) => s.name === "トラゼミ");

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
                  {torazemi?.logo_url ? (
                    <Image
                      src={torazemi.logo_url}
                      alt="トラゼミ"
                      width={200}
                      height={200}
                      className="object-contain"
                    />
                  ) : (
                    <span className="font-heading text-2xl text-black">
                      トラゼミ
                    </span>
                  )}
                </div>
              </div>

              {/* テキスト */}
              <div className="flex-1 text-center md:text-left">
                <h3 className="font-heading text-2xl md:text-3xl tracking-wider text-white mb-6">
                  トラゼミ
                </h3>
                <div className="space-y-4 text-sub-text text-sm leading-relaxed">
                  <p>
                    一人ひとりの状況や特性に合わせた学習支援を大切にしています。
                  </p>
                  <p>
                    通学が難しい生徒、部活動などで時間に制約のある生徒、勉強に苦手意識を持つ生徒など、学びに向かう環境はそれぞれ異なります。だからこそ、画一的な指導ではなく、その子に合った方法で伴走することが必要だと考えています。
                  </p>
                  <p>
                    オンラインを中心とした1対1の個別指導によって、移動の負担を減らしながら、無理なく学習を続けられる環境を整えています。教科の理解を深めることはもちろん、自分で考える力、約束を守る力、学び続ける姿勢も育てていきたいと考えています。
                  </p>
                  <p>
                    成績の向上だけをゴールにはしていません。学ぶことを通じて、自分に自信を持ち、自立への一歩を踏み出せることを大切にしています。
                  </p>
                </div>

                {/* 公式サイトリンク */}
                <div className="mt-8 flex flex-wrap items-center gap-6 justify-center md:justify-start">
                  <a
                    href={torazemi?.website_url || "https://www.torazemi.com/"}
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
                    <span>torazemi.com</span>
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
