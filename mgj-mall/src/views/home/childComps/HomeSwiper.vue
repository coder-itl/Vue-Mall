<template>
  <!-- 轮播图: swiper -->
  <swiper>
    <swiper-item v-for="(item,swiper) in banners" :key="swiper">
      <a :href="item.link">
        <img :src="item.image" alt="">
      </a>
    </swiper-item>
  </swiper>
</template>


<script>
// 导入轮播图组件 TODO: 结构化需要理解
import { Swiper, SwiperItem } from "components/common/swiper"


export default {
  name: 'HomeSwiper',
  // 父子组件通信
  props: {
    banners: {
      type: Array, // 类型数组
      default() {
        return [] // 默认值为函数: 返回 []
      }
    }
  },
  components: {
    Swiper,
    SwiperItem
  }
}
</script>

