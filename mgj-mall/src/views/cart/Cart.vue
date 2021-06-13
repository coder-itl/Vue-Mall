<template>
  <div id="cart">
    <!-- 导航 -->
    <nav-bar class="nav-bar">
      <div slot="center" class="center">购物车({{cartLength}})</div>
    </nav-bar>
    <!-- 列表 -->
    <cart-list></cart-list>
    <!-- 底部汇总 -->
    <cart-bottom-bar></cart-bottom-bar>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'

import CartList from "./childComps/CartList"
import CartBottomBar from './childComps/CartBottomBar'

import { mapGetters } from 'vuex'

export default {
  name: 'Cart',
  components: {
    NavBar,
    CartList,
    CartBottomBar
  },
  data() {
    return {

    }
  },
  computed: {
    /* CartLength() {
      return this.$store.getters.cartLength
    } */
    ...mapGetters(['cartLength'])
  }
}

</script>

<style  scoped>
.nav-bar {
  background-color: pink;
}
.center {
  font-size: 20px;
  font-weight: 700;
  color: #fff;
}
</style>
