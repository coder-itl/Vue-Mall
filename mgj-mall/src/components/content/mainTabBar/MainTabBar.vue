<template>
  <tab-bar>
    <tab-bar-item path="/home">
      <img src="~assets/image/tabbar/shouye.png" alt="" slot="item-icon">
      <img src="~assets/image/tabbar/alive-shouye.png" alt="" slot="item-active-icon">
      <div slot="item-text"> 首页</div>
    </tab-bar-item>
    <tab-bar-item path="/categories">
      <img src="~assets/image/tabbar/fenlei.png" alt="" slot="item-icon">
      <img src="~assets/image/tabbar/alive-fenlei.png" alt="" slot="item-active-icon">
      <div slot="item-text">分类</div>
    </tab-bar-item>
    <tab-bar-item path="/cart">
      <img src="~assets/image/tabbar/gouwuchekong.png" alt="" slot="item-icon">
      <img src="~assets/image/tabbar/alive-gouwuchekong.png" alt="" slot="item-active-icon">
      <div slot="item-text">购物车</div>
    </tab-bar-item>
    <tab-bar-item path="/profile">
      <img src="~assets/image/tabbar/wode.png" alt="" slot="item-icon">
      <img src="~assets/image/tabbar/alive-wode.png" alt="" slot="item-active-icon">
      <div slot="item-text">我的</div>
    </tab-bar-item>
  </tab-bar>
</template>

<script>
import TabBar from "common/tabbar/TabBar";
import TabBarItem from "common/tabbar/TabBarItem";

export default {
  components: {
    TabBar,
    TabBarItem,
  },
};
</script>