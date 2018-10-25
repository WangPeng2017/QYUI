/*
 * @Author: wangpeng 
 * @Date: 2018-10-24 15:33:46 
 * @Last Modified by: wangpeng
 * @Last Modified time: 2018-10-25 14:23:15
 */
import QRow from './row/index.js';
import QCol from './col/index.js';
import QTreeLeaf from './tree-leaf/index.js';
import QTree from './tree/index.js';

const components = [
  QRow,
  QCol,
  QTreeLeaf,
  QTree
]

const install = function (Vue) {
  if (install.installed) return
  components.map(component => Vue.component(component.name, component))
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default {
  install,
  QRow,
  QCol,
  QTreeLeaf,
  QTree,
}
