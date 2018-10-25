/*
 * @Author: wangpeng 
 * @Date: 2018-10-24 16:19:46 
 * @Last Modified by: wangpeng
 * @Last Modified time: 2018-10-25 09:45:07
 */

import Tree from './src/tree'

Tree.install = function (Vue) {
  Vue.component(Tree.name, Tree)
}

export default Tree
