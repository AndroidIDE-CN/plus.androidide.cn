import { defineConfig } from "vitepress";
import zh from "./zh";

export default defineConfig({

  lastUpdated: true,
  
  locales: {
    root: {
      label: "简体中文",
      lang: "zh-CN",
      ...zh,
    },
  },
  head: [
    [
      "link",
      {
        rel: "icon",
        href: "/favicon.ico",
      },
    ],
  ],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: "icon.svg",
  },



})

//