<template>
  <div id="home">
    <h1>Home Router</h1>
    路由跳转该如何实现？
    <router-link to="/test"> Test 数据测试 </router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "Home",
  components:{
    
  }
};
</script>