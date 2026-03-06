import type { Metadata } from "next";
import { Bebas_Neue, Noto_Sans_JP } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Analytics } from "@vercel/analytics/next";
import { getSiteSettings } from "@/lib/api";

const notoSansJP = Noto_Sans_JP({
  subsets: ["latin"],
  variable: "--font-noto-sans-jp",
  display: "swap",
});

const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bebas-neue",
  display: "swap",
});

const SITE_URL = "https://neos-esports.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "NEOS E-SPORTS | Fortnite eスポーツチーム",
    template: "%s | NEOS E-SPORTS",
  },
  description:
    "NEOS E-SPORTSはFortniteの競技チーム。選手57名が所属。育成と競技力の両立を理念に掲げ、スクリム運営・大会参戦・選手育成に取り組んでいます。スポンサー・パートナーシップのお問い合わせも受付中。",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    locale: "ja_JP",
    url: SITE_URL,
    siteName: "NEOS E-SPORTS",
    title: "NEOS E-SPORTS | Fortnite eスポーツチーム",
    description:
      "NEOS E-SPORTSはFortniteの競技チーム。選手57名が所属。育成と競技力の両立を理念に掲げ、スクリム運営・大会参戦・選手育成に取り組んでいます。スポンサー・パートナーシップのお問い合わせも受付中。",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "NEOS E-SPORTS",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "NEOS E-SPORTS | Fortnite eスポーツチーム",
    description:
      "NEOS E-SPORTSはFortniteの競技チーム。選手57名が所属。育成と競技力の両立を理念に掲げ、スクリム運営・大会参戦・選手育成に取り組んでいます。スポンサー・パートナーシップのお問い合わせも受付中。",
    images: ["/og-image.png"],
  },
  verification: {
    google: "ksxLTS-xqYrmCmiMnFPIFdE3KBjfo8uz7IVHX-Tnyl0",
  },
  alternates: {
    canonical: SITE_URL,
  },
  icons: {
    icon: "/icon.png",
    apple: "/apple-touch-icon.png",
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const settings = await getSiteSettings();

  return (
    <html lang="ja">
      <body
        className={`${notoSansJP.variable} ${bebasNeue.variable} antialiased`}
      >
        <Header hiddenItems={(settings.nav_hidden_items || '').split(',').map(s => s.trim()).filter(Boolean)} />
        <main className="min-h-screen">{children}</main>
        <Footer
          xUrl={settings.x_url}
          juniorXUrl={settings.junior_x_url}
          hiddenItems={(settings.nav_hidden_items || '').split(',').map(s => s.trim()).filter(Boolean)}
        />
        <Analytics />
      </body>
    </html>
  );
}
