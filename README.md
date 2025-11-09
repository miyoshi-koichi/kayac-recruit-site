# Kayac Recruit Site

面白法人カヤックの採用情報サイト

## 機能

- VitePressによる高速な静的サイト生成
- Dify AIチャットボットによる24時間採用情報案内
- GitHub Pagesによる自動デプロイ
- レスポンシブデザイン対応

## 🌐 公開URL

**現在**: https://miyoshi-koichi.github.io/kayac-recruit-site/

**将来**: 会社のOrganizationに移管予定

## クイックスタート

### Claude Codeでの使い方（推奨）

Claude Codeに以下のように指示してください：

```
kayac-recruit-siteで開発サーバーを起動して
```

Claude Codeが自動で：
1. プロジェクトディレクトリに移動
2. `npm run dev` を実行
3. ローカルサーバーのURLを表示

### ターミナルでの実行

```bash
cd kayac-recruit-site
npm run dev
```

ブラウザで http://localhost:5173 にアクセス

## 初回セットアップ

1. **リポジトリのクローン**
```bash
git clone https://github.com/miyoshi-koichi/kayac-recruit-site.git
cd kayac-recruit-site
```

2. **依存パッケージのインストール**
```bash
npm install
```

3. **開発サーバー起動**
```bash
npm run dev
```

## トラブルシューティング

### よくある問題1: ビルドエラーが発生する
**解決方法:**
```bash
rm -rf node_modules package-lock.json
npm install
```

### よくある問題2: GitHub Pagesで404エラー
**原因**: `config.ts` の `base` パス設定が間違っている
**解決方法**: `docs/.vitepress/config.ts` で `base: '/kayac-recruit-site/'` を確認

### よくある問題3: Difyチャットボットが表示されない
**解決方法**: ブラウザのコンソールでエラーを確認し、`config.ts` の `head` セクションのスクリプトURLを確認

## 開発者向け情報

詳細な技術情報は以下を参照：
- [ARCHITECTURE.md](ARCHITECTURE.md) - システム設計と技術仕様
- [CHANGELOG.md](CHANGELOG.md) - 変更履歴と今後のタスク
