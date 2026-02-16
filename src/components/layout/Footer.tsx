import Link from "next/link";

const NAV_ITEMS = [
  { href: "/about", label: "ABOUT" },
  { href: "/players", label: "PLAYERS" },
  { href: "/news", label: "NEWS" },
  { href: "/contact", label: "CONTACT" },
];

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#050505]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        <div className="flex flex-col items-center gap-8">
          {/* Logo */}
          <Link href="/" className="flex flex-col items-center gap-1">
            <span className="font-heading text-3xl tracking-wider text-white">
              NEOS
            </span>
            <span className="text-[10px] text-sub-text tracking-[0.3em]">
              E-SPORTS
            </span>
          </Link>

          {/* Tagline */}
          <p className="font-heading text-sm tracking-[0.25em] text-sub-text">
            GROWTH / TRUST / RESPECT
          </p>

          {/* Nav */}
          <nav className="flex flex-wrap justify-center gap-6">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="font-heading text-sm tracking-wider text-sub-text hover:text-white transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* X Link */}
          <a
            href="https://x.com/neos_esports"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sub-text hover:text-white transition-colors"
            aria-label="X (Twitter)"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
          </a>

          {/* Copyright */}
          <p className="text-xs text-sub-text/60">
            &copy; {new Date().getFullYear()} NEOS E-SPORTS. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
