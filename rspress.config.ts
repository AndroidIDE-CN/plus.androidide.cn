import * as path from 'node:path';
import {defineConfig} from 'rspress/config';

import {pluginLastUpdated} from '@rspress/plugin-last-updated'; /* 最后更新时间 */
import {pluginPreview} from '@rspress/plugin-preview'; /*代码预览*/
import alignImage from 'rspress-plugin-align-image';
import katex from 'rspress-plugin-katex';
import readingTime from 'rspress-plugin-reading-time';


const icon = "https://github.com/AndroidIDE-CN/AIDE-Plus/raw/2.3/.idea/icon.svg"

export default defineConfig({
    lang: 'zh-CN',

    root: path.join(__dirname, 'docs'),
    title: 'AIDE Plus',
    logo: icon,
    logoText: 'AIDE-Plus',
    icon: icon,

    plugins: [
        //pluginLastUpdated(),
        pluginPreview(),
        alignImage(),
        katex(),
        readingTime(),
    ],

    markdown: {
        // 是否检查死链
        checkDeadLinks: false,
    },
    ssg: {
        strict: true,
    },
    search: {
        codeBlocks: true,
    },
    route: {
        cleanUrls: true,
    },

    themeConfig: {
        lastUpdated: true,
        enableContentAnimation: true,
        enableAppearanceAnimation: false,
        hideNavbar: 'auto',

        footer: {
            message: '© 2024 AndroidIDE-CN Inc. All Rights Reserved.',
        },

        locales: [
            {
                lang: 'zh-CN',
                label: '简体中文',
                editLink: {
                    docRepoBaseUrl:
                        'https://github.com/web-infra-dev/rspress/tree/main/packages/document/docs',
                    text: '📝 在 GitHub 上编辑此页',
                },
                searchNoResultsText: '未搜索到相关结果',
                searchPlaceholderText: '搜索文档',
                searchSuggestedQueryText: '可更换不同的关键字后重试',
                overview: {
                    filterNameText: '过滤',
                    filterPlaceholderText: '输入关键词',
                    filterNoResultText: '未找到匹配的 API',
                },
            },
            {
                lang: 'en-US',
                label: 'English',
                editLink: {
                    docRepoBaseUrl:
                        'https://github.com/web-infra-dev/rspress/tree/main/packages/document/docs',
                    text: '📝 Edit this page on GitHub',
                },
            },
        ],

        socialLinks: [
            {
                icon: 'github',
                mode: 'link',
                content: 'https://github.com/AndroidIDE-CN/AIDE-Plus',
            },
        ],
    },
    // 先关闭，后面发版再检查语言有没有对应的资源
    languageParity: {
        enabled: true,
        include: [],
        exclude: [],
    },
});
