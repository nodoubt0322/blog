### Blog built with vitepress

## Preview

-   [https://nodoubt0322.github.io/blog/](https://nodoubt0322.github.io/blog/)

## develop

```js
npm run dev // run dev server
```

-   write markdown file in posts folder (check the sample.md in the folder)

## deploy

-   edit /deploy.sh
-   replace https://github.com/nodoubt0322/blog to github page repository url
-   change the repository settings to serve github page (see picture below)

```sh
vitepress build
cd .vitepress/dist
git init -y
git add -A
git commit -m 'deploy'
git push -f https://github.com/nodoubt0322/blog master:gh-pages
cd -
```

![github page](./images/github_page.png)

```js
npm run deply  // deploy to github page
```
