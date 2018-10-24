/*
 * @Author: wangpeng 
 * @Date: 2018-10-24 16:21:43 
 * @Last Modified by: wangpeng
 * @Last Modified time: 2018-10-24 16:28:11
 */

export default {
  name: 'QCol',

  props: {
    span: {
      type: Number,
      default: 24
    },
    tag: {
      type: String,
      default: 'div'
    },
    offset: Number,
    pull: Number,
    push: Number,
    xs: [Number, Object],
    sm: [Number, Object],
    md: [Number, Object],
    lg: [Number, Object]
  },

  computed: {
    gutter() {
      let parent = this.$parent;
      while (parent && parent.$options.componentName !== 'WRow') {
        parent = parent.$parent;
      }
      return parent ? parent.gutter : 0;
    }
  },
  render(h) {
    let classList = [];
    let style = {};

    if (this.gutter) {
      style.paddingLeft = this.gutter / 2 + 'px';
      style.paddingRight = style.paddingLeft;
    }

    ['span', 'offset', 'pull', 'push'].forEach(prop => {
      if (this[prop]) {
        classList.push(
          prop !== 'span' ?
          `q-col-${prop}-${this[prop]}` :
          `q-col-${this[prop]}`
        );
      }
    });

    ['xs', 'sm', 'md', 'lg'].forEach(size => {
      if (typeof this[size] === 'number') {
        classList.push(`q-col-${size}-${this[size]}`);
      } else if (typeof this[size] === 'object') {
        let props = this[size];
        Object.keys(props).forEach(prop => {
          classList.push(
            prop !== 'span' ?
            `q-col-${size}-${prop}-${props[prop]}` :
            `q-col-${size}-${props[prop]}`
          );
        });
      }
    });

    return h(this.tag, {
      class: ['q-col', classList],
      style
    }, this.$slots.default);
  }
};
