export const data = JSON.parse("{\"key\":\"v-8daa1a0e\",\"path\":\"/\",\"title\":\"\",\"lang\":\"zh-CN\",\"frontmatter\":{\"home\":true,\"heroText\":\"过渡\",\"tagline\":\"个人开发学习的站点\",\"navbar\":true,\"actions\":[{\"text\":\"进入主页\",\"link\":\"/home\",\"type\":\"primary\"},{\"text\":\"项目简介\",\"link\":\"/guide/\",\"type\":\"secondary\"}],\"features\":[{\"title\":\"个人博客\",\"details\":\"日常吐槽 , 分享有趣的东西 ,记录个人学习的过程。\"},{\"title\":\"分享技术\",\"details\":\"分享个人所开发的项目,学习记录等\"},{\"title\":\"我的简历\",\"details\":\"个人简历,求职,个人介绍,能力证明\"}],\"footer\":\"MIT Licensed | Copyright 2022-present yuwenduo\"},\"excerpt\":\"\",\"headers\":[],\"git\":{},\"filePathRelative\":\"README.md\"}")

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
