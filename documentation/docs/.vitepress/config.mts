import {defineConfig} from 'vitepress'
import {navbar} from "./configs/navbar";
import {sidebar} from "./configs/sidebar";
import {head} from "./configs/head";
import {SITE_BASE} from "./configs/SITE_BASE";

let hostname = 'https://wow.ahoo.me/';
if (SITE_BASE == '/wow/') {
    hostname = 'https://ahoowang.gitee.io/wow/'
}

// https://vitepress.dev/reference/site-config
export default defineConfig({
    lang: 'zh-CN',
    title: 'Wow',
    description: 'Wow - 领域模型即服务 | 基于 DDD & EventSourcing 的现代响应式 CQRS 架构微服务开发框架 | Modern Reactive CQRS Architecture Microservice development framework based on DDD and EventSourcing.',
    ignoreDeadLinks: 'localhostLinks',
    head: head,
    base: SITE_BASE,
    sitemap: {
        hostname: hostname
    },
    appearance: 'dark',
    themeConfig: {
        logo: '/images/logo.svg',
        siteTitle: '领域模型即服务 | Wow',
        editLink: {
            pattern: 'https://github.com/Ahoo-Wang/Wow/edit/main/documentation/docs/:path'
        },
        lastUpdated: {
            text: '上次更新'
        },
        outline: {
            label: '本页目录',
            level: [2, 3]
        },
        aside: true,
        search: {provider: 'local',},
        // https://vitepress.dev/reference/default-theme-config
        nav: navbar,
        sidebar: sidebar,
        socialLinks: [
            {icon: 'github', link: 'https://github.com/Ahoo-Wang/Wow'}
        ],
        externalLinkIcon: true,
        footer: {
            message: 'Released under the Apache 2.0 License.',
            copyright: 'Copyright © 2022-present <a href="https://github.com/Ahoo-Wang" target="_blank">Ahoo Wang</a>'
        },
        notFound: {
            title: '页面未找到',
            quote: '你访问的页面不存在。',
            linkText: '返回首页'
        }
    }
})
