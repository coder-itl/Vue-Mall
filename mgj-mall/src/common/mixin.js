import { debouce } from './utils'

import BackTop from 'components/content/backTop/BackTop'

export const itemListenerMinix = {
  data() {
    return {
      itemImgListener: null, //控制首页商品图片以及详情页商品推荐列表加载显示的listener
    }
  },
  mounted() {
    let newRefresh = debouce(this.$refs.scroll.refresh, 100)
    this.itemImgListener = () => {
      newRefresh()
    }
    this.$bus.$on('itemImgLoad', this.itemImgListener)
  },
}

// 组件混合
export const backTopMixin = {
  components: {
    BackTop,
  },
  data() {
    return {
      isShowBackTop: false, // 默认 false-> 隐藏，true-> 显示
    }
  },
  methods: {
    backClick() {
      // console.log('组件事件监听: 返回顶部按钮得到点击');
      // this.$refs.scroll[ref属性scroll].scroll[data变量scroll].scrollTo(0, 0, 500) [ (x,y,time) ]
      // this.$refs.scroll.scroll.scrollTo(0, 0, 500) 在组件内部进行方法封装
      this.$refs.scroll.scrollTo(0, 0, 500)
    },
  },
}
