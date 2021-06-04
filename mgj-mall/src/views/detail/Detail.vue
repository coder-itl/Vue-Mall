<template>
  <div>
    <h1> Detail page </h1>
  </div>
</template>

<script>
export default {
  data() {
    return {
      iid: null
    }
  },
  created() {
    this.iid = this.$route.params.iid;
    console.log('detail create');
  },
  components: {},
}
</script>

<style  scoped>
</style>
