# Kayac Recruit Site

面白法人カヤックの採用情報サイト

## 🌐 サイトURL

**現在**: https://miyoshi-koichi.github.io/kayac-recruit-site/

**将来**: 会社のOrganizationに移管予定

## 📦 Tech Stack

- **VitePress** - 静的サイトジェネレーター
- **Dify AI Chatbot** - 採用情報AIチャット
- **GitHub Pages** - ホスティング
- **GitHub Actions** - 自動デプロイ

## 📂 プロジェクト構成

```
kayac-recruit-site/
├── docs/                          # VitePressコンテンツ
│   ├── .vitepress/
│   │   └── config.ts             # サイト設定
│   ├── index.md                  # トップページ
│   ├── about.md                  # 組織紹介
│   ├── culture.md                # 企業文化
│   ├── office.md                 # オフィス環境
│   ├── business.md               # 事業概要
│   ├── business-produce.md       # 面白プロデュース事業
│   ├── business-game.md          # ゲーム事業
│   ├── business-community.md     # ゲームコミュニティ事業
│   ├── business-regional.md      # 地域資本主義事業
│   ├── jobs.md                   # 募集要項（内容未記入）
│   ├── process.md                # 選考フロー（内容未記入）
│   └── faq.md                    # FAQ（内容未記入）
├── master/
│   └── Information.md            # 原稿（サイトには反映済み）
└── .github/workflows/
    └── deploy.yml                # GitHub Actionsデプロイ設定
```

## ✅ 完了したこと（2025-11-05）

- [x] GitHub個人リポジトリ作成
- [x] GitHub Pagesへのデプロイ設定
- [x] VitePressサイトの基本構築
- [x] 原稿（master/Information.md）からコンテンツ反映
- [x] ナビゲーション構成の調整
  - 右上ナビゲーション削除
  - 左サイドバーをメインナビゲーションに
  - ダークモードボタン削除
- [x] Difyチャットボット統合
  - スクロール追従対応（position: fixed）
  - 位置調整（画面右下）
- [x] 会社概要、事業紹介の全ページ作成
- [x] GitHubアイコン削除

## 🎯 次のタスク

### 優先度: 高
- [ ] **OGP設定の充実**
  - OGP画像の追加（推奨: 1200x630px）
  - サイトURL設定
  - Twitter Card設定
- [ ] **ロゴ画像への変更**
  - 左上の「Kayac Recruit」テキストをロゴ画像に変更
  - ロゴデータの提供待ち
- [ ] **Favicon追加**
  - サイトアイコンの設定

### 優先度: 中
- [ ] **募集要項（jobs.md）の内容追加**
  - 現在はプレースホルダーのみ
- [ ] **FAQ（faq.md）の内容追加**
  - 現在はプレースホルダーのみ
- [ ] **選考フロー（process.md）の内容追加**
  - 現在はプレースホルダーのみ

### 優先度: 低（会社承認後）
- [ ] **リポジトリの移管**
  - 個人リポジトリ → 会社のOrganizationへ
  - ローカルのリモートURL更新
  - GitHub PagesのURL変更
  - OGP URLの更新

## 🚀 開発コマンド

```bash
# 開発サーバー起動
npm run dev

# ビルド
npm run build

# プレビュー
npm run serve

# デプロイ（自動）
git push origin main  # GitHub Actionsが自動デプロイ
```

## 📝 デプロイフロー

1. `git push origin main` でコードをプッシュ
2. GitHub Actionsが自動実行（`.github/workflows/deploy.yml`）
3. ビルド → GitHub Pagesにデプロイ
4. 約1分後にサイト更新

## 🔧 設定ファイルの重要ポイント

### config.ts
- **base**: `/kayac-recruit-site/` - GitHub Pagesのベースパス
- **appearance**: `false` - ダークモード無効
- **Difyチャットボット設定**: `head`セクションにスクリプトとスタイル
- **サイドバー構成**: 4セクション（ホーム、組織紹介、事業紹介、採用情報）

## 📞 問い合わせ先

サイト上で右下のAIチャットボタンから24時間質問可能。

## 🔄 Claude Codeで作業を再開する方法

新しいClaude Codeセッションで以下をコピペして質問してください：

```
カヤック採用サイトの続きを進めたいです。
プロジェクトは /Users/miyoshi-koichi/worktree/kayac-recruit-site にあります。
現在の状態を確認して、次のタスクを教えてください。
```

Claude CodeがこのREADME.mdを読み込み、状況を把握して作業を継続できます。

## 📌 メモ

- **原稿の扱い**: `master/Information.md`は既にサイトに反映済み。要約・構造化してページ化。
- **リポジトリ移管**: 会社承認後、GitHubの「Transfer ownership」機能で簡単に移管可能。
- **URL変更時の対応**: OGP URL、config.tsのbaseパス、リモートURLを更新する必要あり。
