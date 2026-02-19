import type { Metadata } from "next";
import Image from "next/image";
import { getSponsors } from "@/lib/api";
import { AnimateIn } from "@/components/shared/AnimateIn";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { SPONSOR_TIER_LABELS, SPONSOR_TIER_ORDER } from "@/lib/constants";

export const metadata: Metadata = {
  title: "PARTNERS",
  description: "NEOS E-SPORTSを支えてくださるパートナー企業をご紹介します。",
};

const TIER_ORDER = SPONSOR_TIER_ORDER;

export default async function PartnersPage() {
  const sponsors = await getSponsors();

  const grouped = TIER_ORDER.map((tier) => ({
    tier,
    label: SPONSOR_TIER_LABELS[tier],
    items: sponsors.filter((s) => s.tier === tier),
  })).filter((g) => g.items.length > 0);

  return (
    <div className="pt-28 pb-24 px-4">
      <div className="max-w-5xl mx-auto">
        <AnimateIn>
          <SectionHeading title="PARTNERS" subtitle="Our partners" />
        </AnimateIn>

        {grouped.length > 0 ? (
          grouped.map((group) => (
            <AnimateIn key={group.tier} delay={0.1}>
              <div className="mb-16">
                <p className="text-center text-sub-text text-xs tracking-widest mb-8 uppercase">
                  {group.label}
                </p>
                <div className="flex flex-wrap justify-center items-center gap-10 sm:gap-16">
                  {group.items.map((sponsor) => (
                    <a
                      key={sponsor.id}
                      href={sponsor.website_url || "#"}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group"
                    >
                      {sponsor.logo_url ? (
                        <Image
                          src={sponsor.logo_url}
                          alt={sponsor.name}
                          width={group.tier === "DIAMOND" || group.tier === "PLATINUM" ? 200 : group.tier === "GOLD" ? 180 : 140}
                          height={group.tier === "DIAMOND" || group.tier === "PLATINUM" ? 100 : group.tier === "GOLD" ? 90 : 70}
                          className="object-contain opacity-60 group-hover:opacity-100 transition-opacity duration-300"
                        />
                      ) : (
                        <span className="text-sub-text group-hover:text-white transition-colors">
                          {sponsor.name}
                        </span>
                      )}
                    </a>
                  ))}
                </div>
              </div>
            </AnimateIn>
          ))
        ) : (
          <p className="text-center text-sub-text py-16">
            Partner information coming soon
          </p>
        )}

        <AnimateIn delay={0.2}>
          <div className="text-center mt-8 p-8 bg-card rounded-sm">
            <h3 className="font-heading text-xl tracking-wider text-white mb-3">
              PARTNERSHIP
            </h3>
            <p className="text-sub-text text-sm mb-6 leading-relaxed">
              NEOS E-SPORTSとのパートナーシップにご興味のある企業様は、
              <br className="hidden sm:block" />
              お気軽にお問い合わせください。
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
