import { defineConfig } from 'vitepress'

// https://vitepress.vuejs.org/config/app-configs
export default defineConfig({
  title: 'Kayac Recruit',
  description: '面白法人カヤック採用サイト',

  // GitHub Pagesのベースパス（リポジトリ名に合わせて変更してください）
  base: '/kayac-recruit-site/',

  // クリーンなURL（.html拡張子を隠す）
  cleanUrls: 'without-subfolders',

  // 日本語対応
  lang: 'ja-JP',

  // メタタグ（AI可読性向上）
  head: [
    ['meta', { name: 'keywords', content: 'カヤック,採用,リクルート,Kayac' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:title', content: 'Kayac Recruit' }],
    ['meta', { property: 'og:description', content: '面白法人カヤック採用サイト' }],
    ['script', {}, 'window.difyChatbotConfig = { token: "5EhTvLU7SYJQYlpT", inputs: {}, systemVariables: {}, userVariables: {} };'],
    ['script', { src: 'https://udify.app/embed.min.js', id: '5EhTvLU7SYJQYlpT', defer: '' }],
    ['style', {}, `
      /* Difyチャットボットのスタイル調整 */
      #dify-chatbot-bubble-button {
        background-color: #1C64F2 !important;
        bottom: 1rem !important;
        right: 1rem !important;
      }
      #dify-chatbot-bubble-window {
        width: 24rem !important;
        height: 40rem !important;
        position: fixed !important;
        bottom: 1rem !important;
        right: 1rem !important;
      }
      /* ダークモードボタンを右上に配置 */
      .VPNavBar .VPSwitch {
        margin-left: auto !important;
        margin-right: 1.5rem !important;
      }
      .VPNavBar .content-body {
        justify-content: flex-end !important;
      }
    `],
  ],

  // サイドバー設定
  themeConfig: {
    sidebar: [
      {
        text: 'ホーム',
        items: [
          { text: 'トップページ', link: '/' }
        ]
      },
      {
        text: '組織紹介',
        items: [
          { text: '会社概要', link: '/about' },
          { text: '企業文化', link: '/culture' },
          { text: 'オフィス環境', link: '/office' }
        ]
      },
      {
        text: '事業紹介',
        items: [
          { text: '事業概要', link: '/business' },
          { text: '面白プロデュース事業', link: '/business-produce' },
          { text: 'ゲーム事業', link: '/business-game' },
          { text: 'ゲームコミュニティ事業', link: '/business-community' },
          { text: '地域資本主義事業', link: '/business-regional' }
        ]
      },
      {
        text: '採用情報',
        items: [
          { text: '募集要項', link: '/jobs' },
          { text: '選考フロー', link: '/process' },
          { text: 'FAQ', link: '/faq' }
        ]
      }
    ],

    // フッター
    footer: {
      message: 'AI搭載採用サイト',
      copyright: 'Copyright © 2025 Kayac Inc.'
    }
  }
})
