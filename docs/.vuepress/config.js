const searchPlugin = require('@vuepress/plugin-search').searchPlugin;
const { defaultTheme } = require('@vuepress/theme-default')

module.exports = {
    base: "/",
    lang: 'zh-CN',
    title: '过渡',
    description: '这是我的第一个 VuePress 站点',
    colorModeSwitch: true,
    theme: defaultTheme({
        logo: "images/React.png",
        navbar: [
            // NavbarItem
            {
                text: '首页',
                link: '/',
            },
            {
                text: "说说",
                link: "/diary"
            },
            {
                text: '软件',
                link: "/software"
            },
            // NavbarGroup
            {
                text: '学习',
                children: [{
                        text: "leetcode",
                        link: "/leetcode"
                    },
                    {
                        text: "vue",
                        link: "/vue"
                    }
                ]
            },
        ],

    }),

    plugins: [
        searchPlugin({
            isSearchable: (page) => page.path !== '/',
            locales: {
                '/': {
                    placeholder: 'Search',
                },
                '/zh/': {
                    placeholder: '搜索',
                },
            },
        }),


    ],

}