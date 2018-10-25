# TreeLeaf 面板
----
### 概述

TreeLeaf 面板组件，依赖vux组件库，使用时应在本组件外包裹 Group 组件

### 基础用法

<div class="demo-block">
  <div>
    <Group>
      <QTreeLeaf
        :data = "{
          title: '文本',
          extra: '1234'
        }"
      ></QTreeLeaf>
    </Group>
  </div>
</div>

::: demo
```html
  import { Group } from 'vux'

  export default {
    components: {
      Group
    }
  }

  <Group>
    <QTreeLeaf
      :data = "{
        title: '文本',
        extra: '1234'
      }"
    ></QTreeLeaf>
  </Group>

```
:::

### 可跳转的链接的面板

<div class="demo-block">
  <div>
    <Group>
      <QTreeLeaf
        :data = "{
          title: '文本',
          value: '百度',
          extra: '1234',
          islink:true,
          link: 'http://www.baidu.com'
        }"
      ></QTreeLeaf>
      <QTreeLeaf
        :data = "{
          title: '文本',
          value: '百度',
          extra: '1234',
          islink:true,
          link: {
            name: 'index',
            query: { studentId: 12345 }
          }
        }"
      ></QTreeLeaf>
    </Group>
  </div>
</div>

::: demo
```html
  import { Group } from 'vux'

  export default {
    components: {
      Group
    }
  }

  <Group>
    <QTreeLeaf
      :data = "{
        title: '文本',
        value: '百度',
        extra: '1234',
        islink:true,
        link: 'http://www.baidu.com'
      }"
    ></QTreeLeaf>
    <QTreeLeaf
      :data = "{
        title: '文本',
        value: '百度',
        extra: '1234',
        islink:true,
        link: {
          name: 'index',
          query: { studentId: 12345 }
        }
      }"
    ></QTreeLeaf>
  </Group>

```
:::

### 可多选的面板

<div class="demo-block">
  <div>
    <Group>
      <QTreeLeaf
        :data = "{
          title: '文本',
          extra: '1234',
          checked: false
        }"
      ></QTreeLeaf>
      <QTreeLeaf
        :data = "{
          title: '文本',
          extra: '1234',
          checked: true
        }"
      ></QTreeLeaf>
    </Group>
  </div>
</div>

::: demo
```html
  import { Group } from 'vux'

  export default {
    components: {
      Group
    }
  }

  <Group>
    <QTreeLeaf
      :data = "{
        title: '文本',
        extra: '1234',
        checked: false
      }"
    ></QTreeLeaf>
    <QTreeLeaf
      :data = "{
        title: '文本',
        extra: '1234',
        checked: true
      }"
    ></QTreeLeaf>
  </Group>

```
:::


### Attributes
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| data.title     | 左边标题文字   | string  |  —   |    —     |
| data.value     | 右侧文字   | string    |   —   |     —    |
| data.extra     | 左边标题拓展文字，无值不显示，有值则在标题后括号内显示   | string    |  —  |  —   |
| data.islink  | 是否为链接，如果是，右侧将会出现指引点击的右箭头    | boolean   | true/false   | false   |
| data.link  | 点击链接，可以为http(s)协议，也可以是 vue-router 支持的地址形式 | string object   |  —  |  —  |
| data.checked  | 是否选中，无数据则不显示多选框 | boolean   |  true/false  |  false  |
