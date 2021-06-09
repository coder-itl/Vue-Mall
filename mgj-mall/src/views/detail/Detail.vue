<template>
  <div class="detail">
    <detail-nav-bar></detail-nav-bar>
    <scroll class="content" ref="scroll">
      <detail-swiper :top-images="topImages"></detail-swiper>
      <detail-base-info :goods="goods"></detail-base-info>
      <detail-shop-info :shop="shopInfo"></detail-shop-info>
      <detail-goods-info :detail-info="detailInfo" @imageLoad="imageLoad"></detail-goods-info>
      <detail-params :params="params" ref="params"></detail-params>
    </scroll>
  </div>
</template>

<script>
import DetailNavBar from "./childComps/DetailNavBar"
import DetailSwiper from "./childComps/DetailSwiper"
import DetailBaseInfo from "./childComps/DetailBaseInfo"
import DetailShopInfo from "./childComps/DetailShopInfo"
import DetailGoodsInfo from "./childComps/DetailGoodsInfo"
import DetailParams from "./childComps/DetailParams"

import Scroll from "components/common/scroll/Scroll"

import { getDetail, Goods, GoodsParam } from "network/detail"

export default {
  data() {
    return {
      iid: null,
      topImages: [],
      goods: {},
      shopInfo: {},
      detailInfo: {},
      params: {},
    }
  },
  created() {
    // 1. 保存传入的 iid
    this.iid = this.$route.params.iid;

    // 2. 根据 iid 请求对应数据展示
    getDetail(this.iid).then((res) => {
      // 1. 获取顶部的图片轮播数据
      const data = res.result;
      // console.log('iid: ', res);

      console.log('网络请求发送成功', res);

      // 2. 取出轮播图数据
      this.topImages = res.result.itemInfo.topImages;

      // 3. 创建商品对象
      this.goods = new Goods(data.itemInfo, data.columns, data.shopInfo.services);

      // 4. 取出店铺的信息
      this.shopInfo = data.shopInfo;

      // 5. 保存商品的详情数据
      this.detailInfo = data.detailInfo;
      // 获取参数的值
      this.params = new GoodsParam(data.itemParams.info, data.itemParams.rule);

    })
  },
  methods: {
    imageLoad() {
      this.$refs.scroll.refresh();
    }
  },
  components: {
    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    DetailGoodsInfo,
    DetailParams,
    Scroll
  },
}
</script>


<style  scoped>
.detail {
  height: 100vh;
  background-color: #fff;
  position: relative;
  z-index: 1;
}
.content {
  background-color: #fff;
  height: calc(100% - 44px);
}
</style>
