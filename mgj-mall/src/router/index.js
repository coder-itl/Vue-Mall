import Vue from 'vue';
import VueRouter from 'vue-router';

// 路由懒加载
const Home = () => import('../components/home/Home');

// 安装插件
Vue.use(VueRouter);

// 映射
const routes = [
  { path: '/', redirect: '/home' },
  {
    path: '/home',
    component: Home,
    meta: {
      title: '首页',
    },
  },
];

// 创建对象
const router = new VueRouter({
  mode: 'history',
  routes,
});

// 全局导航首位 实现跳转时更换 title 功能
router.beforeEach((to, from, next) => {
  document.title = to.matched[0].meta.title;
  next();
});
// 导出
export default router;
