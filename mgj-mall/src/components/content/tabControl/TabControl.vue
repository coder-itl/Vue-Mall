<template>
  <div class="tab-control">
    <div v-for="(item,index) in titles" :key="index" class="tab-control-item" :class="{active:index===currentIndex}"
      @click="itemClick(index)">
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
    itemClick(index) {
      this.currentIndex = index;
      // 自定义事件: 子传父 this.$emit()
      this.$emit('tabClick', index)
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
  z-index: 9;
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

