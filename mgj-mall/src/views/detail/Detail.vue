<template>
  <div class="detail">
    <detail-nav-bar @titleClick="titleClick" ref="nav"></detail-nav-bar>
    <scroll class="content" ref="scroll" @scroll="contentScroll" :probe-type="3">
      <detail-swiper :top-images="topImages"></detail-swiper>
      <detail-base-info :goods="goods"></detail-base-info>
      <detail-shop-info :shop="shopInfo"></detail-shop-info>
      <detail-goods-info :detail-info="detailInfo" @imageLoad="imageLoad"></detail-goods-info>
      <detail-params :goods-params="goodsParams" ref="params"></detail-params>
      <detail-comment-info :comment-info="commentInfo" ref="comment"></detail-comment-info>
      <goods-list :goods="recommends" ref="recommend"></goods-list>
    </scroll>

    <detail-bottom-bar @addCart="addToCart"></detail-bottom-bar>
    <back-top @click.native="backClick" v-show="isShowBackTop"></back-top>
  </div>
</template>

<script>
import DetailNavBar from "./childComps/DetailNavBar"
import DetailSwiper from "./childComps/DetailSwiper"
import DetailBaseInfo from "./childComps/DetailBaseInfo"
import DetailShopInfo from "./childComps/DetailShopInfo"
import DetailGoodsInfo from "./childComps/DetailGoodsInfo"
import DetailParams from "./childComps/DetailParams"
import DetailCommentInfo from './childComps/DetailCommentInfo'
import DetailBottomBar from './childComps/DetailBottomBar'

import Scroll from "components/common/scroll/Scroll"
import GoodsList from "components/content/goods/GoodsList"

import { getDetail, Goods, getRecommend } from "network/detail"

import { debouce } from "common/utils"
import { itemListenerMinix, backTopMixin } from "common/mixin"


export default {
  data() {
    return {
      iid: null,
      topImages: [],
      goods: {},
      shopInfo: {},
      detailInfo: {},
      themeTopYs: [],
      getThemeTopY: null,
      goodsParams: {},
      commentInfo: {},
      recommends: [],
      currentIndex: 0
    }
  },
  // 混入初次使用
  mixins: [itemListenerMinix, backTopMixin],
  components: {
    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    DetailGoodsInfo,
    DetailParams,
    DetailCommentInfo,
    GoodsList,
    DetailBottomBar,
    Scroll
  },
  created() {
    // 1. 保存传入的 iid
    this.iid = this.$route.params.iid;

    // 2. 请求详情数据
    getDetail(this.iid).then((res) => {
      // 1. 获取顶部的图片轮播数据
      const data = res.result;
      console.log('数据信息: ', data);

      // 2. 取出轮播图数据
      this.topImages = res.result.itemInfo.topImages;

      // 3. 创建商品对象
      this.goods = new Goods(data.itemInfo, data.columns, data.shopInfo.services);

      // 4. 取出店铺的信息
      this.shopInfo = data.shopInfo;

      // 5. 保存商品的详情数据
      this.detailInfo = data.detailInfo;

      // 6. 获取参数的值
      this.goodsParams = data.itemParams;

      // 7. 取出评论的信息 【有的存在评论信息，有的不存在评论信息 进行判断过滤】 data.rate.cRate != 0 即为存在数据
      if (data.rate.cRate !== 0) {
        this.commentInfo = data.rate.list[0];
        console.log('commentInfo data: ', this.commentInfo);
      }




    });

    // 3. 请求推荐数据
    getRecommend().then((res) => {
      console.log('请求推荐数据: ', res);
      this.recommends = res.data.list;
    });

    // 4. 给 getThemeTopY 赋值
    this.getThemeTopY = debouce(() => {
      this.themeTopYs.push(0), // 商品offsetTop
        this.themeTopYs.push(this.$refs.params.$el.offsetTop), //  参数offsetTop
        this.themeTopYs.push(this.$refs.comment.$el.offsetTop), // 评论的 offsetTop
        this.themeTopYs.push(this.$refs.recommend.$el.offsetTop),// 推荐offsetTop
        this.themeTopYs.push(Number.MAX_VALUE)
    });


  },
  methods: {
    imageLoad() {
      this.$refs.scroll.refresh();
      // 根据 index 跳转到对应位置
      this.getThemeTopY();
    },
    titleClick(index) {
      console.log('title index', index);
      // 使用 scrollTo(实现滚动)
      this.$refs.scroll.scrollTo(0, -this.themeTopYs[index], 500);
    },
    // 监听滚动
    contentScroll(position) {
      let positionY = -position.y;
      let length = this.themeTopYs.length;
      //hack做法，
      for (let i = 0; i < length; i++) {
        if (this.currentIndex !== i && positionY >= this.themeTopYs[i] && positionY < this.themeTopYs[i + 1]) {
          this.currentIndex = i;
          this.$refs.nav.currIndex = this.currentIndex;
        }
      }
      // 是否显示backTop图标
      this.isShowBackTop = positionY > 1000;
    },
    // 点击加入购物车
    addToCart() {
      // console.log('接收到子组件发送的自定义事件');
      // 1. 获取购物车需要展示的信息
      const product = {};
      product.image = this.topImages[0];
      product.title = this.goods.title;
      product.desc = this.goods.desc;
      product.price = this.goods.realPrice;
      product.iid = this.iid;
      // 2. 将商品添加到购物车里
      this.$store.dispatch('addCart', product);
    }

  },
  destroyed() {
    this.$bus.$off('itemImgLoad', this.itemImgListener)
  }
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
