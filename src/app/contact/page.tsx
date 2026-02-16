import type { Metadata } from "next";
import { AnimateIn } from "@/components/shared/AnimateIn";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { ContactForm } from "@/components/contact/ContactForm";

export const metadata: Metadata = {
  title: "お問い合わせ",
  description:
    "NEOS E-SPORTSへの入隊希望・お問い合わせはこちらから。",
};

export default function ContactPage() {
  return (
    <div className="pt-28 pb-24 px-4">
      <div className="max-w-xl mx-auto">
        <AnimateIn>
          <SectionHeading title="CONTACT" subtitle="お問い合わせ" />
        </AnimateIn>

        <AnimateIn delay={0.2}>
          <p className="text-sub-text text-sm text-center mb-10 leading-relaxed">
            NEOS E-SPORTSへの入隊希望やお問い合わせは、
            <br className="hidden sm:block" />
            以下のフォームよりお送りください。
          </p>
        </AnimateIn>

        <AnimateIn delay={0.3}>
          <ContactForm />
        </AnimateIn>
      </div>
    </div>
  );
}
