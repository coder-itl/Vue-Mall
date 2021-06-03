### Vue 项目文档

- 项目拉取

  ```bash
  git clone -b develop https://github.com/coder-itl/Vue-Mall.git
  ```

- 启动项目

  ```javascript
  // 进入主目录
  cd mgj-mall
  // 安装项目依赖
  npm install
  // 启动服务
  npm rum serve

  // 打包
  npm run dev

  ```

### MGJ-Mall Day-01

- 项目结构划分

  <img src="https://gitee.com/wang_hong_bin/repo-bin/raw/master/supermall.png" width="400">

- `vue-cli 3`配置查看以及修改

  ```bash

  查看原配置: node_modules/@vue/cli-serve/webpack.config.js

  新增配置: 在项目根目录下创建文件 "vue.config.js"

  ```

- `VueRouter`使用

  ```javascript
  /*
  	1. 安装模块 npm install --save vue-router
  	2. 在 src 目录下新建文件夹 router,再在该文件夹下新建 "index.js" 文件
  	3. 在 main.js 中引入 router，注册
  	4. 注意: routes 名称
  */

  index.js(路由基础使用):
  -----------------------------------------------------------
      import Vue from "vue"
      import VueRouter from "vue-router"

      // 路由懒加载
      const Home = () => import('../components/home/Home');
  ```
  
  ```javascript
  // 安装插件
    Vue.use(VueRouter)
  
    // 映射
    const routes = [
        { path: '/', redirect: '/home' },
        // { path: '/home', component: Home } update: 2021-05-31 learn guild nav
        {
            path: '/home',
            component: Home,
            meta: {
              title: '首页',
            },
        },
    ]
  
    // 配置路由和组件之间的应用关系
    const router = new VueRouter({
        mode: 'history',
        routes
    })
  
    // 全局导航首位 实现跳转时更换 title 功能
    router.beforeEach((to, from, next) => {
      document.title = to.matched[0].meta.title;
      next();
    });
  
    // 将 router 对象传入到 Vue 实例中
    export default router
  ```
  
  

- 箭头函数

  ```javascript
  
  问题: 箭头函数中的 this 是如何查找的？
  
  答案: 向外层作用域,一层层查找 this ,直到有 this 的定义
  
  ```

- 前端渲染后端渲染和前端路由后端路由

  - 前端渲染

    ```javascript
    定义：指的是后端返回 JSON 数据，前端利用预先写的 html 模板，循环读取JSON数据，拼接字符串（es6的模板字符串特性大大减少了拼接字符串的的成本），并插入页面。

    优点: 网络传输数据量小。不占用服务端运算资源（解析模板），模板在前端（很有可能仅部分在前端），改结构变交互都前端自己来了，改完自己调就行。

    缺点: 前端耗时较多，对前端工作人员水平要求相对较高。前端代码较多，因为部分以前在后台处理的交互逻辑交给了前端处理。占用少部分客户端运算资源用于解析模板。

    ```

  - 后端渲染

    ```javascript
    定义： 前端请求，后端用后台模板引擎直接生成html，前端接受到数据之后，直接插入页面。

    优点: 前端耗时少，即减少了首屏时间，模板统一在后端。前端（相对）省事，不占用客户端运算资源（解析模板）

    缺点: 占用服务器资源。

    ```

  - 前端路由

    ```javascript
    定义: 在单页面应用,大部分页面结构不变,只改变部分内容的使用

    优点: 用户体验好，不需要每次都从服务器全部获取,快速展现给用户

    缺点: 使用浏览器的前进后退会重新发送请求,没有合理地利用缓存单页面无法记住之前滚动地位置，无法在前进，后退地时候记住滚动的位置

    ```

  - 后端路由

    ```javascript
    通过用户请求的 url 导航到具体的 html 页面,每跳转到不同的 URL，都是重新访问服务端,然后服务端返回页面,页面可以是服务端获取数据m然后和模板组合,返回 HTML ，也可以是直接返回模板 HTML ，然后由前端 JS 再去请求数据,使用前端模板和数据进行组合,生成想要的 HTML
    ```

- `hash`模式修改

  ```javascript
  const router = new VueRouter({
    mode: 'history', // 添加该配置即可在路径显示中去除 "#"
  })
  ```

- `router-link`的其他属性

  ```javascript
  <router-link to="/path" tag="tag-name[Eg. a -> button ]" active-class="class-name">  测试  </router-link>

  // 携带 query
   <router-link :to="{path:'/home',query:{key:value,···}}">   测试  </router-link>
  // 获取对应的query 值
  $route.query.key | $route.query[获取整个对象]
  ```

- `vue-router`打包解析

  ```javascript
  ...
  ```

- 路由懒加载

  ```javascript
  // 路由懒加载最新写法
  const Home = () => import('/home path')

  const routes = [
    {
      path: '/home',
      component: Home,
    },
  ]
  ```

- 路由嵌套

  ```javascript
  // 子路由
  const Home = () => import('/home path')

  const routes = [
    {
      path: '/home',
      component: Home,
      children: [
        {
          path: 'childrenRouter-path',
          component: ChildrenRouter,
        },
      ],
    },

    // 参数型
    {
      path:
        '/home/:homeId [:homeId 动态参数，router-link 的 to 需要同时携带相应的参数]',
    },
  ]

  // 注意: 子路由的 <router-view></router-view> 位置，注意区分父路由的 router-view ，子路由也可以添加重定向
  ```

- 全局导航守卫

  ```javascript
  1. 什么是导航守卫

  	vue-router提供的导航守卫主要用来通过跳转或取消的方式守卫导航。

  ```

  ```javascript
  官网了解更多关于导航守卫: 'https://router.vuejs.org/zh/guide/advanced/navigation-guards.html'
  ```



### MGJ-Mall Day-02

- 路径别名配置

  ```javascript
    vue.config.js:
      ------------------------------------------
      // 新增自定义配置文件
        module.exports = {
          configureWebpack: {
            resolve: {
              alias: {
                assets: '@/assets', // 静态资源路径别名
                common: '@/common',
                components: '@/components', // 组件别名
                views: '@/views',
                network: '@/network', // 网络封装
              },
            },
          },
        }
        ------------------------------------------
  ```

- 组件封装

  ```javascript
  1. 封装组件	TabBar
  2. 封装组件 TabBarItem
  3. 封装组件 MainTabBar
  ```

- 动态封装组件路由点击颜色

  ```javascript
  props: {
      path: String,
      // 动态封装组件路由点击颜色
      activeColor: {
        type: String,
        default: "red",
      },
    },

    computed:{
         activeStyle() {
        		return this.isActive ? { color: this.activeColor } : {};
      	},
    }
  ```

  <img src="https://gitee.com/wang_hong_bin/repo-bin/raw/master/coderwhyLVue.gif" width="400">

- `axios`基础封装使用

  ```javascript
  import axios from 'axios'

  export function request(config) {
    // 1.创建axios的实例
    const instance = axios.create({
      baseURL: 'http://123.207.32.32:8000',
      timeout: 5000,
    })

    // 2.axios的拦截器
    // 2.1.请求拦截的作用
    instance.interceptors.request.use(
      (config) => {
        return config
      },
      (err) => {
        // console.log(err);
      },
    )

    // 2.2.响应拦截
    instance.interceptors.response.use(
      (res) => {
        return res.data
      },
      (err) => {
        console.log(err)
      },
    )

    // 3.发送真正的网络请求
    return instance(config)
  }
  ```

- 封装`axios`前期出现`bug`,已经更正,成功请求首页轮播图数据

  <img src="https://gitee.com/wang_hong_bin/repo-bin/raw/master/vueaxiosBug.png">



### MGJ-Mall Day-03

- `TabControl`产生小`BUG`

  <img src="https://gitee.com/wang_hong_bin/repo-bin/raw/master/VuetitlesBug.png">

  - 首先查看了书写过程,起初没检查出有效信息,进行了版本回退

    ```bash
    # 查看提交日志
    git log --pretty=oneline
    # 进行版本回退
    git reset --hard commit-id

    # 发现回退错误,又进行未来版本回退
    git reflog

    ```

  - 最终解决方案

    ```javascript
    在经过仔细阅读代码后,发现在 tabControl.vue 文件中多了一个空白的 script 标签,导致 props 的 titles属性无法被父组件获取

    解决方案:
    	删除 script 标签

    ```

- 商品数据展示模型

  ```javascript
   goods: {
          'pop': { page: 0, list: [] },
          'new': { page: 0, list: [] },
          'sell': { page: 0, list: [] }
        }
  ```

- 如何将一个数组存放到另一个数组？

  - 循环
  - `...数组名`

- 文字样式使用

  ```css
  /* 文字属性 */
  text-overflow: ellipsis; /* 这个关键字的意思是“用一个省略号 ('…', U+2026 HORIZONTAL ELLIPSIS)来表示被截断的文本”。 */
  white-space: nowrap; /* 和 normal 一样，连续的空白符会被合并。但文本内的换行无效。 */
  margin-bottom: 3px;
  ```

- `flex`布局

  ```css
  父元素:
  	display: flex;
  子元素:
  	flex: 1; /* 省略写法 */  查阅资料: [ https://developer.mozilla.org/zh-CN/docs/Web/CSS/flex ]
          flex-grow
          flex-shrink
          flex-basis

  ```

- 子组件的自定义事件

  ```javascript
  TabControl.vue:
  	itemClick(index) {
        this.currentIndex = index;
        // 自定义事件: 子传父 this.$emit('自定义事件名称',参数)
        this.$emit('tabClick', index)
      }
  
  ```

  ```javascript
  /*
  * 获取自定义事件
  */
  
  @tabClick="homeTabClick"
  
  -------------------------------------------------
  
  Home.vue:
      homeTabClick(index) {
        console.log('$emit事件获取监听');
        console.log(index);
       	...
  ```

  - `switch...case`

    ```javascript
     ...
    
       switch (index) {
              case 0:
                this.currentType = 'pop';
                break;
              case 1:
                this.currentType = 'new';
                break;
              case 2:
                this.currentType = 'sell';
                break;
            }
    
    
        }, // homeTabClick 结束代码块
    ```

- 演示效果

<img src="https://img-blog.csdnimg.cn/20210602153321308.gif#pic_center" alt="day-03" style="zoom: 80%;" />

* `better-scroll`库的使用

- 安装

  ```bash
  npm install better-scroll --save
  ```

- 实现局部滚动的方法

  1.  原生

  ```css
  /* 内容盒子 */
  .content {
    height: 200px;
    background-color: pink;

    overflow-y: scroll; /* Y 轴区域滚动 */
  }
  ```

  2. 基础使用过程

     ```javascript
     <template>
       <div id="categories">
         <h1> 分类 </h1>
         <div class="wrapper">
           <ul class="content">
             <li>Better-Scroll数据测试1</li>
             <li>Better-Scroll数据测试2</li>
               ...
             <li>Better-Scroll数据测试99</li>
             <li>Better-Scroll数据测试100</li>
           </ul>
         </div>
       </div>
     </template>

     <style scoped>
     .wrapper {
       height: 200px;
       background-color: pink;

       overflow: hidden;

     }
     </style>

     <script>
     import BScroll from 'better-scroll'

     export default {
       data() {
         return {
           scroll: null
         }
       },
       // 实现生命周期函数
       created() {

       },
       mounted() {
         this.scroll = new BScroll('.wrapper', {
             // 几个重要的参数
             probeType: [ 0 | 1 | 2 | 3 ],
             /*
             默认情况下 BScroll 是不可以实时的监听滚动位置
             probe 侦测
             0,1 都是不侦测实时位置
             2: 在手指滚动的过程中侦测,手指离开后的惯性滚动过程中不侦测
             3: 只要是滚动,都侦测
             */
             click: true, // [在内部默认false,不能进行原生事件监听]
             pullUpLoad: true // 开启下拉加载更多，需要监听事件
         })
         console.log(document.querySelector('.wrapper'));
           //
           this.scroll.on('pullingUp',()=>{
               bscroll.finishPullUp()
           }
                           }
      </script>
     ```



  3. 封装`BScroll`

     ```javascript
      <template>
         <div class="wrapper" ref="wrapper">
           <div class="content">
             <slot></slot>
           </div>
         </div>
       </template>
     
       <script>
       import BScroll from "better-scroll"
       export default {
         data() {
           return {
             scroll: null
           }
         },
         // 挂载后的生命周期函数
         mounted() {
           // 用变量保存
           this.scroll = new BScroll(this.$refs.wrapper, {})
         }
       }
       </script>
     ```

- 组件所有的`原生`事件监听，需要使用`修饰符.native`

  ```javascript
  // back-top 组件
  <back-top @click.native="backClick"></back-top>
  
  ```

- 实现返回顶部原理

  ```javascript
  1.  组件注册点击事件
  2.  `封装 scrollTo(x,y,time)`
  3.  `this.$refs.scroll.scrollTo(0, 0, 500)`
  ```

- 第三方插件使用思想

  ```javascript
    为避免过度依赖第三方插件使用,使用之前先对第三方插件进行`组件`封装,这样做的优势在于后期维护性
  ```
  
- `Back-Top`的显示与影藏

  ```javascript
  
  Scroll.vue:
  	 // 2. 监听滚动位置
      this.scroll.on('scroll', (position) => {
        // 文档地址
        // console.log('Better-Scroll 文档地址: https://better-scroll.github.io/docs/zh-CN/guide/');
        // console.log(position); 输出封装
        this.$emit('scroll', position); 
      })
  
  -----------------------------------------------------------------
          
  Home.vue:
      data(){
          return {
              isShowBackTop: false // 默认 false-> 隐藏，true-> 显示
          }
      }
  	// 自定义事件
      contentScroll(position) {
          console.log(position);
          this.isShowBackTop = (-position.y) > 1000;
      },
  
          
  ```

  





###  MGJ-Mall Day-04

