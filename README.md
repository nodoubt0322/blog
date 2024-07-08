### Blog built with vitepress

## Preview

-   [https://blog-nodoubt0322.vercel.app/](https://blog-nodoubt0322.vercel.app/)

## develop

```js
npm run dev     // run dev server
npm run deploy  // deploy to github page,
```

-   write markdown file in posts folder (md format check the sample.md)

## deploy

-   edit /deploy.sh
-   replace https://github.com/nodoubt0322/blog to `your github page repository url`
-   change the repository settings to serve github page (see picture below)
-   npm run deploy

```sh
vitepress build
cd .vitepress/dist
git init
git add -A
git commit -m 'deploy'
git push -f https://github.com/nodoubt0322/blog master:gh-pages
cd -
```

![github page](./posts/images/github_page.png)
