import { defineClientConfig } from '@vuepress/client';

import test from "../home/test.vue"


export default defineClientConfig({
    enhance({ app, router, siteData }) {
        app.component("test", test)
    },
    setup() {

    },
    rootComponents: [],
})