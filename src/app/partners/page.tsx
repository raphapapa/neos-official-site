import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { getSponsors } from "@/lib/api";
import { AnimateIn } from "@/components/shared/AnimateIn";
import { SectionHeading } from "@/components/shared/SectionHeading";

export const metadata: Metadata = {
  title: "パートナー・スポンサー",
  description:
    "NEOS E-SPORTSを支えてくださるパートナー企業・スポンサーをご紹介します",
};

export default async function PartnersPage() {
  const sponsors = await getSponsors();
  const torazemi = sponsors.find((s) => s.name === "トラゼミ");

  const partnerCards = [
    {
      slug: "torazemi",
      name: "トラゼミ",
      tagline: "Online Learning Support",
      logoUrl: torazemi?.logo_url ?? null,
      logoBg: "bg-white",
    },
    {
      slug: "trophy-seikatsu",
      name: "トロフィー生活",
      tagline: "Awards & Recognition",
      logoUrl: "/images/partners/trophy-seikatsu-logo.jpg",
      logoBg: "bg-white",
    },
    {
      slug: "mojhon-jp",
      name: "MOJHON",
      tagline: "Gaming Controllers & Devices",
      logoUrl: "/images/partners/mojhon-jp/logo/MOJHON.png",
      logoBg: "bg-white",
    },
  ];

  return (
    <div className="pt-28 pb-24 px-4">
      <div className="max-w-5xl mx-auto">
        <AnimateIn>
          <SectionHeading title="PARTNERS" subtitle="Our partners" />
        </AnimateIn>

        <AnimateIn delay={0.1}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            {partnerCards.map((partner) => (
              <Link
                key={partner.slug}
                href={`/partners/${partner.slug}`}
                className="group block bg-card border border-border hover:border-neos-red/60 transition-colors rounded-sm overflow-hidden"
              >
                <div
                  className={`flex items-center justify-center ${partner.logoBg} aspect-[16/9] p-8`}
                >
                  {partner.logoUrl ? (
                    <Image
                      src={partner.logoUrl}
                      alt={partner.name}
                      width={280}
                      height={140}
                      className="object-contain max-h-full w-auto"
                    />
                  ) : (
                    <span className="font-heading text-2xl text-black">
                      {partner.name}
                    </span>
                  )}
                </div>
                <div className="p-6 text-center">
                  <p className="text-xs tracking-widest text-neos-red uppercase mb-2">
                    {partner.tagline}
                  </p>
                  <h3 className="font-heading text-xl tracking-wider text-white mb-3">
                    {partner.name}
                  </h3>
                  <span className="inline-block text-sub-text group-hover:text-white transition-colors text-xs tracking-wider">
                    VIEW DETAIL →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </AnimateIn>

        <AnimateIn delay={0.2}>
          <div className="text-center mt-16 p-8 bg-card rounded-sm">
            <h3 className="font-heading text-xl tracking-wider text-white mb-3">
              PARTNERSHIP
            </h3>
            <p className="text-sub-text text-sm mb-6 leading-relaxed">
              NEOS E-SPORTSとのパートナーシップにご興味のある企業様は
              <br className="hidden sm:block" />
              お気軽にお問い合わせください
            </p>
            <a
              href="/contact"
              className="inline-block font-heading text-sm tracking-widest text-neos-red hover:text-neos-red-bright transition-colors border border-neos-red/30 hover:border-neos-red px-8 py-3"
            >
              CONTACT US →
            </a>
          </div>
        </AnimateIn>
      </div>
    </div>
  );
}
