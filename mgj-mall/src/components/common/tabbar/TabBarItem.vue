<template>
  <div class="tab-bar-item" @click="itemClick()">
    <div v-if="!isActive">
      <slot name="item-icon"></slot>
    </div>
    <div v-else>
      <slot name="item-active-icon"></slot>
    </div>
    <!-- 动态获取类样式 -->
    <div :style="activeStyle">
      <slot name="item-text"></slot>
    </div>
  </div>
</template>

<style scoped>
.tab-bar-item {
  flex: 1;
  height: 49px;
  text-align: center;
  background-color: #f5f5f5;
  box-shadow: 1px 1px 1px #f6f6f6;
  font-size: 12px;
  padding-top: 2px;
}

.tab-bar-item img {
  width: 24px;
  height: 24px;
}
</style>

<script>
export default {
  data() {
    return {};
  },
  props: {
    path: String,
    activeColor: {
      type: String,
      default: "red",
    },
  },
  methods: {
    itemClick() {
      // 监听 item 点击 push: 可以进行后退前进功能, replace: 不能实现后退前进功能
      this.$router.push(this.path);
    },
  },
  computed: {
    isActive() {
      // 获取当前活跃路由并对其判断
      return this.$route.path.indexOf(this.path) !== -1;
    },
    activeStyle() {
      return this.isActive ? { color: this.activeColor } : {};
    },
  },
};
</script>


