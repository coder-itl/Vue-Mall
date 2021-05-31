<template>
  <div id="app">
    <main-tab-bar />
    <router-view></router-view>
  </div>
</template>

<script>
import MainTabBar from "components/content/mainTabBar/MainTabBar";
export default {
  name: "App",
  data() {
    return {};
  },
  components: {
    MainTabBar,
  },
};
</script>

<style>
@import "assets/css/base.css";
</style>
