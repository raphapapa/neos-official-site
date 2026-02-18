import type { Metadata } from "next";
import { getPlayers } from "@/lib/api";
import { AnimateIn } from "@/components/shared/AnimateIn";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { PlayerFilter } from "@/components/player/PlayerFilter";

export const metadata: Metadata = {
  title: "MEMBERS",
  description: "NEOS E-SPORTSのメンバー一覧。Fortniteを中心に活動するメンバーをご紹介します。",
};

export default async function MembersPage() {
  const players = await getPlayers();

  return (
    <div className="pt-28 pb-24 px-4">
      <div className="max-w-7xl mx-auto">
        <AnimateIn>
          <SectionHeading title="MEMBERS" subtitle="Meet our members" />
        </AnimateIn>

        <PlayerFilter players={players} />
      </div>
    </div>
  );
}
