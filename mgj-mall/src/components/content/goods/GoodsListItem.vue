<template>
  <div class="goods-list-item" @click="itemClick">
    <img v-lazy="showImage" alt="" @load="imageLoad">
    <div class="goods-info">
      <p>{{goodsItem.title}}</p>
      <span class="price"> {{ goodsItem.price }}</span>
      <span class="collect"> {{ goodsItem.cfav }}</span>
    </div>
  </div>
</template>


<style scoped>
.goods-list-item {
  padding-bottom: 40px;
  position: relative;
  width: 48%;
}
.goods-list-item img {
  width: 100%;
  border-radius: 5px;
}
.goods-info {
  font-size: 12px;
  position: absolute;
  bottom: 5px;
  left: 0;
  right: 0;
  overflow: hidden;
  text-align: center;
}
.goods-info p {
  overflow: hidden;
  /* 文字属性 */
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-bottom: 3px;
}
.goods-info .price {
  color: pink;
  margin-right: 20px;
}
.goods-info .collect {
  position: relative;
}
.goods-info .collect::before {
  content: "";
  position: absolute;
  left: -15px;
  top: -1px;
  width: 14px;
  height: 14px;
  background: url("~assets/image/common/collect.svg") 0 0/14px 14px;
}
</style>



<script>
export default {
  props: {
    goodsItem: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  methods: {
    imageLoad() {
      // 发射一个事件总线事件 itemImageLoad
      this.$bus.$emit('itemImageLoad');

      /*
        TODO: 优化事件 
          方法一:  
        if (this.$route.path.indexOf('/home')) {
          this.$bus.$emit('homeItemImageLoad')
        } else if (this.$route.path.indexOf('/detail')) {
          this.$bus.$emit('detailItemImageLoad')
        }
      */


    },
    // 跳转详情图片 所以为 itemClick
    itemClick() {
      //  console.log('item image click'); 详情页跳转
      this.$router.push('/detail/' + this.goodsItem.iid);
    }
  },

  computed: {
    showImage() {
      return this.goodsItem.image || this.goodsItem.show.img;
    }
  }
}
</script>