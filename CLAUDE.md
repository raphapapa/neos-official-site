# NEOS E-SPORTS 公式Webサイト

## プロジェクト概要

NEOS E-SPORTS（Fortnite中心のeスポーツチーム）の公式公開Webサイト。
管理アプリ（neos-player-app）の公開APIからデータを取得して表示する。

- **管理アプリリポジトリ:** https://github.com/raphapapa/neos-player-app
- **管理アプリ本番:** https://neos-player-app.vercel.app
- **ドメイン（予定）:** neos-esports.com

## 2台PC体制

デスクトップPCとノートPCの2台で開発している。

- **デスクトップPC:** neos-player-app（管理アプリ + API）の開発
- **ノートPC:** neos-official-site（本サイト）の開発
- **連携方法:** GitHub でコードを共有、OneDrive で .env.local を共有

## 技術スタック

- Next.js 16.1.6（App Router）
- Tailwind CSS v4（CSS @theme 方式）
- TypeScript
- react-markdown + remark-gfm（記事本文レンダリング）

## コマンド

```bash
npm run dev       # 開発サーバー起動（デフォルト3000、競合時3001）
npm run build     # プロダクションビルド
```

## デザイン方針

### カラーパレット — Netflix風 黒×赤

| 用途 | カラーコード |
|---|---|
| NEOS Red (Primary) | `#E50914` |
| NEOS Red Bright | `#FF1A25` |
| NEOS Red Dark | `#B20710` |
| 背景 | `#0A0A0A` |
| カード背景 | `#1A1A1A` |
| テキスト | `#FFFFFF` |
| サブテキスト | `#9CA3AF` |
| ボーダー | `#2A2A2A` |

### フォント

- **見出し:** Bebas Neue（Google Fonts）→ CSS変数 `--font-bebas-neue`
- **本文:** Noto Sans JP（Google Fonts）→ CSS変数 `--font-noto-sans-jp`

### デザインコンセプト

- 常にダークテーマ（ライトテーマなし）
- Netflix風の高コントラスト赤×黒
- ZETA DIVISION を参考にしたミニマルで洗練されたデザイン
- スクロール連動フェードインアニメーション（Intersection Observer）
- 品格と洗練を重視（攻撃的ではない）

## ブランドイメージ

NEOSは一般的な「攻撃的・過激な」eスポーツチームのイメージとは異なる。

- **本質:** eスポーツを通じて人が本気で成長する環境を設計し、伴走する
- **哲学:** 人が成長する結果として競技力が高まる
- **品格:** トキシックを肯定しない、強さと品格の両立
- **表現:** 赤は「攻撃」ではなく「情熱・本気」のアクセント

## API連携

### ベースURL

`lib/api/client.ts` で `NEXT_PUBLIC_API_BASE` 環境変数を参照。
未設定時は `http://localhost:3000` にフォールバック。

```bash
# .env.local
NEXT_PUBLIC_API_BASE=http://localhost:3000       # ローカル開発
NEXT_PUBLIC_API_BASE=https://neos-player-app.vercel.app  # 本番
```

### 利用API（全8本、neos-player-appで提供）

| メソッド | パス | 使用箇所 |
|---------|------|----------|
| GET | `/api/public/players` | トップ, /players |
| GET | `/api/public/players/[id]` | /players/[id] |
| GET | `/api/public/articles?page=&limit=&category=` | トップ, /news |
| GET | `/api/public/articles/[slug]` | /news/[slug] |
| GET | `/api/public/sponsors` | トップ |
| GET | `/api/public/tournaments?limit=&player_id=` | /players/[id] |
| GET | `/api/public/site-settings` | トップ, /about |
| POST | `/api/public/contact` | /contact |

API障害時: `lib/api/client.ts` が null を返し、各ページが空表示にフォールバック

## ページ構成

```
/                トップ（Hero + About要約 + 選手ハイライト + ニュース + スポンサー）
/players         選手一覧（カテゴリフィルタ + グリッド）
/players/[id]    選手詳細（画像ギャラリー + PR順位 + 大会実績 + SNS）
/news            ニュース一覧（カード + カテゴリフィルタ + ページネーション）
/news/[slug]     記事詳細（Markdownレンダリング）
/about           チーム概要（site_settingsのabout_text or デフォルトコピー）
/contact         入隊希望/一般問い合わせフォーム（POST API連携）
```

## ディレクトリ構造

```
src/
├── app/                    ← ページ（Next.js App Router）
│   ├── layout.tsx          ← ルートレイアウト（フォント・Header・Footer）
│   ├── page.tsx            ← トップページ
│   ├── not-found.tsx       ← 404ページ
│   ├── globals.css         ← グローバルスタイル・@theme・.site-prose
│   ├── players/            ← 選手一覧・詳細
│   ├── news/               ← ニュース一覧・詳細
│   ├── about/              ← チーム概要
│   └── contact/            ← お問い合わせ
├── components/
│   ├── layout/             ← Header, Footer
│   ├── shared/             ← AnimateIn, SectionDivider, SectionHeading
│   ├── home/               ← Hero, AboutPreview, PlayerHighlight, NewsPreview, SponsorSection
│   ├── player/             ← PlayerFilter
│   ├── article/            ← ArticleCard
│   └── contact/            ← ContactForm
├── lib/
│   ├── types.ts            ← 全API型定義
│   ├── constants.ts        ← カテゴリラベル・カラー・Tier定義
│   └── api/                ← fetch関数（client.ts + index.ts）
└── hooks/
    └── useInView.ts        ← Intersection Observer
```

## Supabase Storage

Player Appの画像は Supabase Storage の公開バケットに格納されている。
`next.config.ts` で `jakaujbhbgoodzmjyxfj.supabase.co` をリモートパターンに許可済み。

## 公開サイトに載せないデータ（内向き施策）

以下はNEOS内部のモチベーション施策であり、公開サイトには一切載せない：
- バッジ・ポイント・エンゲージメント
- 練習記録・目標・振り返り
- ランキング（選手間の競争）
- AI機能（週次レビュー等）
- ログインストリーク

## サイトコピーについて

About ページ等のコピーはアタリ（仮テキスト）。
ユーザーが後からリライトする予定。site_settings で管理画面から変更可能。
