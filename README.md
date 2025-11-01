### Blog built with VitePress 1.x

## Tech Stack

- **VitePress**: 1.6.4 (latest stable)
- **TypeScript**: 5.9.0
- **Vue**: 3.5.13
- **Node.js**: 20 LTS
- **ESLint**: 9.17.0 with flat config
- **Prettier**: 3.4.2

## Preview

-   [https://blog-nodoubt0322.vercel.app/](https://blog-nodoubt0322.vercel.app/)

## Development

```bash
npm run dev          # run dev server
npm run build        # build for production
npm run preview      # preview production build
npm run lint         # run ESLint
npm run format       # format code with Prettier
npm run deploy       # deploy to github page
```

-   Write markdown files in `posts` folder (see `sample.md` for format)

## Code Quality

This project includes ESLint and Prettier for code quality:

- **ESLint**: Uses flat config with TypeScript, Vue 3, and Prettier integration
- **Prettier**: Configured with consistent formatting rules
- **TypeScript**: Strict mode enabled with improved type safety

## Deployment

-   Edit `/deploy.sh`
-   Replace `https://github.com/nodoubt0322/blog` with your GitHub page repository URL
-   Change repository settings to serve GitHub pages (see picture below)
-   Run `npm run deploy`

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

## Upgrade Notes

This project has been upgraded from VitePress 0.20.4 to 1.6.4 with:

- **Breaking changes**: All config files converted to ESM (.mjs)
- **Improved TypeScript**: Better type definitions and strict mode
- **Modern ESLint**: Migrated to flat config (v9)
- **Updated Prettier**: Compatible with v3 syntax
- **Node.js**: Requires Node.js 20 LTS or higher
