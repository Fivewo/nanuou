"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.plugins = void 0;
var seo = require('vuepress-plugin-seo2').seo;
var photoSwipe = require('vuepress-plugin-photo-swipe').photoSwipe;
var searchPlugin = require('@vuepress/plugin-search').searchPlugin;
exports.plugins = [
    seo({
        hostname: 'https://www.nanuou.com'
    }),
    photoSwipe({
    // your options
    }),
    searchPlugin({
    // 配置项
    }),
];
