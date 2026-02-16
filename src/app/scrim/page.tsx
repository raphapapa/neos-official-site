import type { Metadata } from "next";
import { AnimateIn } from "@/components/shared/AnimateIn";
import { SectionHeading } from "@/components/shared/SectionHeading";

export const metadata: Metadata = {
  title: "SCRIM",
  description: "NEOS E-SPORTSが主催するスクリム情報。",
};

export default function ScrimPage() {
  return (
    <div className="pt-28 pb-24 px-4">
      <div className="max-w-3xl mx-auto">
        <AnimateIn>
          <SectionHeading title="SCRIM" subtitle="スクリム" />
        </AnimateIn>

        <AnimateIn delay={0.2}>
          <div className="text-center text-sub-text py-16">
            <p className="text-lg mb-4">COMING SOON</p>
            <p className="text-sm leading-relaxed">
              スクリム情報は準備中です。
              <br />
              詳細が決まり次第、こちらで公開いたします。
            </p>
          </div>
        </AnimateIn>
      </div>
    </div>
  );
}
