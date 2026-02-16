"use client";

import { useState, useMemo } from "react";
import {
  toDisplayCategory,
  DISPLAY_CATEGORY_LABELS,
  DISPLAY_CATEGORY_ORDER,
  DISPLAY_CATEGORY_COLORS,
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

export function PlayerFilter({ players }: Props) {
  const [selected, setSelected] = useState<DisplayCategory | null>(null);

  const sorted = useMemo(() => sortMembers(players), [players]);

  const categories = DISPLAY_CATEGORY_ORDER.filter((dc) =>
    sorted.some((p) => toDisplayCategory(p.category) === dc)
  );

  const filtered = selected
    ? sorted.filter((p) => toDisplayCategory(p.category) === selected)
    : sorted;

  return (
    <>
      {/* Filter buttons */}
      <div className="flex flex-wrap justify-center gap-2 mb-12">
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

      {/* Player grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
        {filtered.map((player) => (
            <Link
              key={player.id}
              href={`/members/${player.id}`}
              className="group block"
            >
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
                    {player.name}
                  </h3>
                </div>
              </div>
            </Link>
          ))}
      </div>
    </>
  );
}
