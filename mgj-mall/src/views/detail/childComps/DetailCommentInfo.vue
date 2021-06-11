<template>
  <div class="comment-info" v-if="Object.keys(commentInfo).length!==0">
    <div class="info-header">
      <div class="header-title">用户评价</div>
      <div class="header-more">更多></div>
    </div>
    <div class="info-content">
      <div>
        <div class="user">
          <span>
            <img :src="commentInfo.user.avatar" alt="avatar">
          </span>
          <span class="name">{{commentInfo.user.uname}}</span>
        </div>
        <div class="comment-detail">
          <div class="desc">{{commentInfo.content}}</div>
          <div class="other">
            <span class="date">{{commentInfo.created | showDate}}</span>
            <span class="color">{{commentInfo.style}}</span>
          </div>
          <div class="comment-img">
            <img v-for="(item, index) in commentInfo.images" :key="index" :src="item" alt="avatar">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { formatDate } from "common/utils"

export default {

  name: 'DetailCommentInfo',
  props: {
    commentInfo: {
      type: Object,
      default() {
        return {};
      }
    }
  },

  filters: {
    showDate(value) {
      // 1. 将时间戳转换为 date 对象
      const date = new Date(value * 1000);
      // 2. 将 date 进行格式化
      return formatDate(date, 'yyyy-MM-dd hh:mm:ss')
    }
  }
}
</script>

<style scoped>
.comment-info {
  padding: 8px 8px 20px;
  border-bottom: solid 4px rgba(100, 100, 100, 0.1);
}
.info-header {
  padding: 10px 0;
  display: flex;
  justify-content: space-between;
  border-bottom: 2px solid rgba(100, 100, 100, 0.1);
}
.info-content {
  margin-top: 8px;
}
.info-content .user img {
  width: 50px;
  height: 50px;
  border-radius: 50%;
}
.info-content .user .name {
  position: relative;
  top: -15px;
  left: 8px;
}
.comment-detail .desc {
  padding: 4px;
  text-indent: 2em;
  line-height: 26px;
  color: rgb(78, 78, 78);
}
.comment-detail .other {
  color: rgb(78, 78, 78);
  padding-top: 4px;
}
.comment-detail .other span {
  padding: 4px;
}
.comment-detail .comment-img {
  display: flex;
  padding-top: 4px;
}
.comment-img img {
  width: 25%;
  padding-right: 6px;
}
</style>