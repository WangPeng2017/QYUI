<template>
  <div>
    <div v-for="(item, index) in treeData" :key="item.id ? item.id : (item.title+index)" gutter="0" style="border-bottom：1px solid #ddd">
      <QTreeLeaf :data="item" @clickLeaf="clickLeaf" @changeLeaf="changeLeaf">
      </QTreeLeaf>
      <template v-if="item.open" :class="item.open?'animate':''">
        <QTree :data="item.childData" v-if="item.childData" :style="(item.title === '全部'|| item.title === 'all') ? '' : 'padding-left:20px;'" @clickLeaf="clickLeaf" @changeLeaf="changeLeaf">
        </QTree>
      </template>
    </div>
  </div>
</template>

<script>
/* eslint-disable */

import { Group } from "vux";
import QTreeLeaf from "../../tree-leaf";

export default {
  name: "QTree",
  components: {
    Group,
    QTreeLeaf
  },
  props: {
    data: {
      type: Array,
      default: function() {
        return [];
      }
    }
  },
  data() {
    return {
      activeTreeData: []
    };
  },
  computed: {
    treeData() {
      return this.data;
    }
  },
  created() {},
  methods: {
    clickLeaf: function(leafData) {
      this.$emit("clickLeaf", leafData);
    },
    changeLeaf: function(leafData) {
      for (let item of this.treeData) {
        item.id === leafData.id ? (item.open = leafData.open) : "";
      }
      this.$emit("changeLeaf", leafData);
    }
  }
};
</script>

<style lang="less" scoped>
.animate {
  max-height: 9999px;
  transition-timing-function: cubic-bezier(0.5, 0, 1, 0);
  transition-delay: 0s;
}
</style>