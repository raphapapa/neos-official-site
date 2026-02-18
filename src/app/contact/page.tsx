import type { Metadata } from "next";
import { AnimateIn } from "@/components/shared/AnimateIn";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { ContactForm } from "@/components/contact/ContactForm";
import { getSiteSettings } from "@/lib/api";

export const metadata: Metadata = {
  title: "お問い合わせ",
  description:
    "NEOS E-SPORTSへの入隊希望・お問い合わせはこちらから。",
};

export default async function ContactPage() {
  const settings = await getSiteSettings();
  const enrollmentOpen = settings.enrollment_open === "true";
  const enrollmentClosedMessage =
    settings.enrollment_closed_message ||
    "現在、入隊希望の受付を行っておりません。次回の募集開始までお待ちください。";

  return (
    <div className="pt-28 pb-24 px-4">
      <div className="max-w-xl mx-auto">
        <AnimateIn>
          <SectionHeading title="CONTACT" subtitle="Contact us" />
        </AnimateIn>

        <AnimateIn delay={0.2}>
          <p className="text-sub-text text-sm text-center mb-10 leading-relaxed">
            NEOS E-SPORTSへの入隊希望やお問い合わせは、
            <br className="hidden sm:block" />
            以下のフォームよりお送りください。
          </p>
        </AnimateIn>

        <AnimateIn delay={0.3}>
          <ContactForm
            enrollmentOpen={enrollmentOpen}
            enrollmentClosedMessage={enrollmentClosedMessage}
          />
        </AnimateIn>
      </div>
    </div>
  );
}
