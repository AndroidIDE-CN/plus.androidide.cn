import { defineUserConfig } from "vuepress";

import theme from "./theme.js";
import plugins from "./plugins.js";
import { getDirname, path } from "vuepress/utils";

const __dirname = getDirname(import.meta.url);
console.log(path.resolve(__dirname, "Links.vue"))
export default defineUserConfig({
  base: "/",
  title: "AIDE Plus",

  dest: "public",

  locales: {
    "/": {
      lang: "en-US",
      // description: "A docs demo for vuepress-theme-hope",
    },
    "/zh/": {
      lang: "zh-CN",
      // description: "vuepress-theme-hope 的文档演示",
    },
  },

  theme,
  plugins,
  alias:{
    "@Links": path.resolve(__dirname, "Links.vue"),
  }

  // Enable it with pwa
  // shouldPrefetch: false,
});
