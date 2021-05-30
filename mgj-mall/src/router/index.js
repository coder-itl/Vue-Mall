import Vue from 'vue'
import VueRouter from 'vue-router'

// 路由懒加载
const Home = () => import('../views/home/Home.vue')
const Categories = () => import('../views/categories/Categories.vue')
const Cart = () => import('../views/cart/Cart.vue')
const Profile = () => import('../views/profile/Profile.vue')

// 安装插件
Vue.use(VueRouter)

// 映射
const routes = [
  {
    path: '/',
    redirect: '/home',
  },
  {
    path: '/home',
    component: Home,
    meta: {
      title: '首页',
    },
  },
  {
    path: '/categories',
    component: Categories,
    meta: {
      title: '分类',
    },
  },

  {
    path: '/cart',
    component: Cart,
    meta: {
      title: '购物车',
    },
  },

  {
    path: '/profile',
    component: Profile,
    meta: {
      title: '我的',
    },
  },
]

// 创建对象
const router = new VueRouter({
  mode: 'history',
  routes,
})

// 全局导航首位 实现跳转时更换 title 功能
router.beforeEach((to, from, next) => {
  document.title = to.matched[0].meta.title
  next()
})
// 导出
export default router
