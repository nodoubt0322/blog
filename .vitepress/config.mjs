import { defineConfig } from 'vitepress'
import { getPosts, generatePaginationPages } from './theme/serverUtils.mjs'

export default await defineConfig(async () => {
    const pageSize = 10
    await generatePaginationPages(pageSize)

    return {
        title: '學習隨記',
        base: '/',
        appearance: 'dark',
        description: 'vitepress,blog',
        head: [['link', { rel: 'icon', href: '/favicon.ico' }]],
        themeConfig: {
            posts: await getPosts(),
            pageSize: pageSize,
            website: 'https://blog-nodoubt0322.vercel.app/',
            comment: {
                repo: 'nodoubt0322/blog',
                issueTerm: 'pathname'
            },
            nav: [
                { text: 'Home', link: '/' },
                { text: 'Archives', link: '/pages/archives' },
                { text: 'Tags', link: '/pages/tags' },
                { text: 'About', link: '/pages/about' }
            ]
        },
        srcExclude: ['README.md']
    }
})