<template>
  <div id="home">
    <!-- 底部导航: nav-bar -->
    <nav-bar class="home-nav">
      <div slot="center">
        <a href="https://github.com/coder-itl" class="aMgj">蘑菇街-Coder-Itl</a>
      </div>
    </nav-bar>

    <tab-control :titles="['流行', '新款', '精选']" class="tab-control" @tabClick="homeTabClick" ref="tabControll"
      v-show="isTabFixed">
    </tab-control>

    <!-- 
      轮播图: swiper
      使用props(父子组件通信): 
        子组件:
          props: {}
        父组件: :banners="banners"  
     -->
    <scroll class="content" ref="scroll" :probe-type="3" @scroll="contentScroll" :pull-up-load="true"
      @pullingUp="loadMore">
      <home-swiper :banners="banners" @swiperImageLoad="swiperImageLoad" />
      <!-- recommends: 组件 -->
      <recommend-view :recommends="recommends" />
      <!-- 图片列表组件 -->
      <feature-view></feature-view>
      <tab-control :titles="['流行', '新款', '精选']" @tabClick="homeTabClick" ref="tabControl">
      </tab-control>
      <goods-list :goods="showGoods"></goods-list>
      <router-view></router-view>
    </scroll>
    <!-- BackTop 组件 -->
    <back-top @click.native="backClick" v-show="isShowBackTop"></back-top>
  </div>
</template>

<script>
// 导入 NavBar 组件
import NavBar from "components/common/navbar/NavBar"

import HomeSwiper from "./childComps/HomeSwiper"
import RecommendView from "./childComps/RecommendView"
import FeatureView from "./childComps/FeatureView"

import TabControl from "components/content/tabControl/TabControl"
import GoodsList from "components/content/goods/GoodsList"
import Scroll from "components/common/scroll/Scroll"

// 导入 Home.vue 面向的 home.js
import { getHomeMultidata, getHomeGoods } from "network/home"

import { itemListenerMinix, backTopMixin } from "common/mixin"

export default {
  components: {
    NavBar,
    HomeSwiper,
    RecommendView,
    FeatureView,
    TabControl,
    GoodsList,
    Scroll
  },

  data() {
    return {
      banners: [], // 默认值为: []
      recommends: [],
      // 商品数据模型
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] }
      },
      // 保存数据类型
      currentType: 'pop', // 第一次为 pop 类型
      isShowBackTop: false,// 默认 false-> 隐藏，true-> 显示
      tabOffsetTop: 0, // offsetTop 偏移量存储
      isTabFixed: false, // 是否吸顶
      saveY: 0
    }
  },
  mixins: [itemListenerMinix, backTopMixin],
  // 生命周期函数: 组件创造后立刻进行首页数据请求
  created() {
    // 请求多个调用 可以使用 promise 是因为封装的时候 return instsnce属于promise，在这里获取结果就可以使用 then()
    this.getHomeMultidata()

    // 请求商品数据
    this.getHomeGoods('pop')
    this.getHomeGoods('new')
    this.getHomeGoods('sell')

    // 手动代码点击一次
    // this.homeTabClick(0);

  },

  methods: {
    homeTabClick(index) {
      // console.log(index);
      switch (index) {
        case 0:
          this.currentType = 'pop';
          break;
        case 1:
          this.currentType = 'new';
          break;
        case 2:
          this.currentType = 'sell';
          break;
      }
      // 对两个 tabcontrol 进行统一
      if (this.$refs.tabControll !== undefined) {
        this.$refs.tabControll.currentIndex = index;
        this.$refs.tabControl.currentIndex = index;
      }
    },

    // scroll 输出封装
    contentScroll(position) {
      // console.log(position);
      // 1. 判断backtop 是否显示
      this.isShowBackTop = (-position.y) > 1000;
      // 2. 决定 tabControl 是否吸顶(position:fixed)
      this.isTabFixed = (-position.y) > this.tabOffsetTop;
    },

    // 上拉加载更多
    loadMore() {
      // alert('Home Load More'); currentType 记录选中类型
      this.getHomeGoods(this.currentType)
    },
    // 监听轮播图加载函数 
    swiperImageLoad() {
      // 获取 tabControl 的 offsetTop 
      this.tabOffsetTop = this.$refs.tabControl.$el.offsetTop;
    },
    /*
    * 网络请求清关的方法
    */
    // 首页多个数据请求封装
    getHomeMultidata() {
      getHomeMultidata().then((res) => {
        // console.log('数据测试: 成功调用该函数', res);
        this.banners = res.data.banner.list;
        this.recommends = res.data.recommend.list;
      })
    },

    getHomeGoods(type) {
      // 动态获取
      const page = this.goods[type].page + 1;

      getHomeGoods(type, page).then((res) => {
        // console.log('获取商品数据: ', res);
        // 需要将数据 push 新问题: 如何将一个数组存放到另一个数组？ 
        this.goods[type].list.push(...res.data.list);
        this.goods[type].page += 1;

        // 完成上拉加载更多
        this.$refs.scroll.finishPullUp();
      })
    }
  },

  activated() {
    // 0,y,time
    /*  this.$refs.scroll.scrollTo(0, this.saveY, 0);
     this.$refs.scroll.refresh(); */
    if (this.$refs.scroll) {
      this.$refs.scroll.scrollTo(0, this.saveY, 0);
      this.$refs.scroll.refresh();
    }
  },
  deactivated() {
    // 1. 保存 Y 值
    this.saveY = this.$refs.scroll.getScrollY();
    // 2. 取消全局事件监听 【TODO: 为什么要取消全局事件监听】
    this.$bus.$off('itemImgLoad', this.itemImgListener)
  },


  computed: {
    /*
    *  1. 再将 goods 简化
    *  2. 计算属性中获取变量需要前缀 this 
    */
    showGoods() {
      return this.goods[this.currentType].list
    }
  }


};
</script>

<style scoped>
#home {
  position: relative;
  height: 100vh;
}
.home-nav {
  color: #fff;
  background-color: pink;
}
/* update: 吸顶问题  */
.tab-control {
  position: relative;
  z-index: 9;
}

.content {
  /* height: calc(100% - 93px); */
  overflow: hidden;

  position: absolute;
  top: 44px;
  bottom: 49px;
  left: 0;
  right: 0;
}
.aMgj {
  text-decoration: none;
  color: #fff;
  font-weight: 700;
}

.aMgj:hover {
  color: palevioletred;
}
</style>