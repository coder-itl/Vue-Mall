import debouce from './utils'
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
