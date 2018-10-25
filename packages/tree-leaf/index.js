/*
 * @Author: wangpeng 
 * @Date: 2018-10-24 16:19:46 
 * @Last Modified by: wangpeng
 * @Last Modified time: 2018-10-25 08:01:03
 */

import TreeLeaf from './src/tree-leaf'

TreeLeaf.install = function (Vue) {
  Vue.component(TreeLeaf.name, TreeLeaf)
}

export default TreeLeaf
