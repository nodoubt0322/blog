const { getPosts, generatePaginationPages } = require('./theme/serverUtils')

async function config() {
    const pageSize = 6
    await generatePaginationPages(pageSize)
    return {
        title: '學習隨記',
        base: '/',
        description: 'vitepress,blog',
        head: [
            ['link', { rel: 'icon', href: '/favicon.ico' }],
            [
                ['script', { async: '', src: 'https://www.googletagmanager.com/gtag/js?id=G-HZEGH828MB' }],
                [
                    'script',
                    {},
                    "window.dataLayer = window.dataLayer || [];\nfunction gtag(){dataLayer.push(arguments);}\ngtag('js', new Date());\ngtag('config', 'G-HZEGH828MB');"
                ]
            ]
        ],
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
}

module.exports = config()
