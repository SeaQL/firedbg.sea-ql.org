#!/bin/bash
set -e

[[ -d dist ]] && rm -r dist

mkdir dist

cd FireDBG
yarn install
npx -y update-browserslist-db@latest
[[ -d build ]] && rm -r build
yarn build
mv build/* ../dist/

cd ..
cp docs/* dist/
