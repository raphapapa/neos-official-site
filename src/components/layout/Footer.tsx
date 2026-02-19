import Link from "next/link";
import Image from "next/image";

const ALL_NAV_ITEMS = [
  { href: "/news", label: "NEWS" },
  { href: "/members", label: "MEMBERS" },
  { href: "/about", label: "ABOUT" },
  { href: "/scrim", label: "SCRIM" },
  { href: "/store", label: "STORE" },
  { href: "/partners", label: "PARTNERS" },
  { href: "/contact", label: "CONTACT" },
];

const X_ICON = (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

type Props = {
  xUrl?: string;
  juniorXUrl?: string;
  hiddenItems?: string[];
};

export function Footer({ xUrl, juniorXUrl, hiddenItems = [] }: Props) {
  const NAV_ITEMS = ALL_NAV_ITEMS.filter(item => !hiddenItems.includes(item.label));
  const mainX = xUrl || "https://x.com/neos_esports";

  return (
    <footer className="border-t border-white/10 bg-[#050505]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        <div className="flex flex-col items-center gap-8">
          {/* Logo */}
          <Link href="/" className="flex flex-col items-center gap-2">
            <Image
              src="/images/logo/logo_01.png"
              alt="NEOS E-SPORTS"
              width={48}
              height={48}
              className="invert brightness-200"
            />
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

          {/* X Links */}
          <div className="flex items-center gap-6">
            <a
              href={mainX}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sub-text hover:text-white transition-colors"
            >
              {X_ICON}
              <span className="font-heading text-xs tracking-wider">NEOS</span>
            </a>
            {juniorXUrl && (
              <a
                href={juniorXUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sub-text hover:text-white transition-colors"
              >
                {X_ICON}
                <span className="font-heading text-xs tracking-wider">JUNIOR</span>
              </a>
            )}
          </div>

          {/* Legal */}
          <div className="flex gap-6">
            <Link
              href="/privacy"
              className="text-xs text-sub-text/60 hover:text-sub-text transition-colors"
            >
              PRIVACY POLICY
            </Link>
            <Link
              href="/terms"
              className="text-xs text-sub-text/60 hover:text-sub-text transition-colors"
            >
              TERMS OF SERVICE
            </Link>
          </div>

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
