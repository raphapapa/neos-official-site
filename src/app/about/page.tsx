import type { Metadata } from "next";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { getSiteSettings } from "@/lib/api";
import { AnimateIn } from "@/components/shared/AnimateIn";
import { SectionHeading } from "@/components/shared/SectionHeading";

export const metadata: Metadata = {
  title: "チーム概要",
  description:
    "NEOS E-SPORTSのミッション、価値観、活動内容をご紹介します。",
};

const DEFAULT_ABOUT = `## MISSION

eスポーツを通じて人が本気で成長する環境を設計し、伴走する。

「勝つために人を使う」のではなく「人が成長する結果として競技力が高まる」。それがNEOS E-SPORTSの信じるeスポーツの姿です。

## VALUES

### 成長は設計できる
才能や根性だけに頼らない。仕組みで成長を支えます。

### 勝利は目的ではない
成長の積み重ねが結果として勝利を生む。過程を大切にします。

### トキシックを肯定しない
強さを理由に暴言・他責・見下しを正当化しない。品格ある競技者を育てます。

### 本気度を評価する
結果ではなく向き合い方を見る。真剣に取り組む姿勢を最も評価します。

## ACTIVITIES

- **APFスクリム** — 毎週末開催の対抗戦
- **ジュニアスクリム** — 毎週 月・水曜のジュニア対抗戦
- **ジュニアユース** — 選抜チームとしての活動
- **1on1** — 個別対話で目標設定と成長をサポート
- **チームイベント** — エンジョイイベント、オフ会の開催
- **親子入隊・親子大会** — 家族で楽しめるeスポーツ体験
- **NEOSファミリー** — ファンコミュニティの運営

## VISION

卒業後に残したい姿：

- 社会で評価される人材である
- 自分のやりたいことを見つけられる
- 進むための選択肢を持っている
- 「ゲームが上手くなっただけ」で終わらせない
`;

export default async function AboutPage() {
  const settings = await getSiteSettings();
  const aboutText = settings.about_text || DEFAULT_ABOUT;

  return (
    <div className="pt-28 pb-24 px-4">
      <div className="max-w-3xl mx-auto">
        <AnimateIn>
          <SectionHeading title="ABOUT" subtitle="チーム概要" />
        </AnimateIn>

        <AnimateIn delay={0.2}>
          <div className="site-prose">
            <ReactMarkdown remarkPlugins={[remarkGfm]}>
              {aboutText}
            </ReactMarkdown>
          </div>
        </AnimateIn>
      </div>
    </div>
  );
}
