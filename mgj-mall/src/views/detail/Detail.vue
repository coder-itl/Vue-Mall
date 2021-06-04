<template>
  <div id="detail">
    <router-view></router-view>
    <detail-nav-bar></detail-nav-bar>
  </div>
</template>

<script>
import DetailNavBar from "./childComps/DetailNavBar"
export default {
  data() {
    return {
      iid: null
    }
  },
  created() {
    this.iid = this.$route.params.iid;
    console.log('detail create');
  },
  components: {
    DetailNavBar
  },
}
</script>

<style  scoped>
</style>
