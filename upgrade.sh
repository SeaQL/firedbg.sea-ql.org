#!/bin/bash
set -e

# Upgrade FireDBG docs
cd FireDBG
[[ -d .docusaurus ]] && rm -rf .docusaurus
[[ -d node_modules ]] && rm -rf node_modules
[[ -d .yarn ]] && rm -rf .yarn
[[ -d build ]] && rm -rf build
yarn install
yarn up @docusaurus/core @docusaurus/preset-classic
npx -y update-browserslist-db@latest
yarn build
rm -rf build
cd ..

# Upgrade FieDBG blog
cd Blog
[[ -d .docusaurus ]] && rm -rf .docusaurus
[[ -d node_modules ]] && rm -rf node_modules
[[ -d .yarn ]] && rm -rf .yarn
[[ -d build ]] && rm -rf build
yarn install
yarn up @docusaurus/core @docusaurus/preset-classic
npx --yes update-browserslist-db@latest
yarn build
rm -rf build
cd ..
