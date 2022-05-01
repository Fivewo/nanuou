"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var vuepress_1 = require("vuepress");
var configs_1 = require("./configs");
exports.default = (0, vuepress_1.defineUserConfig)({
    // 站点配置
    lang: 'zh-CN',
    title: '南邮新生指南',
    description: '面向南京邮电大学全体新生的入学指南网站',
    head: [
        [
            'link',
            {
                rel: 'icon',
                sizes: '32x32',
                type: 'image/png',
                href: '/images/icons/favicon.png',
            },
        ],
        ['meta', { name: 'keywords', content: 'njupt,nanuou,南邮,南邮人,南邮宿舍,南邮入学攻略,南邮新生攻略,南邮入学指南,南邮新生指南,南京邮电大学' }],
        ['meta', { name: 'description', content: '南邮新生指南（www.nanuou.com） 是一个面向南京邮电大学全体新生的入学指南网站。这是一个免费公益网站，你可以通过浏览网站了解到南京邮电大学的许多信息（学业、宿舍等）。' }]
    ],
    // 外置插件
    plugins: configs_1.plugins,
    // 主题和它的配置
    theme: '@vuepress/theme-default',
    themeConfig: {
        logo: '/images/logo.png',
        repo: 'Fivewo/nanuou',
        docsDir: 'docs',
        navbar: configs_1.navbar,
        sidebar: configs_1.sidebar,
        // page meta
        editLinkText: '在 GitHub 上编辑此页',
        lastUpdatedText: '上次更新',
        contributorsText: '贡献者',
        // custom containers
        tip: '提示',
        warning: '注意',
        danger: '警告',
        // 404 page
        notFound: [
            '这里什么都没有',
            '我们怎么到这来了？',
            '这是一个 404 页面',
            '看起来我们进入了错误的链接',
        ],
        backToHome: '返回首页',
        // a11y
        openInNewWindow: '在新窗口打开',
        toggleDarkMode: '切换夜间模式',
        toggleSidebar: '切换侧边栏',
    }
});
