# Tree 折叠框
----
### 概述

Tree 折叠框组件，依赖vux组件库，使用时应在本组件外包裹 Group 组件，
依赖 QTreeLeaf组件，应该与QTreeLeaf组件一起使用

### 基础用法（多选）

<script>
  export default{
    data () {
      return {
        treeData: [{
          title: '高一一部',
          islink: true,
          open: false,
          checked: false,
          childData: [{
              title: '高15级1班',
              open: false,
              checked: false,
            },{
              title: '高15级2班',
              open: false,
              checked: false,
            }],
        }],
        treeData2: [{
          title: '高一一部',
          islink: true,
          open: false,
          childData: [{
            title: '高15级1班',
            islink: true,
            link: 'http://www.baidu.com'
          },{
            title: '高15级2班',
            islink: true,
            link: 'http://www.baidu.com'
          }],
        }]
      }
    },
    methods: {
      changeLeaf(leafData){
        console.log('折叠状态切换', leafData)
      },
      clickLeaf(leafData){
        console.log('选择状态切换', leafData)
      }
    }
  }
</script>

<div class="demo-block">
  <Group>
    <QTree
      :data = "treeData"
      @changeLeaf = "changeLeaf"
      @clickLeaf = "clickLeaf"
    ></QTree>
  </Group>
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
  <QTree
    :data = "treeData"
    @changeLeaf = "changeLeaf"
    @clickLeaf = "clickLeaf"
  ></QTree>
</Group>

<script>
  export default{
    data () {
      return {
        treeData: [{
          title: '高一一部',
          islink: true,
          open: false,
          checked: false,
          childData: [{
              title: '高15级1班',
              open: false,
              checked: false,
            },{
              title: '高15级2班',
              open: false,
              checked: false,
            }],
        }]
      }
    },
    methods: {
      changeLeaf(leafData){
        console.log('折叠状态切换', leafData)
      },
      clickLeaf(leafData){
        console.log('选择状态切换', leafData)
      }
    }
  }
</script>

```
:::

### 单选结构

<div class="demo-block">
  <Group>
    <QTree
      :data = "treeData2"
      @changeLeaf = "changeLeaf"
      @clickLeaf = "clickLeaf"
    ></QTree>
  </Group>
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
  <QTree
    :data = "treeData2"
    @changeLeaf = "changeLeaf"
    @clickLeaf = "clickLeaf"
  ></QTree>
</Group>

<script>
  export default{
    data () {
      return {
        treeData2: [{
          title: '高一一部',
          islink: true,
          open: false,
          checked: false,
          childData: [{
            title: '高15级1班',
            open: false,
            islink: true,
            link: 'http:www.baidu.com'
          },{
            title: '高15级2班',
            open: false,
            islink: true,
            link: 'http:www.baidu.com'
          }],
        }]
      }
    },
    methods: {
      changeLeaf(leafData){
        console.log('折叠状态切换', leafData)
      },
      clickLeaf(leafData){
        console.log('选择状态切换', leafData)
      }
    }
  }
</script>

```
:::

### Attributes
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| data     |    树状数据，子数据格式参照QTreeLeaf组件  | json  |    —     |    —     |

### Event

| 事件名称	      | 说明	    | 回调参数 |
|---------- |-------- |---------- |
| changeLeaf | 切换树状结构打开状态，返回操作后的数据  |  |
| clickLeaf | 切换树状结构节点选中状态，返回操作后的数据  |  |