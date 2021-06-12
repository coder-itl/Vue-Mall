<template>
  <div class="bottom-bar">
    <div class=" bar-item bottom-left">
      <div>
        <i class="icon service"></i>
        <span class="text">客服</span>
      </div>
      <div>
        <i class="icon shop"></i>
        <span class="text">店铺</span>
      </div>
      <div>
        <i class="icon collect"></i>
        <span class="text">收藏</span>
      </div>
    </div>
    <div class="bar-item bar-right">
      <div class="cart" @click="addToCart">加入购物车</div>
      <div class="buy">购买</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailBottomBar',
  methods: {
    // 点击加入购物车
    addToCart() {
      // console.log('已添加入购物车');
      // TODO: 这个事件为什么要发送出去
      this.$emit('addCart');
    }
  },
}
</script>

<style scoped>
.bottom-bar {
  position: fixed;
  margin-top: 0;
  padding: 0;

  left: 0;
  right: 0;
  bottom: 0;

  height: 58px;
  width: 100%;

  display: flex;
  background-color: #fff;
  z-index: 1000;

  box-shadow: 0 0 1px gray;
}
.bar-item {
  flex: 1;
  display: flex;
}
.bar-item > div {
  flex: 1;
  text-align: center;
}
.bar-item .text {
  font-size: 13px;
}
.bar-item .icon {
  display: block;
  width: 22px;
  height: 22px;
  margin: 5px auto 3px;
  background: url(~@/assets/image/detail/detail_bottom.png) 0 0/100%;
}
.bar-item .service {
  background-position: 0 -52px;
}
.bar-item .shop {
  background-position: 0 -98px;
}
.bar-right {
  font-size: 15px;
  color: #fff;
  line-height: 58px;
}
.bar-right .cart {
  background: #ffe817;
  color: #333;
}
.bar-right .buy {
  background: #f69;
}
</style>