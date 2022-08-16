import { defineAsyncComponent } from 'vue'

export const layoutComponents = {
  "404": defineAsyncComponent(() => import("C:/Users/Administrator/Desktop/project/前端/Vue/vuepress/个人博客/node_modules/@vuepress/theme-default/lib/client/layouts/404.vue")),
  "Layout": defineAsyncComponent(() => import("C:/Users/Administrator/Desktop/project/前端/Vue/vuepress/个人博客/node_modules/@vuepress/theme-default/lib/client/layouts/Layout.vue")),
}
