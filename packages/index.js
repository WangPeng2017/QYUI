/*
 * @Author: wangpeng 
 * @Date: 2018-10-24 15:33:46 
 * @Last Modified by: wangpeng
 * @Last Modified time: 2018-10-24 19:32:07
 */
import QRow from './row/index.js';
import QCol from './col/index.js';
import QButton from './button/index.js';
import QTreeLeaf from './tree-leaf/index.js';

const components = [
  QRow,
  QCol,
  QButton,
  QTreeLeaf
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
  QButton,
  QTreeLeaf,
}
