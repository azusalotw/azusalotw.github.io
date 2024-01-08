import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "橋牌",
  description: "一起好好學橋牌",
  head: [
    ["link", { rel: "icon", href: "/card-logo.svg" }],
    ["link", { rel: "preconnect", href: "https://fonts.googleapis.com" }],
    [
      "link",
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossorigin: "" },
    ],
    [
      "link",
      {
        href: "https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@400;500;600&display=swap",
        rel: "stylesheet",
      },
    ],
  ],
  lang: "zh-tw",
  cleanUrls: true,
  srcDir: "src",
  themeConfig: {
    // logo: "/card-logo.svg",
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "首頁", link: "/" },
      { text: "快速入門", link: "/game-rules" },
      { text: "制度書", link: "/system" },

    ],

    sidebar: [
      {
        text: "快速入門",
        items: [
          { text: "遊戲規則", link: "/game-rules" },
          { text: "基本觀念", link: "/concepts" },
          { text: "開叫檢索", link: "/opening-index" },
        ],
      },
      {
        text: "制度書",
        items: [
          { text: "二蓋一簡介", link: "/two-over-one-intro" },
          { text: "開叫", link: "/opening-bids" },
          { text: "第一次答叫", link: "/after-openings" },
        ],
      },
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/vuejs/vitepress" },
    ],
  },
});
