import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { getPlayerById } from "@/lib/api";
import { CATEGORY_LABELS, CATEGORY_COLORS } from "@/lib/constants";
import { AnimateIn } from "@/components/shared/AnimateIn";

type Props = {
  params: Promise<{ id: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const player = await getPlayerById(id);
  if (!player) return { title: "メンバーが見つかりません" };
  const displayName = player.name_en || player.name;
  return {
    title: displayName,
    description: `NEOS E-SPORTS ${CATEGORY_LABELS[player.category]} ${displayName}`,
  };
}

export default async function MemberDetailPage({ params }: Props) {
  const { id } = await params;
  const player = await getPlayerById(id);

  if (!player) notFound();

  const primaryImage = player.images.find((img) => img.is_primary);
  const detailSrc = player.detail_image_url || primaryImage?.url;
  const otherImages = player.images.filter((img) => !img.is_primary);

  return (
    <div className="pt-28 pb-24 px-4">
      <div className="max-w-5xl mx-auto">
        <Link
          href="/members"
          className="inline-block text-sub-text hover:text-white text-sm mb-8 transition-colors"
        >
          ← MEMBERS
        </Link>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {/* Image */}
          <AnimateIn>
            <div className="space-y-4">
              <div className="relative aspect-square overflow-hidden bg-card rounded-sm">
                {detailSrc ? (
                  <Image
                    src={detailSrc}
                    alt={player.name}
                    fill
                    className="object-cover"
                    style={player.detail_image_scale && player.detail_image_scale !== 1 ? { transform: `scale(${player.detail_image_scale})` } : undefined}
                    priority
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-card to-[#111]">
                    <span className="font-heading text-8xl text-white/10">
                      {player.name.charAt(0)}
                    </span>
                  </div>
                )}
              </div>

              {otherImages.length > 0 && (
                <div className="grid grid-cols-4 gap-2">
                  {otherImages.map((img) => (
                    <div
                      key={img.id}
                      className="relative aspect-square overflow-hidden bg-card rounded-sm"
                    >
                      <Image src={img.url} alt="" fill className="object-cover" />
                    </div>
                  ))}
                </div>
              )}
            </div>
          </AnimateIn>

          {/* Info */}
          <AnimateIn delay={0.2}>
            <div>
              <span
                className={`inline-block text-xs px-3 py-1 rounded-sm mb-4 ${CATEGORY_COLORS[player.category]}`}
              >
                {CATEGORY_LABELS[player.category]}
              </span>

              <h1 className="font-heading text-4xl md:text-5xl tracking-wider text-white mb-1">
                {player.name_en || player.name}
              </h1>
              {player.name_en && (
                <p className="text-sub-text text-sm tracking-wider mb-6">
                  {player.name}
                </p>
              )}

              <div className="grid grid-cols-2 gap-4 mb-8">
                {player.jersey_number && (
                  <div className="bg-card p-4 rounded-sm">
                    <p className="text-sub-text text-xs mb-1">NO.</p>
                    <p className="font-heading text-2xl text-white">
                      #{player.jersey_number}
                    </p>
                  </div>
                )}
                {player.pr_rank && (
                  <div className="bg-card p-4 rounded-sm">
                    <p className="text-sub-text text-xs mb-1">PR RANK</p>
                    <p className="font-heading text-2xl text-neos-red">
                      #{player.pr_rank.toLocaleString()}
                    </p>
                  </div>
                )}
                {player.earnings != null && player.earnings > 0 && (
                  <div className="bg-card p-4 rounded-sm">
                    <p className="text-sub-text text-xs mb-1">EARNINGS</p>
                    <p className="font-heading text-2xl text-white">
                      ${player.earnings.toLocaleString()}
                    </p>
                  </div>
                )}
                {player.join_date && (
                  <div className="bg-card p-4 rounded-sm">
                    <p className="text-sub-text text-xs mb-1">JOINED</p>
                    <p className="text-white text-sm">
                      {new Date(player.join_date).toLocaleDateString("ja-JP")}
                    </p>
                  </div>
                )}
              </div>

              {player.profile && (
                <div className="mb-6">
                  <h2 className="font-heading text-lg tracking-wider text-white mb-2">
                    PROFILE
                  </h2>
                  <p className="text-sub-text text-sm leading-relaxed whitespace-pre-wrap">
                    {player.profile}
                  </p>
                </div>
              )}

              {player.achievements && (
                <div className="mb-6">
                  <h2 className="font-heading text-lg tracking-wider text-white mb-2">
                    ACHIEVEMENTS
                  </h2>
                  <p className="text-sub-text text-sm leading-relaxed whitespace-pre-wrap">
                    {player.achievements}
                  </p>
                </div>
              )}

              {player.x_account && (
                <a
                  href={`https://x.com/${player.x_account}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sub-text hover:text-white transition-colors text-sm"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                  @{player.x_account}
                </a>
              )}
            </div>
          </AnimateIn>
        </div>

        {player.tournament_results.length > 0 && (
          <AnimateIn delay={0.3}>
            <div className="mt-16">
              <h2 className="font-heading text-2xl tracking-wider text-white mb-6">
                TOURNAMENT RESULTS
              </h2>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-border text-sub-text">
                      <th className="text-left py-3 pr-4 font-medium">TOURNAMENT</th>
                      <th className="text-left py-3 pr-4 font-medium">DATE</th>
                      <th className="text-right py-3 pr-4 font-medium">PLACE</th>
                      <th className="text-right py-3 pr-4 font-medium">KILLS</th>
                      <th className="text-right py-3 font-medium">PRIZE</th>
                    </tr>
                  </thead>
                  <tbody>
                    {player.tournament_results.map((t, i) => (
                      <tr key={i} className="border-b border-border/50 hover:bg-card/50">
                        <td className="py-3 pr-4 text-white">{t.tournament_name}</td>
                        <td className="py-3 pr-4 text-sub-text">
                          {new Date(t.tournament_date).toLocaleDateString("ja-JP")}
                        </td>
                        <td className="py-3 pr-4 text-right">
                          {t.placement != null && (
                            <span className={t.placement <= 3 ? "text-neos-red font-bold" : "text-white"}>
                              #{t.placement}
                            </span>
                          )}
                        </td>
                        <td className="py-3 pr-4 text-right text-sub-text">{t.kills ?? "-"}</td>
                        <td className="py-3 text-right text-white">
                          {t.prize ? `$${t.prize.toLocaleString()}` : "-"}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </AnimateIn>
        )}
      </div>
    </div>
  );
}
