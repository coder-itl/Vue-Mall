<template>
  <div class="detail-params" v-if="Object.keys(params).length !== 0">
    <div class="ruler">
      <table>
        <tr v-for="items in params.rule.tables[0]" :key="items">
          <td v-for="item in items" :key="item">{{item}}</td>
        </tr>
      </table>
    </div>
    <div class="info">
      <table>
        <tr v-for="info in params.info.set" :key="info">
          <td class="info-key">{{info.key}}</td>
          <td class="info-value">{{info.value}}</td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    params: {
      type: Object,
      default() {
        return {}
      }
    }
  }
}
</script>

<style scoped>
.detail-params {
  padding-top: 20px;
  padding-bottom: 20px;
  border-bottom: 5px solid #eee;
}
.ruler table {
  width: 100%;
  text-align: center;
  border-collapse: collapse;
  font-size: 14px;
}
.ruler table tr {
  height: 38px;
}
.ruler table tr td {
  border-bottom: 1px solid rgb(204, 195, 195);
}
.info {
  border-top: 1px solid rgb(88, 86, 86);
  padding-top: 15px;
}
.info table {
  width: 100%;
  border-collapse: collapse;
  font-size: 16px;
}
.info table tr td {
  height: 30px;
  border-bottom: 1px solid rgb(204, 195, 195);
}
.info-key {
  width: 90px;
  text-align: center;
}
.info-value {
  color: rgb(228, 25, 25);
}
</style>