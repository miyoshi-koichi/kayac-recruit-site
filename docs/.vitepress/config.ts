import { defineConfig } from 'vitepress'

// https://vitepress.vuejs.org/config/app-configs
export default defineConfig({
  title: '採用サイト｜面白法人カヤック',
  description: '面白法人カヤックは、「つくる人を増やす」を経営理念に掲げ、古都鎌倉から、ゲーム制作・広告企画・地域通貨、関係人口促進など、固定観念にとらわれない発想力・企画力で面白いサービスやコンテンツを提供するクリエイター集団です。',

  // GitHub Pagesのベースパス（リポジトリ名に合わせて変更してください）
  base: '/kayac-recruit-site/',

  // クリーンなURL（.html拡張子を隠す）
  cleanUrls: 'without-subfolders',

  // 日本語対応
  lang: 'ja-JP',

  // メタタグ（AI可読性向上）
  head: [
    // Favicon
    ['link', { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],

    // 基本メタタグ
    ['meta', { name: 'keywords', content: 'カヤック,採用,リクルート,Kayac' }],

    // OGP設定
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:site_name', content: 'Kayac Recruit' }],
    ['meta', { property: 'og:title', content: '採用サイト｜面白法人カヤック' }],
    ['meta', { property: 'og:description', content: '面白法人カヤックは、「つくる人を増やす」を経営理念に掲げ、古都鎌倉から、ゲーム制作・広告企画・地域通貨、関係人口促進など、固定観念にとらわれない発想力・企画力で面白いサービスやコンテンツを提供するクリエイター集団です。' }],
    ['meta', { property: 'og:url', content: 'https://recruit.kayac.com/' }],
    ['meta', { property: 'og:image', content: 'https://recruit.kayac.com/images/ogp.jpg' }],
    ['meta', { property: 'og:image:width', content: '1200' }],
    ['meta', { property: 'og:image:height', content: '630' }],

    // Twitter Card設定
    ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
    ['meta', { name: 'twitter:title', content: '採用サイト｜面白法人カヤック' }],
    ['meta', { name: 'twitter:description', content: '面白法人カヤックは、「つくる人を増やす」を経営理念に掲げ、古都鎌倉から、ゲーム制作・広告企画・地域通貨、関係人口促進など、固定観念にとらわれない発想力・企画力で面白いサービスやコンテンツを提供するクリエイター集団です。' }],
    ['meta', { name: 'twitter:image', content: 'https://recruit.kayac.com/images/ogp.jpg' }],

    // Difyチャットボット
    ['script', {}, 'window.difyChatbotConfig = { token: "5EhTvLU7SYJQYlpT", inputs: {}, systemVariables: {}, userVariables: {} };'],
    ['script', { src: 'https://udify.app/embed.min.js', id: '5EhTvLU7SYJQYlpT', defer: '' }],
    ['style', {}, `
      /* ロゴサイズ調整 */
      .VPNavBarTitle .logo {
        width: auto !important;
        height: 36px !important;
      }

      /* Difyチャットボットのスタイル調整 */
      #dify-chatbot-bubble-button {
        background-color: #1C64F2 !important;
        bottom: 5rem !important;
        right: 1rem !important;
      }
      #dify-chatbot-bubble-window {
        width: 24rem !important;
        height: 40rem !important;
        position: fixed !important;
        bottom: 5rem !important;
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

  // ダークモード無効化
  appearance: false,

  // サイドバー設定
  themeConfig: {
    // ロゴ設定（ロゴのみ表示、テキストは非表示）
    logo: '/images/logo.png',
    siteTitle: false,

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
