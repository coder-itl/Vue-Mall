<template>
  <div class="recommend">
    <div v-for="(item ,recommend) in recommends" :key="recommend" class="recommend-item">
      <a :href="item.link">
        <img :src="item.image" :alt="item.title">
        <div>{{item.title}}</div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "RecommendView",
  props: {
    recommends: {
      type: Array,
      default() {
        return []
      }
    }
  }
}
</script>

<style scoped>
.recommend {
  display: flex;
}

.recommend .recommend-item {
  flex: 1;
  width: 100%;
  text-align: center;
  font-size: 12px;

  padding: 10px 0 30px;
  border-bottom: 8px solid #eee;
}

.recommend .recommend-item img {
  width: 70px;
  height: 70px;
  margin-bottom: 10px;
}

.recommend .recommend-item a {
  text-decoration: none;
  color: #000;
}
.recommend .recommend-item a:hover {
  color: pink;
}
</style>