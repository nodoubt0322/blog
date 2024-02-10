<template>
    <div class="site-footer">
        MIT Licensed | Copyright © 2022 <a class="vitepress">nodoubt0322</a><br />
        Powered by
        <a href="https://vitepress.dev/" class="vitepress" target="_blank">VitePress</a>
    </div>
</template>
<script lang="ts" setup>
import { useData } from 'vitepress'

const { site, theme } = useData()
const website = theme.value.website
const webTitle = site.value.title
</script>

<style>
.site-footer {
    color: #999;
    height: 50px;
    text-align: center;
    font-size: 0.75rem;
    width: 100vw;
}
.vitepress {
    color: #222;
    font-weight: 700;
}
</style>
