const { getPosts, generatePaginationPages } = require('./theme/serverUtils')

async function config() {
    const pageSize = 6
    await generatePaginationPages(pageSize)
    return {
        title: '學習隨記',
        base:'/blog',
        description: 'vitepress,blog',
        head:[
            ['link', { rel: "icon", href: "/blog/favicon.ico"}]
        ],
        themeConfig: {
            posts: await getPosts(),
            pageSize: pageSize,
            website: 'https://github.com/nodoubt0322/blog',
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
        srcExclude: ['README.md'],
        plugins: [
            [ '@vuepress/google-analytics', { 'ga': 'G-HZEGH828MB'} ]
        ]        
    }
}

module.exports = config()
