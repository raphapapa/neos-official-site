import Image from "next/image";
import { AnimateIn } from "@/components/shared/AnimateIn";

type Props = {
  imageUrl: string;
};

export function UniformSection({ imageUrl }: Props) {
  return (
    <section className="relative w-full py-24 overflow-hidden">
      <AnimateIn>
        <div className="relative max-w-5xl mx-auto px-4 flex flex-col items-center gap-8">
          {/* Text */}
          <div className="text-center">
            <h2 className="font-heading text-5xl md:text-7xl tracking-wider text-white leading-none">
              NEOS UNIFORM
            </h2>
            <p className="text-sub-text text-sm tracking-widest mt-4">
              Identity we wear
            </p>
          </div>

          {/* Image */}
          <div className="relative w-full max-w-lg md:max-w-xl">
            <div className="relative aspect-square">
              <Image
                src={imageUrl}
                alt="NEOS E-SPORTS Uniform"
                fill
                className="object-contain"
                sizes="(max-width: 768px) 100vw, 576px"
                priority
              />
            </div>
          </div>
        </div>
      </AnimateIn>
    </section>
  );
}
