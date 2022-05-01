import type { PluginConfig } from "vuepress"

const { seo } = require('vuepress-plugin-seo2')
const { photoSwipe } = require('vuepress-plugin-photo-swipe')
const { searchPlugin } = require('@vuepress/plugin-search')

export const plugins:PluginConfig[] = [
    seo({
        hostname: 'https://www.nanuou.com'
    }),
    photoSwipe({
        // your options
    }),
    searchPlugin({
        // 配置项
    }),
]