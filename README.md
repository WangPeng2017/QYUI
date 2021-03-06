# QUI

`QUI` 是爱云校 IDSP-FE 团队，基于企业微信业务定制化开发需求，实现的一款移动端 UI 组件库，主要用于快速开发企业微信！
<!-- [演示地址](https://vv-ui.github.io/VV-UI) -->

## 特性

- 基于 `Vue` 开发的 UI 组件
- 使用 npm + webpack + babel 的工作流，支持 ES2015
- 提供友好的 API，可灵活的使用组件

## 浏览器支持

- 现代浏览器和 IE9 及以上

## 安装

- npm

```bash
npm install qui --save
```

## 使用

```js
import QUI from 'qui' // 引入组件库
import 'vvui/packages/theme-default/lib/index.css' // 引入样式库

Vue.use(QUI)
```