<template>
  <div class="cart-list">
    <scroll class="content" ref="scroll" :probe-type="3">
      <cart-list-item v-for="(item,index) in list" :key="index" :goods-item="item"></cart-list-item>
    </scroll>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

import CartListItem from './CartListItem'
import Scroll from "components/common/scroll/Scroll"

export default {
  name: 'CartList',
  components: {
    CartListItem,
    Scroll
  },
  data() {
    return {
      goodsItem: {}
    }
  },
  computed: {
    ...mapGetters({
      list: 'cartList'
    })
  },
  activated() {
    // console.log('--------------');
    this.$refs.scroll.refresh()
  }
}
</script>

<style  scoped>
.cart-list {
  height: calc(100% - 44px - 49px - 40px);
}
.content {
  height: 100%;
}
</style>
