# NEOS E-SPORTS 公式Webサイト

## プロジェクト概要

NEOS E-SPORTS（Fortnite中心のeスポーツチーム）の公式公開Webサイト。
管理アプリ（neos-player-app）の公開APIからデータを取得して表示する。

- **本番URL:** https://neos-official-site.vercel.app
- **管理アプリリポジトリ:** https://github.com/raphapapa/neos-player-app
- **管理アプリ本番:** https://neos-player-app.vercel.app
- **Vercel Project ID:** prj_UqtlFYUXzBAbFwmMeQbI3uCxqHTE
- **Vercel Team ID:** team_tl0M0NXPC0hVjsj05g8WOYKe
- **ドメイン（予定）:** neos-esports.com（未取得）

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
/members         選手一覧（カテゴリ別セクション + グリッド）
/members/[id]    選手詳細（画像ギャラリー + PR順位 + 大会実績 + SNS）
/news            ニュース一覧（カード + カテゴリフィルタ + ページネーション）
/news/[slug]     記事詳細（Markdownレンダリング）
/about           チーム概要（site_settingsのabout_text or デフォルトコピー）
/scrim           スクリム紹介（APF SCRIM + JUNIOR SCRIM、コンセプチュアルコピー）
/store           ストア（COMING SOON表示）
/partners        パートナー企業（ティア別ロゴ表示）
/contact         入隊希望/一般問い合わせフォーム（POST API連携）
```

### 選手一覧の表示仕様

- **名前:** 英語名（name_en）を主表示。日本語名は詳細ページのみ
- **並び順:** ATHLETE → GROWTH → YOUTH → JUNIOR の区分順。同区分内はPR昇順→名前昇順
- **セクション見出し:** 各カテゴリにコンセプチュアルな英語サブタイトル付き
- **STAFFカテゴリ:** OWNER/OPERATOR等は個別の役職ラベルをバッジ表示

### SCRIMページ

- テーマ:「続けた先に、強さがある」
- APF SCRIM: NEOS×APF共同運営、毎週末（@APF0401）、pbs.twimg.com画像付き
- JUNIOR SCRIM: U13ソロラガ、毎週月・水（@neosclan_u13）、pbs.twimg.com画像付き
- コピーの方針: 句点（。）不使用、体言止めを適度に、単語の重複を避ける

## ディレクトリ構造

```
src/
├── app/                    ← ページ（Next.js App Router）
│   ├── layout.tsx          ← ルートレイアウト（フォント・Header・Footer、site_settings取得）
│   ├── page.tsx            ← トップページ
│   ├── not-found.tsx       ← 404ページ
│   ├── globals.css         ← グローバルスタイル・@theme・.site-prose
│   ├── members/            ← 選手一覧・詳細
│   ├── news/               ← ニュース一覧・詳細
│   ├── about/              ← チーム概要
│   ├── scrim/              ← スクリム紹介（APF SCRIM + JUNIOR SCRIM）
│   ├── store/              ← ストア（COMING SOON）
│   ├── partners/           ← パートナー企業
│   └── contact/            ← お問い合わせ
├── components/
│   ├── layout/             ← Header, Footer（xUrl + juniorXUrl props受け取り）
│   ├── shared/             ← AnimateIn, SectionDivider, SectionHeading
│   ├── home/               ← Hero, AboutPreview, PlayerHighlight, NewsPreview, SponsorSection
│   ├── player/             ← PlayerFilter（カテゴリ別セクション表示）
│   ├── article/            ← ArticleCard
│   └── contact/            ← ContactForm
├── lib/
│   ├── types.ts            ← 全API型定義
│   ├── constants.ts        ← カテゴリラベル・カラー・Tier定義・PLAYER_CATEGORY_ORDER・sortMembers
│   └── api/                ← fetch関数（client.ts + index.ts）
└── hooks/
    └── useInView.ts        ← Intersection Observer
```

## Supabase Storage / 外部画像

Player Appの画像は Supabase Storage の公開バケットに格納されている。
`next.config.ts` で以下をリモートパターンに許可済み:
- `jakaujbhbgoodzmjyxfj.supabase.co` — Supabase Storage（選手画像等）
- `pbs.twimg.com` — X(Twitter)メディア（SCRIMページの画像）

## 公開サイトに載せないデータ（内向き施策）

以下はNEOS内部のモチベーション施策であり、公開サイトには一切載せない：
- バッジ・ポイント・エンゲージメント
- 練習記録・目標・振り返り
- ランキング（選手間の競争）
- AI機能（週次レビュー等）
- ログインストリーク

## サイトコピーについて

- About ページのコピーは管理アプリのサイト設定（`about_text`）から変更可能。現在DB登録済み
- SCRIMページのコピーはハードコード（`src/app/scrim/page.tsx`）。変更はコード修正が必要
- **句点（。）は使わない** — 必要な場合は改行で対応
- **体言止めを適度に混ぜる** — ただし多用は禁止
- **単語の重複を避ける** — 同じ単語が近くに2回出ないよう注意

## site_settings に設定済みの値

| key | value | 設定状態 |
|-----|-------|---------|
| hero_title | NEOS E-SPORTS | ✅ DB登録済み |
| hero_subtitle | eスポーツを通じて 人が本気で成長する環境を | ✅ DB登録済み |
| hero_image_url | — | ❌ 未設定（グラデーション表示） |
| about_text | MISSION/VALUES/ACTIVITIES/VISIONの全文 | ✅ DB登録済み |
| contact_email | — | ❌ 未設定 |
| x_url | https://x.com/neos_fortnite | ✅ DB登録済み |
| junior_x_url | https://x.com/neosclan_u13 | ✅ DB登録済み |

## 変更制約ルール

- **デザイン・レイアウトの変更はユーザーの明示的な承認が必要。** 指示されていないデザイン改修・リデザインは絶対に実行しない
- **ページ構成・URL構造の変更はユーザーの明示的な承認が必要。** ページの追加・削除・リネームは提案に留め、承認後に実行する
- **指示された作業のみ実行する。** 「ついでに改善」「より良くするための変更」は実行せず、提案として提示する
- **大規模構築後は必ずユーザー確認を挟む。** ビルド完了後にユーザーが確認・承認するまで追加変更を行わない
- **既存のデザイン・コピー・構造を勝手に変更しない。** 変更が必要だと判断した場合は理由を説明して承認を得る

## 残タスク

1. チーム内レビュー対応 — フィードバックに基づく修正
2. ヒーロー画像の作成・設定 — hero_image_url が未設定
3. contact_email の設定
4. 独自ドメイン取得 — neos-esports.com → Vercelに設定
