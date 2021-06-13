<template>
  <div class="bottom-bar">
    <div class="check-conetnt">
      <check-button class="check-button" :is-checked="isSelectAll" @click.native="chekClick"></check-button>
      <span>全选</span>
    </div>

    <!-- 合计  -->
    <div class="total">
      合计:{{totalPrice}}
    </div>

    <!-- 去计算 -->
    <div class="calcuate">
      <div class="gocalcuate">
        去计算({{checkedLength}})
      </div>
    </div>
  </div>
</template>

<script>
import CheckButton from "components/content/checkButton/CheckButton"
export default {
  name: 'CartBottomBar',
  components: { CheckButton },
  computed: {
    totalPrice() {
      return '￥' + this.$store.state.cartList.filter(item => {
        return item.checked
      }).reduce((preValue, item) => {
        return preValue + item.price * item.count
      }, 0).toFixed(2)
    },
    checkedLength() {
      return this.$store.state.cartList.filter(item => item.checked).length
    },
    isSelectAll() {
      if (this.getLength() === 0) {
        return false
      }
      return !this.$store.state.cartList.find(item => !item.checked)

    }

  },
  methods: {
    getLength() {
      return this.$store.state.cartList.length
    },
    getCartList() {
      return this.$store.state.cartList
    },
    chekClick() {
      //   console.log('点击');
      if (this.isSelectAll) {
        // 全部选中
        this.getCartList().forEach(item => item.checked = false)
      } else {
        this.getCartList().forEach(item => item.checked = true)
      }
    }
  }

}
</script>

<style  scoped>
.bottom-bar {
  position: fixed;
  bottom: 51px;
  left: 0;
  right: 0;

  height: 40px;
  line-height: 40px;
  display: flex;
  background-color: #eee;
}
.check-conetnt {
  display: flex;
  align-items: center;
}
.check-button {
  width: 20px;
  height: 20px;
  line-height: 20px;
  margin: 5px;
}
.total {
  margin-left: 40px;
  flex: 1;
}
.calcuate {
  margin-left: 50px;
  flex: 1;
}
.gocalcuate {
  background-color: deeppink;
  color: #eee;
  text-align: center;
}
</style>
