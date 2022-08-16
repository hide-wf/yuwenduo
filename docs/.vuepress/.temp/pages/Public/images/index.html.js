export const data = JSON.parse("{\"key\":\"v-c1d24b2c\",\"path\":\"/Public/images/\",\"title\":\"\",\"lang\":\"zh-CN\",\"frontmatter\":{\"home\":true,\"heroImage\":\"Public/images/个人中心.png\",\"heroText\":\"过渡\",\"tagline\":\"个人开发学习的站点\",\"actions\":[{\"text\":\"快速上手\",\"link\":\"/home\",\"type\":\"primary\"},{\"text\":\"项目简介\",\"link\":\"/guide/\",\"type\":\"secondary\"}],\"sidebar\":\"auto\",\"features\":[{\"title\":\"简洁至上\",\"details\":\"记录个人学习的过程\"},{\"title\":\"通俗易懂\",\"details\":\"享受 Vue 的开发体验，可以在 Markdown 中使用 Vue 组件，又可以使用 Vue 来开发自定义主题。\"},{\"title\":\"高性能\",\"details\":\"VuePress 会为每个页面预渲染生成静态的 HTML，同时，每个页面被加载的时候，将作为 SPA 运行。\"}]},\"excerpt\":\"\",\"headers\":[],\"git\":{},\"filePathRelative\":\"Public/images/README.md\"}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
