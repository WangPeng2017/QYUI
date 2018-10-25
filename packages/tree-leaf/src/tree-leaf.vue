<template>
  <div class="cells">
    <cell :title="leafData.title + getStudentNumber(leafData.extra)" :value="leafData.value" :is-link="leafData.islink" :link="leafData.link" :arrow-direction="direction" @click.native="openChild(leafData)">
      <CheckIcon slot="icon" :value.sync="leafData.checked" @click.native.stop="clickLeaf(leafData, $event)" v-if="leafData.checked === undefined ? false : true"></CheckIcon>
      <span v-if="leafData.childData
        && leafData.canGet
        && leafData.open" style="margin-right:10px;">{{ this.di18n.$t('加载中') }}</span>
    </cell>
  </div>
</template>

<script>
/* eslint-disable */

import { Cell, CheckIcon } from "vux";
export default {
  name: "QTreeLeaf",
  components: {
    Cell,
    CheckIcon
  },
  props: {
    data: {
      type: Object,
      default: function() {
        return {};
      }
    }
  },
  data() {
    return {
      leafData: this.data
    };
  },
  computed: {
    direction() {
      let direction = "";
      if (this.leafData.open === undefined) {
        direction = "right";
      } else if (this.leafData.open) {
        direction = "up";
      } else {
        direction = "down";
      }
      return direction;
    }
  },
  watch: {
    leafData: {
      handler: function(val, oldVal) {
        if (
          val.checked !== undefined &&
          val.childData &&
          val.childData.length
        ) {
          let allHasChecked = true;
          for (let i in val.childData) {
            !val.childData[i].checked ? (allHasChecked = false) : "";
          }
          val.checked = allHasChecked;
        }
      },
      deep: true
    }
  },
  methods: {
    clickLeaf: function(leafData) {
      this.changeAllChild(leafData);
      this.$emit("clickLeaf", leafData);
    },
    changeAllChild: function(leafData) {
      // 子级数据选中状态 与父级数据一致
      if (leafData.childData) {
        for (let i in leafData.childData) {
          leafData.checked !== undefined
            ? (leafData.childData[i].checked = leafData.checked)
            : "";

          // 递归子级数据
          if (leafData.childData[i].childData)
            this.changeAllChild(leafData.childData[i]);
        }
      }
    },
    openChild: function(leafData) {
      leafData.open !== undefined ? (leafData.open = !leafData.open) : "";
      this.$emit("openLeaf", leafData);
    },
    getStudentNumber(text) {
      if (text) {
        return `(${text})`;
      } else {
        return "";
      }
    }
  }
};
</script>

<style lang="less" scoped>
.cells:after {
  content: " ";
  height: 1px;
  border-top: 1px solid #d9d9d9;
  color: #d9d9d9;
  -webkit-transform-origin: 0 0;
  transform-origin: 0 0;
  -webkit-transform: scaleY(0.5);
  transform: scaleY(0.5);
  margin-top: 0;
  display: block;
}
</style>
