"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

type Props = {
  heroImageUrl?: string;
  heroTitle?: string;
  heroSubtitle?: string;
};

export function Hero({ heroImageUrl, heroTitle, heroSubtitle }: Props) {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      {heroImageUrl ? (
        <Image
          src={heroImageUrl}
          alt=""
          fill
          className="object-cover"
          priority
        />
      ) : (
        <div className="absolute inset-0 bg-gradient-to-br from-[#0A0A0A] via-[#1A0A0A] to-[#0A0A0A]" />
      )}

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-[#0A0A0A]" />

      {/* Red glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-neos-red/8 rounded-full blur-[120px] pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl">
        {/* Logo text */}
        <h1
          className="font-heading text-6xl sm:text-8xl md:text-9xl tracking-wider mb-4"
          style={{
            opacity: loaded ? 1 : 0,
            transform: loaded ? "scale(1)" : "scale(0.9)",
            transition: "opacity 0.8s ease-out, transform 0.8s ease-out",
          }}
        >
          <span className="bg-gradient-to-b from-white via-white to-white/60 bg-clip-text text-transparent drop-shadow-[0_0_40px_rgba(229,9,20,0.3)]">
            {heroTitle || "NEOS E-SPORTS"}
          </span>
        </h1>

        {/* Tagline */}
        <div
          className="flex items-center justify-center gap-4 mb-6"
          style={{
            opacity: loaded ? 1 : 0,
            transform: loaded ? "translateY(0)" : "translateY(16px)",
            transition:
              "opacity 0.8s ease-out 0.3s, transform 0.8s ease-out 0.3s",
          }}
        >
          <span className="w-12 h-[1px] bg-neos-red" />
          <span className="font-heading text-lg sm:text-xl tracking-[0.3em] text-neos-red">
            GROWTH / TRUST / RESPECT
          </span>
          <span className="w-12 h-[1px] bg-neos-red" />
        </div>

        {/* Subtitle */}
        <p
          className="text-sub-text text-sm sm:text-base max-w-xl mx-auto leading-relaxed"
          style={{
            opacity: loaded ? 1 : 0,
            transform: loaded ? "translateY(0)" : "translateY(16px)",
            transition:
              "opacity 0.8s ease-out 0.5s, transform 0.8s ease-out 0.5s",
          }}
        >
          {heroSubtitle ||
            "eスポーツを通じて人が本気で成長する環境を設計し、伴走するチーム"}
        </p>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        style={{
          opacity: loaded ? 1 : 0,
          transition: "opacity 1s ease-out 1s",
        }}
      >
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-white/60 rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
}
