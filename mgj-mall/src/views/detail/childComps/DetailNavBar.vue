<template>
  <div>
    <nav-bar>
      <div slot="left" class="back" @click="backClick"><img src="~assets/image/common/back.svg" alt=""> </div>
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
    },
    // 返回按钮的点击事件
    backClick() {
      // 其他写法 go(-1)
      this.$router.back();
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

.back {
  font-family: "Times New Roman", Times, serif;
  font-size: 40px;
  font-weight: bold;
}
</style>
