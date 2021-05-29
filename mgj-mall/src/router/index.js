import Vue from "vue"
import VueRouter from "vue-router"

// 路由懒加载
const Home = () => import('../components/home/Home');


// 安装插件 
Vue.use(VueRouter)

// 映射
const routes = [
    { path: '/', redirect: '/home' },
    { path: '/home', component: Home }
]

// 创建对象
const router = new VueRouter({
    mode: 'history',
    routes
})

// 导出
export default router