import type { Metadata } from "next";
import { Bebas_Neue, Noto_Sans_JP } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Analytics } from "@vercel/analytics/next";
import { GoogleAnalytics } from "@next/third-parties/google";
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SportsTeam",
              name: "NEOS E-SPORTS",
              sport: "Fortnite",
              foundingDate: "2022-04-01",
              description:
                "eスポーツを通じて人が本気で成長する環境を設計し、伴走するチーム",
              url: "https://neos-esports.com",
              sameAs: ["https://x.com/NEOSCLAN_FN"],
              sponsor: {
                "@type": "Organization",
                name: "トラゼミ",
                url: "https://www.torazemi.com/",
              },
              numberOfEmployees: {
                "@type": "QuantitativeValue",
                value: 57,
              },
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "NEOS E-SPORTSとは？",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Fortniteの競技eスポーツチーム。2022年設立、選手57名が所属。育成と競技力の両立を理念に活動。",
                  },
                },
                {
                  "@type": "Question",
                  name: "NEOSに入るには？",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "公式サイトのお問い合わせフォームまたはX（@NEOSCLAN_FN）からご連絡ください。年齢制限なし、13歳未満は保護者の同意と同時入隊が条件です。",
                  },
                },
                {
                  "@type": "Question",
                  name: "スポンサーになるには？",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "公式サイトのお問い合わせフォームからご連絡ください。パートナーシップの詳細をご案内いたします。",
                  },
                },
              ],
            }),
          }}
        />
        <Header hiddenItems={(settings.nav_hidden_items || '').split(',').map(s => s.trim()).filter(Boolean)} />
        <main className="min-h-screen">{children}</main>
        <Footer
          xUrl={settings.x_url}
          juniorXUrl={settings.junior_x_url}
          hiddenItems={(settings.nav_hidden_items || '').split(',').map(s => s.trim()).filter(Boolean)}
        />
        <Analytics />
        <GoogleAnalytics gaId="G-BJ6ZKWQ6PN" />
      </body>
    </html>
  );
}
