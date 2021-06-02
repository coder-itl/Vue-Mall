<template>
  <div class="tab-control">
    <div v-for="(item,index) in titles" :key="index" class="tab-control-item" :class="{active:index===currentIndex}"
      @click="tabClick(index)">
      <span>{{item}}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    titles: {
      type: Array,
      default() {
        return []
      }
    }
  },
  data() {
    return {
      currentIndex: 0
    }
  },
  methods: {
    tabClick(index) {
      this.currentIndex = index;
    }
  }
}
</script>

<style  scoped>
.tab-control {
  display: flex;

  height: 40px;
  line-height: 40px;
  font-size: 15px;
  text-align: center;
  /*TODO: 控制吸顶效果的临时背景颜色 */
  background-color: #fff;
}
.tab-control-item {
  flex: 1;
}

.tab-control-item span {
  padding: 5px;
}
.active {
  color: deeppink;
}
.active span {
  /* 下划线 */
  border-bottom: 3px solid deeppink;
}
</style>

