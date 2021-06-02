<template>
  <div id="tab-bar">
    <slot></slot>
  </div>
</template>

<style scoped>
#tab-bar {
  display: flex;
  position: fixed;
  right: 0;
  left: 0;
  bottom: 0;

  z-index: 10;
}
</style>
