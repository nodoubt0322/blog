type Post = {
    frontMatter: {
        date: string
        title: string
        tags?: string[]
        description?: string
    }
    regularPath: string
}

type TagsData = Record<string, Post[]>
type YearSortData = Post[][]

export function initTags(post: Post[]): TagsData {
    const data: TagsData = {}
    for (let index = 0; index < post.length; index++) {
        const element = post[index]
        const tags = element.frontMatter.tags
        if (tags) {
            tags.forEach((item) => {
                if (data[item]) {
                    data[item].push(element)
                } else {
                    data[item] = [element]
                }
            })
        }
    }
    return data
}

export function useYearSort(post: Post[]): YearSortData {
    const data: YearSortData = []
    let year = '0'
    let num = -1
    for (let index = 0; index < post.length; index++) {
        const element = post[index]
        if (element.frontMatter.date) {
            const y = element.frontMatter.date.split('-')[0]
            if (y === year) {
                data[num].push(element)
            } else {
                num++
                data[num] = [element]
                year = y
            }
        }
    }
    return data
}
