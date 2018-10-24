/*
 * @Author: wangpeng 
 * @Date: 2018-10-24 16:19:32 
 * @Last Modified by:   wangpeng 
 * @Last Modified time: 2018-10-24 16:19:32 
 */

import Button from './src/button.vue';

Button.install = function (Vue) {
  Vue.component(Button.name, Button);
};

export default Button;
