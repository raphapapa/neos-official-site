"use client";

import { useState, useMemo } from "react";
import {
  toDisplayCategory,
  DISPLAY_CATEGORY_LABELS,
  DISPLAY_CATEGORY_ORDER,
  CATEGORY_LABELS,
  CATEGORY_COLORS,
  sortMembers,
} from "@/lib/constants";
import type { DisplayCategory } from "@/lib/constants";
import type { Player } from "@/lib/types";
import Link from "next/link";
import Image from "next/image";

type Props = {
  players: Player[];
};

const SECTION_HEADINGS: Record<DisplayCategory, { title: string; subtitle: string }> = {
  ATHLETE: { title: "ATHLETE", subtitle: "The frontline competitors" },
  GROWTH: { title: "GROWTH", subtitle: "Rising to the next level" },
  YOUTH: { title: "YOUTH", subtitle: "Future of NEOS" },
  JUNIOR: { title: "JUNIOR", subtitle: "Where it all begins" },
  STAFF: { title: "STAFF", subtitle: "Behind the scenes" },
};

function PlayerCard({ player }: { player: Player }) {
  return (
    <Link href={`/members/${player.id}`} className="group block">
      <div className="relative aspect-square overflow-hidden bg-card rounded-sm">
        {player.image_url ? (
          <Image
            src={player.image_url}
            alt={player.name_en || player.name}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-card to-[#111]">
            <span className="font-heading text-5xl text-white/10">
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
          <h3 className="font-heading text-lg sm:text-xl tracking-wider text-white">
            {player.name_en || player.name}
          </h3>
        </div>
      </div>
    </Link>
  );
}

function SectionHeading({ dc }: { dc: DisplayCategory }) {
  const { title, subtitle } = SECTION_HEADINGS[dc];
  return (
    <div className="mb-8 flex items-end gap-4">
      <h2 className="font-heading text-3xl sm:text-4xl tracking-wider text-white leading-none">
        {title}
      </h2>
      <span className="hidden sm:block w-16 h-[1px] bg-neos-red mb-2" />
      <p className="text-sub-text text-xs sm:text-sm tracking-wider mb-0.5 italic">
        {subtitle}
      </p>
    </div>
  );
}

export function PlayerFilter({ players }: Props) {
  const [selected, setSelected] = useState<DisplayCategory | null>(null);

  const sorted = useMemo(() => sortMembers(players), [players]);

  const categories = DISPLAY_CATEGORY_ORDER.filter((dc) =>
    sorted.some((p) => toDisplayCategory(p.category) === dc)
  );

  // カテゴリ別にグループ化
  const grouped = useMemo(() => {
    const displayCategories = selected ? [selected] : categories;
    return displayCategories
      .map((dc) => ({
        dc,
        players: sorted.filter((p) => toDisplayCategory(p.category) === dc),
      }))
      .filter((g) => g.players.length > 0);
  }, [sorted, selected, categories]);

  return (
    <>
      {/* Filter buttons */}
      <div className="flex flex-wrap justify-center gap-2 mb-16">
        <button
          onClick={() => setSelected(null)}
          className={`text-xs px-4 py-2 rounded-sm transition-colors ${
            !selected
              ? "bg-neos-red text-white"
              : "bg-card text-sub-text hover:text-white"
          }`}
        >
          ALL
        </button>
        {categories.map((dc) => (
          <button
            key={dc}
            onClick={() => setSelected(dc)}
            className={`text-xs px-4 py-2 rounded-sm transition-colors ${
              selected === dc
                ? "bg-neos-red text-white"
                : "bg-card text-sub-text hover:text-white"
            }`}
          >
            {DISPLAY_CATEGORY_LABELS[dc]}
          </button>
        ))}
      </div>

      {/* Grouped sections */}
      <div className="space-y-20">
        {grouped.map(({ dc, players: groupPlayers }) => (
          <section key={dc}>
            <SectionHeading dc={dc} />
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
              {groupPlayers.map((player) => (
                <PlayerCard key={player.id} player={player} />
              ))}
            </div>
          </section>
        ))}
      </div>
    </>
  );
}
