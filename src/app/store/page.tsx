import type { Metadata } from "next";
import { AnimateIn } from "@/components/shared/AnimateIn";
import { SectionHeading } from "@/components/shared/SectionHeading";

export const metadata: Metadata = {
  title: "STORE",
  description: "NEOS E-SPORTSオフィシャルグッズストア。",
};

export default function StorePage() {
  return (
    <div className="pt-28 pb-24 px-4">
      <div className="max-w-3xl mx-auto">
        <AnimateIn>
          <SectionHeading title="STORE" subtitle="Official store" />
        </AnimateIn>

        <AnimateIn delay={0.2}>
          <div className="text-center text-sub-text py-16">
            <p className="text-lg mb-4">COMING SOON</p>
            <p className="text-sm leading-relaxed">
              Official merchandise store is coming soon.
              <br />
              Stay tuned for updates.
            </p>
          </div>
        </AnimateIn>
      </div>
    </div>
  );
}
