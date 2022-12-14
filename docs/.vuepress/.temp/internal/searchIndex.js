export const searchIndex = [
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
    "title": "说说",
    "headers": [
      {
        "level": 2,
        "title": "2022",
        "slug": "_2022",
        "children": [
          {
            "level": 3,
            "title": "2022-8-17",
            "slug": "_2022-8-17",
            "children": []
          },
          {
            "level": 3,
            "title": "2022-8-26",
            "slug": "_2022-8-26",
            "children": []
          }
        ]
      }
    ],
    "path": "/diary/",
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
    "title": "",
    "headers": [],
    "path": "/software/",
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
