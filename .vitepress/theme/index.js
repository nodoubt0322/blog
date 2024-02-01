import DefaultTheme from 'vitepress/theme'

import NewLayout from './components/NewLayout.vue'
import Archives from './components/Archives.vue'
import Tags from './components/Tags.vue'
import Page from './components/Page.vue'
import Comment from './components/Comment.vue'

import './custom.css'
import { inject } from '@vercel/analytics'
import { injectSpeedInsights } from '@vercel/speed-insights'

injectSpeedInsights()
inject()

export default {
    ...DefaultTheme,
    Layout: NewLayout,
    enhanceApp({ app }) {
        app.component('Tags', Tags)
        app.component('Archives', Archives)
        app.component('Page', Page)
        app.component('Comment', Comment)
    }
}
