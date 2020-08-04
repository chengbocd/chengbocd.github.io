#!/usr/bin/env sh

set -e

npm run build

cd dist

git init
git config user.name 'chengbocd'
git config user.email '1098361667@qq.com'
git add -A
git commit -m 'deploy'

git push -f git@github.com:chengbocd/chengbocd.github.io.git master

cd -
