export default {
  title: '我的文檔',
  description: 'VitePress 文檔網站',
  base: '/',
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
