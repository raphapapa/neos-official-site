import type { Metadata } from "next";
import { Bebas_Neue, Noto_Sans_JP } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
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

export const metadata: Metadata = {
  title: {
    default: "NEOS E-SPORTS | 公式サイト",
    template: "%s | NEOS E-SPORTS",
  },
  description:
    "NEOS E-SPORTSはFortniteを中心に活動するeスポーツチーム eスポーツを通じて人が本気で成長する環境を設計し、伴走する",
  robots: {
    index: false,
    follow: false,
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
        />
      </body>
    </html>
  );
}
