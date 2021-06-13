<template>
  <div id="cart">
    <nav-bar class="nav-bar">
      <div slot="center" class="center">购物车({{cartLength}})</div>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar.vue'

import { mapGetters } from 'vuex'

export default {
  name: 'Cart',
  components: {
    NavBar
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
