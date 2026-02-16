import Link from "next/link";
import Image from "next/image";
import { AnimateIn } from "@/components/shared/AnimateIn";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { CATEGORY_LABELS, CATEGORY_COLORS, sortMembers } from "@/lib/constants";
import type { Player } from "@/lib/types";

type Props = {
  players: Player[];
};

export function PlayerHighlight({ players }: Props) {
  const sorted = sortMembers(players);
  const featured = sorted.slice(0, 6);

  if (featured.length === 0) return null;

  return (
    <section className="py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <AnimateIn>
          <SectionHeading title="MEMBERS" subtitle="メンバー紹介" />
        </AnimateIn>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
          {featured.map((player, i) => (
              <AnimateIn key={player.id} delay={0.1 * i}>
                <Link href={`/members/${player.id}`} className="group block">
                  <div className="relative aspect-[3/4] overflow-hidden bg-card rounded-sm">
                    {player.image_url ? (
                      <Image
                        src={player.image_url}
                        alt={player.name}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    ) : (
                      <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-card to-[#111]">
                        <span className="font-heading text-4xl text-white/10">
                          {player.name.charAt(0)}
                        </span>
                      </div>
                    )}

                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-neos-red scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />

                    <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4">
                      <span
                        className={`inline-block text-[10px] px-2 py-0.5 rounded-sm mb-2 ${
                          CATEGORY_COLORS[player.category]
                        }`}
                      >
                        {CATEGORY_LABELS[player.category]}
                      </span>
                      <h3 className="font-heading text-xl sm:text-2xl tracking-wider text-white">
                        {player.name}
                      </h3>
                    </div>
                  </div>
                </Link>
              </AnimateIn>
            ))}
        </div>

        <AnimateIn delay={0.3}>
          <div className="text-center mt-12">
            <Link
              href="/members"
              className="inline-block font-heading text-sm tracking-widest text-neos-red hover:text-neos-red-bright transition-colors border border-neos-red/30 hover:border-neos-red px-8 py-3"
            >
              VIEW ALL MEMBERS →
            </Link>
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}
