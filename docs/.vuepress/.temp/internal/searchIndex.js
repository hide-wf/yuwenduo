export const searchIndex = [
  {
    "title": "",
    "headers": [],
    "path": "/diary/",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "leetcode",
    "headers": [
      {
        "level": 2,
        "title": "两数之和",
        "slug": "两数之和",
        "children": []
      },
      {
        "level": 2,
        "title": "两数相加",
        "slug": "两数相加",
        "children": []
      }
    ],
    "path": "/leetcode/",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "guide",
    "headers": [],
    "path": "/guide/",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "",
    "headers": [],
    "path": "/home/",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "Vue",
    "headers": [
      {
        "level": 2,
        "title": "响应式原理",
        "slug": "响应式原理",
        "children": []
      }
    ],
    "path": "/vue/",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "",
    "headers": [],
    "path": "/software/",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "",
    "headers": [],
    "path": "/404.html",
    "pathLocale": "/",
    "extraFields": []
  }
]

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateSearchIndex) {
    __VUE_HMR_RUNTIME__.updateSearchIndex(searchIndex)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ searchIndex }) => {
    __VUE_HMR_RUNTIME__.updateSearchIndex(searchIndex)
  })
}
