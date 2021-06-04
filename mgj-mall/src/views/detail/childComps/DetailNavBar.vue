<template>
  <div>
    <nav-bar>
      <!--   <div slot="left" class="left"> &lt; </div> -->
      <div slot="center" class="title">
        <div v-for="(item,index) in titles" :key="index" :class="{active:index===currIndex}" class="title-item"
          @click="titleClick(index)">{{item}}
        </div>
      </div>
    </nav-bar>

  </div>

</template>

<script>
import NavBar from "components/common/navbar/NavBar"

export default {
  name: 'DetailNavBar',
  components: {
    NavBar
  },
  data() {
    return {
      titles: ['商品', '参数', '评论', '推荐'],
      currIndex: 0
    }
  },
  methods: {
    titleClick(index) {
      // 获取详情页 选项卡点击事件
      this.currIndex = index;
    }
  }
}
</script>

<style  scoped>
.title {
  display: flex;
  font-size: 14px;
}
.title-item {
  flex: 1;
}
.active {
  color: pink;
}

.left {
  font-family: "Times New Roman", Times, serif;
  font-size: 40px;
  font-weight: bold;
}
</style>
