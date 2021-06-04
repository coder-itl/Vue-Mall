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
  props: {
    probeType: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      scroll: null
    }
  },
  // 挂载后的生命周期函数
  mounted() {
    // 1. 创建 BScroll 对象
    this.scroll = new BScroll(this.$refs.wrapper, {
      click: true, // 按钮是否无论开启都可以触发点击事件,但是一个div 如果需要触发点击事件,那么必须添加该配置
      probeType: this.probeType // 监听所有滚动
    })
    // 2. 监听滚动位置
    this.scroll.on('scroll', (position) => {
      // 文档地址
      // console.log('Better-Scroll 文档地址: https://better-scroll.github.io/docs/zh-CN/guide/');
      // console.log(position); 输出封装
      this.$emit('scroll', position);
    })

  },
  methods: {
    scrollTo(x, y, time = 300) {
      this.scroll && this.scroll.scrollTo(x, y, time)
    },
    finishPullUp() {
      this.scroll.finishPullUp()
    },
    refresh() {
      this.$refs.scroll.refresh();
    }

  }
}
</script>