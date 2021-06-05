<template>
  <div id="detail">
    <router-view></router-view>
    <detail-nav-bar></detail-nav-bar>
    <detail-swiper></detail-swiper>
  </div>
</template>

<script>
import DetailNavBar from "./childComps/DetailNavBar"
import DetailSwiper from "./childComps/DetailSwiper"

import { getDetail } from "network/detail"

export default {
  data() {
    return {
      iid: null,
      topImages: []
    }
  },
  created() {
    // 1. 保存传入的 iid
    this.iid = this.$route.params.iid;

    // 2. 根据 iid 请求对应数据展示
    getDetail(this.iid).then((res) => {
      // console.log('iid: ', res);
      // 1. 获取顶部的图片轮播数据
      console.log('网络请求发送成功', res);

    })
  },
  components: {
    DetailNavBar,
    DetailSwiper
  },
}
</script>

<style  scoped>
</style>
