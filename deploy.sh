vitepress build
cd .vitepress/dist 
git init -y
git add -A
git commit -m 'deploy'
git push -f https://github.com/nodoubt0322/blog master:gh-pages 
cd -