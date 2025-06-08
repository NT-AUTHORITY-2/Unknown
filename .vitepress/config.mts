import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "迷影",
  description: "undefined",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: '开始...', link: '/get-started' },
	  { text: '2025-06-08', link: 'chat-messages/2025/06/08'}
    ],

    sidebar: [
      {
        text: '快速开始',
        link: '/get-started'
      }
    ],

    socialLinks: [
      { icon: 'qq', text: '乐纸的群', link: 'https://qm.qq.com/q/5g2ozsIn8Y' }
    ]
  }
})
