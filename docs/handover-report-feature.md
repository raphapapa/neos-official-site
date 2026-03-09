# 分析レポート機能 — 実装引き継ぎ書

## 概要

公式サイト（neos-official-site）の構成・データ状況を管理アプリ内で自動集計し、
レポートとして蓄積・閲覧・エクスポートできる機能を新規追加する。

## 背景

現在、公式サイトの構成レポートは手動でHTMLファイルを作成している（docs/site-report-2026-03-09.html）。
これを管理アプリの機能として自動化し、運営メンバーがいつでも最新状況を確認できるようにしたい。

---

## 機能要件

### Phase 1: 基本機能（MVP）

#### 1-1. サイト設定ページに「分析レポート」タブ追加
- 既存のサイト設定ページ（/site-settings）にタブとして追加
- 過去のレポートを一覧表示（作成日・概要）
- レポートをクリックすると詳細表示

#### 1-2. 「レポート作成」ボタン
- 管理者のみ押下可能
- 押すと以下のデータを自動集計してレポートを生成・DB保存:

##### 集計項目（自動取得可能なもの）

| カテゴリ | 集計項目 | データソース |
|----------|----------|-------------|
| 選手 | 総数 | players テーブル COUNT |
| 選手 | カテゴリ別内訳（ATHLETE/GROWTH/YOUTH/JUNIOR/STAFF系） | players テーブル GROUP BY category |
| 選手 | プロフィール入力率（profile が空でない割合） | players テーブル |
| 選手 | 画像登録率（player_images がある割合） | player_images テーブル |
| 選手 | X アカウント登録率 | players テーブル x_account |
| 選手 | PR順位登録率 | players テーブル pr_rank |
| 記事 | 総数 | articles テーブル COUNT |
| 記事 | カテゴリ別内訳（NEWS/BLOG/RESULT） | articles テーブル GROUP BY category |
| 記事 | 直近30日の投稿数 | articles テーブル WHERE published_at |
| スポンサー | 総数 | sponsors テーブル COUNT |
| スポンサー | ティア別内訳（PLATINUM/GOLD/SILVER/BRONZE） | sponsors テーブル GROUP BY tier |
| 大会 | 総登録数 | tournament_results テーブル COUNT |
| 大会 | 直近30日の登録数 | tournament_results テーブル |
| 問い合わせ | 総数（JOIN/GENERAL別） | contacts テーブル GROUP BY type |
| 問い合わせ | 直近30日の件数 | contacts テーブル |
| サイト設定 | 設定済み項目数 / 全項目数 | site_settings テーブル |
| サイト設定 | 各キーの設定状態（設定済/未設定） | site_settings テーブル |

##### サイト構成情報（ハードコード定義）

以下は公式サイトの構成として固定値で定義する（APIでは取得できないため）:

| ページ | URL | データソース種別 |
|--------|-----|-----------------|
| トップ | / | API + Settings |
| 選手一覧 | /members | API |
| 選手詳細 | /members/[id] | API（動的） |
| ニュース一覧 | /news | API（動的） |
| 記事詳細 | /news/[slug] | API（動的） |
| チーム概要 | /about | Settings（デフォルト値あり） |
| スクリム | /scrim | ハードコード |
| パートナー | /partners | API + ハードコード |
| パートナーLP | /partners/program | ハードコード |
| お問い合わせ | /contact | API(POST) + Settings |
| ストア | /store | ハードコード（COMING SOON） |
| 利用規約 | /terms | ハードコード |
| プライバシーポリシー | /privacy | ハードコード |

#### 1-3. レポートの蓄積
- 作成日時をキーにして DB に保存
- 一覧で過去のレポートを閲覧可能

---

### Phase 2: 比較・エクスポート

#### 2-1. 前回比較
- 前回レポートとの差分を自動計算して表示
- 例: 選手数 55 → 57（+2）、記事数 12 → 17（+5）
- 増減を色で表現（増加=緑、減少=赤、変化なし=グレー）

#### 2-2. PDF/HTML エクスポート
- レポート詳細画面に「PDFダウンロード」ボタン
- 現在の docs/site-report-2026-03-09.html のデザインを参考にしたレイアウト
- Netflix風ダークテーマで統一（NEOS Red #E50914 / 背景 #0A0A0A）
- 運営メンバーへの共有用

#### 2-3. コンテンツ充実度スコア
- 各選手のデータ入力状況をスコア化（0〜100%）
- 項目: プロフィール、画像、X アカウント、実績、PR順位、背番号、加入日
- 一覧で「データ未入力の選手」を特定できる
- チーム全体の平均充実度も表示

---

### Phase 3: 自動化・外部連携

#### 3-1. 定期自動生成（Cron）
- 毎月1日 0:00 に自動でレポートを生成
- Vercel Cron Jobs を使用（月1回なら無料枠内）

#### 3-2. 公式サイトヘルスチェック
- レポート作成時に公式サイトの各ページにHTTPリクエストを送信
- ステータスコード 200 = OK、それ以外 = 警告
- API エンドポイントの疎通確認も含む
- 対象URL: https://neos-esports.com + 各ページパス

#### 3-3. GA4 アクセス解析連携（将来検討）
- Google Analytics Data API でPV・ユーザー数・流入元を取得
- レポートにアクセス解析セクションを追加
- ※ API設定が必要なため、Phase 3 以降で検討

---

## DB設計案

### 新規テーブル: site_reports

```sql
CREATE TABLE site_reports (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  created_by UUID REFERENCES auth.users(id),
  report_data JSONB NOT NULL,
  summary TEXT,
  total_players INTEGER,
  total_articles INTEGER,
  total_sponsors INTEGER,
  total_contacts INTEGER,
  content_score DECIMAL(5,2),
  diff_players INTEGER DEFAULT 0,
  diff_articles INTEGER DEFAULT 0,
  diff_sponsors INTEGER DEFAULT 0,
  diff_contacts INTEGER DEFAULT 0
);

ALTER TABLE site_reports ENABLE ROW LEVEL SECURITY;
```

### report_data JSONB の構造例

```json
{
  "generated_at": "2026-03-09T12:00:00Z",
  "players": {
    "total": 57,
    "by_category": {
      "ATHLETE": 8,
      "GROWTH": 12,
      "YOUTH": 15,
      "JUNIOR": 18,
      "STAFF": 4
    },
    "completeness": {
      "profile_rate": 85.2,
      "image_rate": 72.4,
      "x_account_rate": 91.3,
      "pr_rank_rate": 65.0
    }
  },
  "articles": {
    "total": 17,
    "by_category": { "NEWS": 8, "BLOG": 5, "RESULT": 4 },
    "last_30_days": 3
  },
  "sponsors": {
    "total": 1,
    "by_tier": { "PLATINUM": 1 }
  },
  "tournaments": {
    "total": 42,
    "last_30_days": 5
  },
  "contacts": {
    "total": 12,
    "by_type": { "JOIN": 9, "GENERAL": 3 },
    "last_30_days": 2
  },
  "site_settings": {
    "total_keys": 10,
    "configured_keys": 8,
    "items": {
      "hero_title": true,
      "hero_subtitle": true,
      "hero_image_url": true,
      "about_text": true,
      "x_url": true,
      "junior_x_url": true,
      "enrollment_open": true,
      "uniform_image_url": true,
      "nav_hidden_items": false,
      "enrollment_closed_message": false
    }
  },
  "site_structure": {
    "total_pages": 13,
    "api_pages": 5,
    "mixed_pages": 2,
    "hardcoded_pages": 6
  },
  "health_check": null
}
```

---

## API設計案

### レポート作成
- POST /api/admin/site-reports
- Authorization: Bearer token（管理者のみ）
- Response: id, created_at, report_data, summary

### レポート一覧取得
- GET /api/admin/site-reports?limit=20
- Authorization: Bearer token
- Response: reports 配列, total

### レポート詳細取得
- GET /api/admin/site-reports/[id]
- Authorization: Bearer token
- Response: id, created_at, report_data, diff_*, summary

### レポートHTML出力（エクスポート用）
- GET /api/admin/site-reports/[id]/export?format=html
- Authorization: Bearer token
- Response: HTML（docs/site-report-2026-03-09.html のデザインベース）

---

## UI設計案

### サイト設定ページのタブ構成
既存: [基本設定] [ナビゲーション]
追加: [分析レポート]

### 分析レポートタブの画面構成
- 上部: 「レポートを作成」ボタン（管理者のみ表示）
- 中央: 最新レポートのサマリーカード（選手数、記事数、スポンサー数、充実度スコア、前回比較）
- 下部: 過去のレポート一覧（日付、主要指標、詳細リンク）
- 詳細画面: 全集計データの表示 + PDFダウンロードボタン

---

## 参考ファイル

- デザイン参考: neos-official-site/docs/site-report-2026-03-09.html
  → このHTMLのダークテーマ・レイアウトをPDFエクスポート時のベースにする
- 公式サイトのCLAUDE.md: API一覧、ページ構成、site_settings の全キーが記載済み

---

## 実装順序の推奨

1. DB: site_reports テーブル作成（マイグレーション）
2. API: POST /api/admin/site-reports（データ集計 + 保存）
3. API: GET /api/admin/site-reports（一覧 + 詳細）
4. UI: サイト設定ページに「分析レポート」タブ追加
5. UI: レポート詳細表示画面
6. Phase 2: 前回比較・エクスポート・充実度スコア
7. Phase 3: Cron自動生成・ヘルスチェック

## コスト

- Phase 1-2: 無料（DB保存 + フロントエンド表示のみ）
- Phase 3 Cron: Vercel無料枠内（月1回）
- Phase 3 GA4: Google Analytics Data API は無料、実装コストのみ
