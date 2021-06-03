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
    this.scroll = new BScroll(this.$refs.wrapper, {
      click: true // 按钮是否无论开启都可以触发点击事件,但是一个div 如果需要触发点击事件,那么必须添加该配置
    })
  },
  methods: {
    scrollTo(x, y, time = 300) {
      this.scroll.scrollTo(x, y, time)
    }
  }
}
</script>