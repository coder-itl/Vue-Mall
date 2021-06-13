<template>
  <div class="check-button" :class="{check:isChecked}">
    <img src="~assets/image/cart/tick.svg" alt="">
  </div>
</template>

<script>
export default {
  name: 'CheckButton',
  props: {
    isChecked: {
      type: Boolean,
      default: false
    }
  },
  components: {},
}
</script>

<style  scoped>
.check-button {
  border-radius: 50%;
  width: 16px;
  height: 16px;
  border: 2px solid #aaa;
}
.check {
  border-color: red;

  background-color: red;
}
</style>
