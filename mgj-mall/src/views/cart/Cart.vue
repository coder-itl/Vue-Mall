<template>
  <div class="cart">
    <nav-bar class="nav-bar">
      <div slot="center" class="center">购物车({{count}})</div>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from '../../components/common/navbar/NavBar.vue'

export default {
  name: 'Cart',
  components: {
    NavBar
  },
  data() {
    return {
      count: 0
    }
  }
}

NavBar</script>

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
