import Image from "next/image";
import { AnimateIn } from "@/components/shared/AnimateIn";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { SPONSOR_TIER_LABELS } from "@/lib/constants";
import type { Sponsor, SponsorTier } from "@/lib/types";

type Props = {
  sponsors: Sponsor[];
};

const TIER_ORDER: SponsorTier[] = ["GOLD", "SILVER", "BRONZE", "STANDARD"];

export function SponsorSection({ sponsors }: Props) {
  if (sponsors.length === 0) return null;

  const grouped = TIER_ORDER.map((tier) => ({
    tier,
    label: SPONSOR_TIER_LABELS[tier],
    items: sponsors.filter((s) => s.tier === tier),
  })).filter((g) => g.items.length > 0);

  return (
    <section className="py-24 px-4">
      <div className="max-w-5xl mx-auto">
        <AnimateIn>
          <SectionHeading title="PARTNERS" subtitle="Our partners" />
        </AnimateIn>

        {grouped.map((group) => (
          <AnimateIn key={group.tier} delay={0.1}>
            <div className="mb-10">
              <p className="text-center text-sub-text text-xs tracking-widest mb-6 uppercase">
                {group.label}
              </p>
              <div className="flex flex-wrap justify-center items-center gap-8 sm:gap-12">
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
                        width={group.tier === "GOLD" ? 160 : 120}
                        height={group.tier === "GOLD" ? 80 : 60}
                        className="object-contain opacity-60 group-hover:opacity-100 transition-opacity duration-300"
                      />
                    ) : (
                      <span className="text-sub-text group-hover:text-white transition-colors text-sm">
                        {sponsor.name}
                      </span>
                    )}
                  </a>
                ))}
              </div>
            </div>
          </AnimateIn>
        ))}
      </div>
    </section>
  );
}
