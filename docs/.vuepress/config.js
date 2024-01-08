import { defaultTheme, defineUserConfig } from "vuepress";

export default defineUserConfig({
  lang: "zh-TW",
  title: "你好， VuePress!",
  description: "這是我的第一個 VuePress 網站",
  base: "/azusalotw.github.io/",
  theme: defaultTheme({
    navbar: [
      // NavbarItem
      {
        text: "Foo",
        link: "/foo/",
      },
      // NavbarGroup
      {
        text: "Group",
        children: ["/group/foo.md", "/group/bar.md"],
      },
      // 字符串 - 页面文件路径
      "/bar/README.md",
    ],
    repo: "https://github.com/azusalotw",
    sidebar: [
      // SidebarItem
      "/",
      {
        text: "第一組",
        link: "/Category_1/",
        children: [
          // SidebarItem
          {
            text: "github",
            link: "https://github.com",
          },
          // 字符串 - 页面文件路径
          {
            text: "test1",
            path: "/Category_1/",
            children: [
              {
                text: "test",
                path: "/Category_1/test.md",
              }, 
              "/Category_1/test2.md"
            ],
          },
        ],
      },
      // 字符串 - 页面文件路径
      "/README.md",
    ],
  }),
});
