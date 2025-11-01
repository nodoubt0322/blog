<script lang="ts" setup>
import { onMounted, ref, watch } from 'vue'
import { useData } from 'vitepress'
const { theme, isDark } = useData()
const { repo, issueTerm = 'pathname' } = theme.value.comment
const utterancesRef = ref()

const createUtterances = () => {
    if (repo && typeof window !== 'undefined') {
        // Clear existing utterances
        utterancesRef.value.innerHTML = ''

        const themes = isDark.value ? 'github-dark' : 'github-light'
        let utterances = document.createElement('script')
        utterances.async = true
        utterances.setAttribute('src', 'https://utteranc.es/client.js')
        utterances.setAttribute('repo', repo)
        utterances.setAttribute('issue-term', issueTerm)
        utterances.setAttribute('theme', themes)
        utterances.setAttribute('crossorigin', 'anonymous')
        utterancesRef.value.appendChild(utterances)
    }
}

onMounted(() => {
    createUtterances()
})

// Watch for dark mode changes and reload utterances
watch(isDark, () => {
    createUtterances()
})
</script>

<template>
    <div ref="utterancesRef"></div>
</template>

<style>
/*global  style*/
.utterances {
    max-width: inherit !important;
}
</style>
