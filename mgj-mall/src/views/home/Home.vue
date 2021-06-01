<template>
  <div id="home">
    <router-view></router-view>
    <!-- 底部导航: nav-bar -->
    <nav-bar class="home-nav">
      <div slot="center">购物街</div>
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
  </div>
</template>

<script>
// 导入 NavBar 组件
import NavBar from "components/common/navbar/NavBar"
import HomeSwiper from "./childComps/HomeSwiper"
import RecommendView from "./childComps/RecommendView"

// 导入 Home.vue 面向的 home.js
import { getHomeMultidata } from "network/home"

export default {
  components: {
    NavBar,
    HomeSwiper,
    RecommendView
  },
  data() {
    return {
      banners: [], // 默认值为: []
      recommends: []
    }
  },
  // 生命周期函数: 组件创造后立刻进行首页数据请求
  created() {
    console.log('函数调用中···········');
    // 请求多个调用 可以使用 promise 是因为封装的时候 return instsnce属于promise，在这里获取结果就可以使用 then()
    getHomeMultidata().then((res) => {
      console.log('数据测试: 成功调用该函数', res);
      this.banners = res.data.banner.list;
      this.recommends = res.data.recommend.list;
    })
  }
};
</script>

<style scoped>
.home-nav {
  color: #fff;
  background-color: pink;
}
</style>