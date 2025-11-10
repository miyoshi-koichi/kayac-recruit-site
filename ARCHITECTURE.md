# システム設計と技術仕様

このドキュメントでは、Kayac Recruit Siteの内部実装、アーキテクチャ、技術仕様について説明します。

## ディレクトリ構成

```
kayac-recruit-site/
├── README.md                          # ユーザー向けガイド
├── ARCHITECTURE.md                    # システム設計と技術仕様（このファイル）
├── CHANGELOG.md                       # 開発履歴
├── package.json                       # Node.js依存関係
├── package-lock.json                  # 依存関係ロックファイル
├── .gitignore                         # Git管理除外設定
├── docs/                              # VitePressコンテンツルート
│   ├── .vitepress/
│   │   └── config.ts                  # VitePress設定（サイト構成、ナビゲーション、Dify統合、OGP設定）
│   ├── public/                        # 静的アセット
│   │   ├── favicon.ico                # サイトアイコン
│   │   └── images/
│   │       ├── logo.png               # ヘッダーロゴ（47px高さ）
│   │       └── ogp.jpg                # OGP画像（1200x630px）
│   ├── index.md                       # トップページ
│   ├── about.md                       # 組織紹介
│   ├── culture.md                     # 企業文化
│   ├── office.md                      # オフィス環境
│   ├── business.md                    # 事業概要
│   ├── business-produce.md            # 面白プロデュース事業
│   ├── business-game.md               # ゲーム事業
│   ├── business-community.md          # ゲームコミュニティ事業
│   ├── business-regional.md           # 地域資本主義事業
│   ├── jobs.md                        # 募集要項（内容未記入）
│   ├── process.md                     # 選考フロー（内容未記入）
│   └── faq.md                         # FAQ（内容未記入）
├── master/
│   └── Information.md                 # 原稿（サイトには既に反映済み）
├── .github/
│   └── workflows/
│       └── deploy.yml                 # GitHub Actions自動デプロイ設定
└── node_modules/                      # npm依存パッケージ（Git管理外）
```

## 使用技術

### フロントエンド
- **VitePress 1.0.0-alpha.28**: 静的サイトジェネレーター
  - Vue 3.2.44ベース
  - Markdownからの静的HTML生成
  - サイドバーナビゲーション自動生成

### AI機能
- **Dify AI Chatbot**: 採用情報に関する質問応答
  - 埋め込み型チャットウィジェット
  - スクロール追従（position: fixed）
  - 画面右下に配置

### インフラ・デプロイ
- **GitHub Pages**: ホスティング
- **GitHub Actions**: CI/CD自動デプロイ
- **リポジトリ**: 現在は個人リポジトリ、将来的に会社Organizationへ移管予定

## VitePress設定の詳細

### config.ts の主要設定

#### 基本設定
```typescript
title: '面白法人カヤック 採用サイト｜バグってるくらいが、ちょうどいい。'
titleTemplate: ':title'        // ページタイトルのみ表示（サイトタイトルを非表示）
base: '/kayac-recruit-site/'  // GitHub Pagesのベースパス
appearance: false              // ダークモード無効化
```

#### メタタグ設定
- **Favicon**: `/favicon.ico`
- **OGP（Open Graph Protocol）**:
  - タイトル、ディスクリプション、URL、画像（1200x630px）
  - サイト名: "Kayac Recruit"
- **Twitter Card**: summary_large_image形式

#### ナビゲーション構成
- **右上ナビゲーション**: 削除済み
- **左サイドバー**: メインナビゲーションとして使用
  - ホーム
  - 組織紹介（about, culture, office）
  - 事業紹介（business系4ページ）
  - 採用情報（jobs, process, faq）
- **ヘッダーロゴ**: logo.png（47px高さ、siteTitle非表示）

#### Difyチャットボット統合
- `head`セクションにスクリプトとスタイルを追加
- `position: fixed` でスクロール追従
- 右下配置（`bottom: 1rem; right: 1rem`）
- **重要**: `defer: ''` (空文字列) を使用（VitePressの正しい形式）
- ローカル環境では表示されず、GitHub Pagesでのみ動作

## データフロー

### 開発フロー
1. `docs/` 配下のMarkdownファイルを編集
2. `npm run dev` でローカルプレビュー
3. `git push origin main` でコミット
4. GitHub Actionsが自動ビルド・デプロイ
5. 約1分後にGitHub Pagesに反映

### ビルドプロセス
```bash
vitepress build docs  # docs/.vitepress/dist/ にビルド出力
```

### デプロイフロー
`.github/workflows/deploy.yml` が以下を自動実行：
1. Node.js環境セットアップ
2. 依存パッケージインストール
3. VitePressビルド
4. GitHub Pagesへデプロイ

## パフォーマンス考慮

### 静的サイト生成のメリット
- サーバーサイド処理不要
- 高速な初期表示
- CDN配信による高速化
- スケーラビリティ（GitHub Pagesの恩恵）

### 最適化ポイント
- Markdownの軽量性
- VitePressの遅延ロード
- 画像最適化（今後の課題）

## セキュリティ

### 認証・認可
- 静的サイトのため認証なし
- 公開情報のみ掲載

### 機密情報管理
- `.gitignore`で機密ファイルを除外
- APIキーは環境変数で管理（現時点では不使用）

## 拡張性

### コンテンツ追加
1. `docs/` 配下に新しい `.md` ファイルを作成
2. `config.ts` の `sidebar` に項目追加
3. デプロイで自動反映

### カスタムコンポーネント追加
- Vueコンポーネントを `docs/.vitepress/` に配置
- Markdownから `<ComponentName />` で使用可能

### デザインカスタマイズ
- `docs/.vitepress/theme/` でカスタムCSSを追加可能

## トラブルシューティング

### よくある問題

#### 1. ビルドエラー: `Module not found`
**原因**: 依存パッケージが不足
**解決方法**:
```bash
npm install
```

#### 2. GitHub Pagesで404エラー
**原因**: `base` パスの設定ミス
**解決方法**:
- `config.ts` の `base` を確認
- リポジトリ名と一致させる（例: `/kayac-recruit-site/`）

#### 3. Difyチャットボットが表示されない
**原因**: ローカル環境で確認している
**解決方法**:
- Difyはローカル環境（localhost）では表示されない
- GitHub Pages（本番環境）で確認する
- `defer: ''` （空文字列）を使用していることを確認（`defer: 'defer'` は誤り）

#### 4. ダークモードが表示される
**原因**: `appearance` 設定の誤り
**解決方法**:
```typescript
appearance: false  // 文字列 'false' ではなくブール値
```

#### 5. サイドバーにページが表示されない
**原因**: `config.ts` の `sidebar` 設定漏れ
**解決方法**:
- `sidebar` 配列に該当ページのパスを追加

### デバッグモード

#### ローカル開発サーバーでのデバッグ
```bash
npm run dev  # http://localhost:5173 でアクセス
```

#### ビルド確認
```bash
npm run build   # ビルドエラーの確認
npm run serve   # ビルド結果をローカルでプレビュー
```

## 今後の拡張予定

### 優先度: 高
- ✅ OGP（Open Graph Protocol）設定の充実（完了）
- ✅ ロゴ画像への変更（完了）
- ✅ Favicon追加（完了）

### 優先度: 中
- 募集要項（jobs.md）の内容追加
- FAQ（faq.md）の内容追加
- 選考フロー（process.md）の内容追加

### 優先度: 低（会社承認後）
- リポジトリの会社Organizationへの移管
- カスタムドメイン設定
- Google Analytics統合

## リポジトリ移管時の注意事項

会社のOrganizationへ移管する際に必要な作業：

1. **GitHub上での移管**
   - Settings → Transfer ownership

2. **ローカルのリモートURL更新**
   ```bash
   git remote set-url origin https://github.com/organization-name/kayac-recruit-site.git
   ```

3. **GitHub PagesのURL変更**
   - 新しいURL: `https://organization-name.github.io/kayac-recruit-site/`

4. **設定ファイル更新**
   - OGP URLの更新
   - `config.ts` の `base` パス確認（リポジトリ名が変わる場合）

5. **Dify設定の更新**（ドメイン制限がある場合）
   - 新しいドメインを許可リストに追加
