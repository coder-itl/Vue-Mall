<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll"
export default {
  data() {
    return {
      scroll: null
    }
  },
  // 挂载后的生命周期函数
  mounted() {
    // 用变量保存
    this.scroll = new BScroll(this.$refs.wrapper, {})
  }
}
</script>