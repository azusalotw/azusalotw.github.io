export default {
  title: '我的文檔',
  description: 'VitePress 文檔網站',
  base: '/docs/', // 讓 GitHub Pages 正確解析 VitePress
  themeConfig: {
    nav: [
      { text: '首頁', link: '/' },
      { text: '指南', link: '/guide/' },
    ],
    sidebar: {
      '/guide/': [
        { text: '介紹', link: '/guide/' },
        { text: '快速開始', link: '/guide/quickstart' },
      ],
    },
  },
};
