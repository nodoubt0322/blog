const { getPosts, generatePaginationPages } = require('./theme/serverUtils')
import { inject } from '@vercel/analytics'
import { injectSpeedInsights } from '@vercel/speed-insights'

injectSpeedInsights()
inject()

async function config() {
    const pageSize = 10
    await generatePaginationPages(pageSize)
    return {
        title: '學習隨記',
        base: '/',
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
                { text: 'Tools', link: '/pages/tools' },
                { text: 'Books', link: '/pages/books' },
                { text: 'About', link: '/pages/about' }
            ]
        },
        srcExclude: ['README.md']
    }
}

module.exports = config()
