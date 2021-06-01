<template>
  <div id="home">
    <router-view></router-view>
    <nav-bar class="home-nav">
      <div slot="center">购物街</div>
    </nav-bar>
    <swiper>

    </swiper>
  </div>
</template>

<script>
// 导入 NavBar 组件
import NavBar from "components/common/navbar/NavBar"
// 导入 Home.vue 面向的 home.js
import { getHomeMultidata } from "network/home"
// 导入轮播图组件 TODO: 结构化需要理解
import { Swiper, SwiperItem } from "components/common/swiper"

export default {
  components: {
    NavBar,
    Swiper,
    SwiperItem
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
      console.log(res);
      console.log('在进入');
      this.banners = res.data.banner.list;
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