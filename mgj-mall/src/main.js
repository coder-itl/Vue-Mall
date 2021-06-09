import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 图片懒加载插件
import VueLazyLoad from 'vue-lazyload'

Vue.config.productionTip = false

// 事件总线定义
Vue.prototype.$bus = new Vue()
// 使用懒加载
Vue.use(VueLazyLoad, {
  loading:
    'https://cdn.jsdelivr.net/gh/lovobin/FileJsDeliver@v1.1.13/gif/1.gif',
})

new Vue({
  render: (h) => h(App),
  router,
  store,
}).$mount('#app')
