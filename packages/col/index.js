/*
 * @Author: wangpeng 
 * @Date: 2018-10-24 16:17:56 
 * @Last Modified by:   wangpeng 
 * @Last Modified time: 2018-10-24 16:17:56 
 */

import Col from './src/col';

/* istanbul ignore next */
Col.install = function(Vue) {
  Vue.component(Col.name, Col);
};

export default Col;

