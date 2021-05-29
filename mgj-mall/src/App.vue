<template>
  <div id="app">
    <router-link :to="/home/+userId"> 动态路由测试 </router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
  data(){
    return {
      userId: "TestId"
    }
  },
  components: {},
};
</script>

<style></style>
