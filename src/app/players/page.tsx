import type { Metadata } from "next";
import { getPlayers } from "@/lib/api";
import { AnimateIn } from "@/components/shared/AnimateIn";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { PlayerFilter } from "@/components/player/PlayerFilter";

export const metadata: Metadata = {
  title: "選手紹介",
  description: "NEOS E-SPORTSの選手一覧。Fortniteを中心に活動するメンバーをご紹介します。",
};

export default async function PlayersPage() {
  const players = await getPlayers();

  return (
    <div className="pt-28 pb-24 px-4">
      <div className="max-w-7xl mx-auto">
        <AnimateIn>
          <SectionHeading title="PLAYERS" subtitle="選手紹介" />
        </AnimateIn>

        <PlayerFilter players={players} />
      </div>
    </div>
  );
}
