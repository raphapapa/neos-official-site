import Image from "next/image";
import { AnimateIn } from "@/components/shared/AnimateIn";
import { SectionHeading } from "@/components/shared/SectionHeading";

type Props = {
  imageUrl: string;
};

export function UniformSection({ imageUrl }: Props) {
  return (
    <section className="py-24 px-4">
      <div className="max-w-4xl mx-auto">
        <AnimateIn>
          <SectionHeading title="UNIFORM" subtitle="Identity we wear" />
        </AnimateIn>

        <AnimateIn delay={0.2}>
          <div className="relative aspect-[16/9] max-w-2xl mx-auto overflow-hidden rounded-sm">
            <Image
              src={imageUrl}
              alt="NEOS E-SPORTS Uniform"
              fill
              className="object-contain"
              sizes="(max-width: 768px) 100vw, 672px"
            />
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}
