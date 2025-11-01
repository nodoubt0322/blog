import { createContentLoader } from 'vitepress'

export default createContentLoader('posts/**/*.md', {
  exclude: ['posts/drafts/**'],
  transform(rawData) {
    // Filter out draft posts
    const posts = rawData.filter(page => {
      const frontmatter = page.frontmatter
      return !frontmatter.draft
    })

    // Sort by date (newest first)
    posts.sort((a, b) => {
      const dateA = new Date(a.frontmatter.date || '1970-01-01')
      const dateB = new Date(b.frontmatter.date || '1970-01-01')
      return dateB.getTime() - dateA.getTime()
    })

    // Transform to match existing format expected by components
    return posts.map(page => ({
      frontMatter: {
        date: page.frontmatter.date || new Date().toISOString().split('T')[0],
        title: page.frontmatter.title || 'Untitled',
        tags: page.frontmatter.tags || [],
        description: page.frontmatter.description || '',
        ...page.frontmatter
      },
      regularPath: page.url
    }))
  }
})