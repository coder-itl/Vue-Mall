<template>
  <div id="home">
    <router-view></router-view>
    <!-- 底部导航: nav-bar -->
    <nav-bar class="home-nav">
      <div slot="center">Vue-框架学习项目案例</div>
    </nav-bar>

    <!-- 
      轮播图: swiper
      使用props(父子组件通信): 
        子组件:
          props: {}
        父组件: :banners="banners"  
     -->
    <home-swiper :banners="banners" />
    <!-- recommends: 组件 -->
    <recommend-view :recommends="recommends" />
    <!-- 图片列表组件 -->
    <feature-view></feature-view>
    <tab-control :titles="['流行', '新款', '精选']" class="tab-control" @tabClick="homeTabClick"></tab-control>
    <goods-list :goods="showGoods"></goods-list>
    <!-- 临时测试数据 -->

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

// 导入 Home.vue 面向的 home.js
import { getHomeMultidata, getHomeGoods } from "network/home"

export default {
  components: {
    NavBar,
    HomeSwiper,
    RecommendView,
    FeatureView,
    TabControl,
    GoodsList
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
      currentType: 'pop' // 第一次为 pop 类型
    }
  },
  // 生命周期函数: 组件创造后立刻进行首页数据请求
  created() {
    // 请求多个调用 可以使用 promise 是因为封装的时候 return instsnce属于promise，在这里获取结果就可以使用 then()
    this.getHomeMultidata()

    // 请求商品数据
    this.getHomeGoods('pop')
    this.getHomeGoods('new')
    this.getHomeGoods('sell')

  },
  methods: {

    /*
    * 事件监听相关的方法
    */

    homeTabClick(index) {
      console.log('$emit事件获取监听');
      console.log(index);
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
    },

    /*
    * 网络请求清关的方法
    */
    // 首页多个数据请求封装
    getHomeMultidata() {
      getHomeMultidata().then((res) => {
        console.log('数据测试: 成功调用该函数', res);
        this.banners = res.data.banner.list;
        this.recommends = res.data.recommend.list;
      })
    },

    getHomeGoods(type) {
      // 动态获取
      const page = this.goods[type].page + 1;

      getHomeGoods(type, page).then((res) => {
        console.log('获取商品数据: ', res);
        // 需要将数据 push 新问题: 如何将一个数组存放到另一个数组？ 
        this.goods[type].list.push(...res.data.list);
        this.goods[type].page += 1;
      })
    }
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
  padding-top: 44px;
}
.home-nav {
  color: #fff;
  background-color: pink;
  /* 固定顶部导航 */
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 9;
}
.tab-control {
  position: sticky;
  top: 44px;
  z-index: 9;
}
</style>