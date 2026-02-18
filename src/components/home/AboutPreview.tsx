import Link from "next/link";
import { AnimateIn } from "@/components/shared/AnimateIn";
import { SectionHeading } from "@/components/shared/SectionHeading";

export function AboutPreview() {
  return (
    <section className="py-24 px-4">
      <div className="max-w-4xl mx-auto">
        <AnimateIn>
          <SectionHeading title="ABOUT" subtitle="About us" />
        </AnimateIn>

        <AnimateIn delay={0.2}>
          <div className="text-center space-y-6">
            <p className="text-sub-text leading-relaxed text-base sm:text-lg">
              eスポーツを通じて人が本気で成長する環境を設計し、伴走する
              <br className="hidden sm:block" />
              「勝つために人を使う」のではなく「人が成長する結果として競技力が高まる」
              <br className="hidden sm:block" />
              それがNEOS E-SPORTSの信じるeスポーツの姿
            </p>
            <Link
              href="/about"
              className="inline-block font-heading text-sm tracking-widest text-neos-red hover:text-neos-red-bright transition-colors border border-neos-red/30 hover:border-neos-red px-8 py-3"
            >
              MORE ABOUT US →
            </Link>
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}
