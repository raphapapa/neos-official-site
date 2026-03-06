import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { getSponsors } from "@/lib/api";
import { AnimateIn } from "@/components/shared/AnimateIn";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { SectionDivider } from "@/components/shared/SectionDivider";

export const metadata: Metadata = {
  title: "パートナー",
  description:
    "NEOS E-SPORTSの理念に共感し、共に歩んでくださるパートナーをご紹介します",
};

export default async function PartnersPage() {
  const sponsors = await getSponsors();
  const torazemi = sponsors.find((s) => s.name === "トラゼミ");

  return (
    <div className="pt-28 pb-24">
      {/* タイトル */}
      <AnimateIn>
        <SectionHeading title="PARTNERS" subtitle="Valued Partners" />
      </AnimateIn>

      {/* パートナーロゴ */}
      <AnimateIn delay={0.05}>
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[#0A0A0A] via-[#1A0A0A] to-[#0A0A0A]" />
          <div className="absolute inset-0 opacity-[0.03]" style={{
            backgroundImage: "repeating-linear-gradient(45deg, transparent, transparent 40px, rgba(229,9,20,0.3) 40px, rgba(229,9,20,0.3) 41px)",
          }} />
          <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-neos-red/40 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-neos-red/40 to-transparent" />

          <div className="relative py-20 sm:py-28 lg:py-32 px-4 flex justify-center items-center gap-16 sm:gap-24 lg:gap-32">
            {torazemi?.logo_url && (
              <Image
                src={torazemi.logo_url}
                alt="トラゼミ"
                width={280}
                height={140}
                className="object-contain opacity-70 h-[100px] w-auto"
              />
            )}
            <Image
              src="/images/partners/ajinomoto-game-supporters.png"
              alt="味の素 ゲームサポーターズ"
              width={280}
              height={140}
              className="object-contain h-[100px] w-auto"
            />
          </div>
        </section>
      </AnimateIn>

      {/* 導入テキスト */}
      <AnimateIn delay={0.1}>
        <div className="max-w-2xl mx-auto px-4 py-16 text-center">
          <p className="font-heading text-2xl sm:text-3xl tracking-wider text-white mb-6">
            NEW ERA OF E-SPORTS
          </p>
          <p className="text-sub-text text-sm sm:text-base leading-loose">
            「Eスポーツの新時代を創造する」というNEOSのチーム名にも込められた理念に共感し
            <br />
            ともに歩んでくださるパートナー企業をご紹介します
          </p>
        </div>
      </AnimateIn>

      <SectionDivider />

      {/* トラゼミ */}
      <AnimateIn delay={0.1}>
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4">
            <div className="relative border border-border rounded-sm overflow-hidden">
              <div className="absolute top-0 left-0 w-1 h-full bg-neos-red" />

              <div className="p-8 sm:p-12">
                <div className="flex justify-center mb-8">
                  {torazemi?.logo_url ? (
                    <a
                      href={torazemi.website_url || "#"}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block hover:opacity-80 transition-opacity"
                    >
                      <Image
                        src={torazemi.logo_url}
                        alt="トラゼミ"
                        width={280}
                        height={140}
                        className="object-contain"
                      />
                    </a>
                  ) : (
                    <span className="font-heading text-3xl text-white">
                      トラゼミ
                    </span>
                  )}
                </div>

                <p className="text-sub-text text-xs tracking-widest text-center mb-10 uppercase">
                  Online Learning Support
                </p>

                <div className="space-y-6 max-w-2xl mx-auto">
                  <p className="text-sub-text leading-loose text-sm sm:text-base">
                    私たちは、一人ひとりの状況や特性に合わせた学習支援を大切にしています
                  </p>
                  <p className="text-sub-text leading-loose text-sm sm:text-base">
                    通学が難しい生徒、部活動などで時間に制約のある生徒、勉強に苦手意識を持つ生徒など、学びに向かう環境はそれぞれ異なります。だからこそ、画一的な指導ではなく、その子に合った方法で伴走することが必要だと考えています
                  </p>
                  <p className="text-sub-text leading-loose text-sm sm:text-base">
                    オンラインを中心とした1対1の個別指導によって、移動の負担を減らしながら、無理なく学習を続けられる環境を整えています。教科の理解を深めることはもちろん、自分で考える力、約束を守る力、学び続ける姿勢も育てていきたいと考えています
                  </p>
                  <p className="text-white leading-loose text-sm sm:text-base">
                    私たちは、成績の向上だけをゴールにはしていません。学ぶことを通じて、自分に自信を持ち、自立への一歩を踏み出せることを大切にしています。これからも、より多くの生徒に寄り添える柔軟な学習支援を届けてまいります
                  </p>
                </div>

                {torazemi?.website_url && (
                  <div className="flex justify-center gap-6 mt-10">
                    <a
                      href={torazemi.website_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sub-text hover:text-white text-sm transition-colors"
                    >
                      公式サイト →
                    </a>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
      </AnimateIn>

      <SectionDivider />

      {/* 味の素ゲームサポーターズ */}
      <AnimateIn delay={0.1}>
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4">
            <div className="relative border border-border rounded-sm overflow-hidden">
              <div className="absolute top-0 left-0 w-1 h-full bg-neos-red" />

              <div className="p-8 sm:p-12">
                <div className="flex justify-center mb-8">
                  <a
                    href="https://x.com/AjiGameSupport"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block bg-white rounded-sm px-8 py-5 hover:opacity-80 transition-opacity"
                  >
                    <Image
                      src="/images/partners/ajinomoto-game-supporters.png"
                      alt="味の素 ゲームサポーターズ"
                      width={280}
                      height={140}
                      className="object-contain"
                    />
                  </a>
                </div>

                <p className="text-sub-text text-xs tracking-widest text-center mb-10 uppercase">
                  Conditioning Support for Gamers
                </p>

                <div className="space-y-6 max-w-2xl mx-auto">
                  <p className="text-sub-text leading-loose text-sm sm:text-base">
                    私たちは、日々のコンディショニングが、挑戦する人の力を支える土台になると考えています
                  </p>
                  <p className="text-sub-text leading-loose text-sm sm:text-base">
                    味の素株式会社は、長年にわたり、アミノ酸の研究とともに、さまざまな競技者のコンディショニング支援に取り組んできました。その知見を、ゲームやeスポーツに向き合う方々にも生かしていきたいという想いから、「ゲームサポーターズ」の取り組みが生まれました
                  </p>
                  <p className="text-sub-text leading-loose text-sm sm:text-base">
                    ゲームに真剣に向き合う日々のなかでも、体調管理、集中力、生活リズム、緊張との向き合い方は、パフォーマンスに大きく関わります。私たちは、そうした目に見えにくい土台の部分に着目し、無理のない形で日常に取り入れられるサポートのあり方を探り続けています
                  </p>
                  <p className="text-white leading-loose text-sm sm:text-base">
                    目指しているのは、特別な場面だけを支えることではなく、ゲーミングライフのなかに自然と溶け込みながら、挑戦する人の毎日を支えることです。これからも現場に学び、誠実に向き合いながら、再現性のある支援の形を築いてまいります
                  </p>
                </div>

                <div className="flex justify-center gap-6 mt-10">
                  <a
                    href="https://x.com/AjiGameSupport"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sub-text hover:text-white text-sm transition-colors"
                  >
                    ゲームサポーターズ →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </AnimateIn>

      <SectionDivider />

      {/* パートナーの想い */}
      <AnimateIn delay={0.1}>
        <div className="max-w-2xl mx-auto px-4 py-20 text-center">
          <p className="text-sub-text text-sm sm:text-base leading-loose mb-4">
            私たちは、それぞれの事業や専門性を通じて、人の可能性を支えることを大切にしています
          </p>
          <p className="text-sub-text text-sm sm:text-base leading-loose">
            目の前の成果だけではなく、その先に続く成長や挑戦まで見据えながら、価値を届けてまいります
          </p>
        </div>
      </AnimateIn>

      <SectionDivider />

      {/* 導線 */}
      <AnimateIn delay={0.1}>
        <div className="max-w-2xl mx-auto px-4 py-16 text-center">
          <p className="text-sub-text text-sm mb-6">
            パートナーシップにご関心をお持ちの方はこちら
          </p>
          <Link
            href="/partners/program"
            className="text-sub-text hover:text-white text-sm transition-colors"
          >
            パートナープログラムについて →
          </Link>
        </div>
      </AnimateIn>
    </div>
  );
}
