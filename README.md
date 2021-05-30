###  Vue 项目文档

+ 项目拉取

  ```bash
  git clone -b develop https://github.com/coder-itl/Vue-Mall.git
  ```

+ 启动项目

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



###  MGJ-Mall  Day-01

+ 项目结构划分

+ `vue-cli 3`配置查看以及修改

  ```bash
  
  查看原配置: node_modules/@vue/cli-serve/webpack.config.js
  
  新增配置: 在项目根目录下创建文件 "vue.config.js"
  
  ```

+ `VueRouter`使用

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
  -----------------------------------------------------------
  ```
  
+ 箭头函数

  ```javascript
  
  问题: 箭头函数中的 this 是如何查找的？
  
  答案: 向外层作用域,一层层查找 this ,直到有 this 的定义
  
  ```

+ 前端渲染后端渲染和前端路由后端路由

  + 前端渲染

    ```javascript
    定义：指的是后端返回 JSON 数据，前端利用预先写的 html 模板，循环读取JSON数据，拼接字符串（es6的模板字符串特性大大减少了拼接字符串的的成本），并插入页面。
    
    优点: 网络传输数据量小。不占用服务端运算资源（解析模板），模板在前端（很有可能仅部分在前端），改结构变交互都前端自己来了，改完自己调就行。
    
    缺点: 前端耗时较多，对前端工作人员水平要求相对较高。前端代码较多，因为部分以前在后台处理的交互逻辑交给了前端处理。占用少部分客户端运算资源用于解析模板。
    
    ```

  + 后端渲染

    ```javascript
    定义： 前端请求，后端用后台模板引擎直接生成html，前端接受到数据之后，直接插入页面。
    
    优点: 前端耗时少，即减少了首屏时间，模板统一在后端。前端（相对）省事，不占用客户端运算资源（解析模板）
    
    缺点: 占用服务器资源。
    
    ```

  + 前端路由

    ```javascript
    定义: 在单页面应用,大部分页面结构不变,只改变部分内容的使用
    
    优点: 用户体验好，不需要每次都从服务器全部获取,快速展现给用户
    
    缺点: 使用浏览器的前进后退会重新发送请求,没有合理地利用缓存单页面无法记住之前滚动地位置，无法在前进，后退地时候记住滚动的位置
    
    ```

  + 后端路由

    ```javascript
    通过用户请求的 url 导航到具体的 html 页面,每跳转到不同的 URL，都是重新访问服务端,然后服务端返回页面,页面可以是服务端获取数据m然后和模板组合,返回 HTML ，也可以是直接返回模板 HTML ，然后由前端 JS 再去请求数据,使用前端模板和数据进行组合,生成想要的 HTML
    ```

+ `hash`模式修改

  ```javascript
  const router = new VueRouter({
      mode: 'history' // 添加该配置即可在路径显示中去除 "#"
  })
  ```

+ `router-link`的其他属性

  ```javascript
  <router-link to="/path" tag="tag-name[Eg. a -> button ]" active-class="class-name">  测试  </router-link>
  
  // 携带 query
   <router-link :to="{path:'/home',query:{key:value,···}}">   测试  </router-link>
  // 获取对应的query 值
  $route.query.key | $route.query[获取整个对象]
  ```

+ `vue-router`打包解析

  ```javascript
  
  ```

+ 路由懒加载

  ```javascript
  // 路由懒加载最新写法
  const Home = () => import('/home path')
  
  const routes = [
      {
          path: '/home',
          component: Home
      }
  ]
  ```

+ 路由嵌套

  ```javascript
  // 子路由
  const Home = () => import('/home path')
  
  const routes = [
      {
          path: '/home',
          component: Home,
          children:[
              {
                  path: 'childrenRouter-path',
                  component: ChildrenRouter
              }
          ]
      },
      
      // 参数型
      {
          path: '/home/:homeId [:homeId 动态参数，router-link 的 to 需要同时携带相应的参数]' 
      }
  ]
  
  // 注意: 子路由的 <router-view></router-view> 位置，注意区分父路由的 router-view ，子路由也可以添加重定向
  
  
  ```

+ 全局导航守卫

  ```javascript
  
  ```

  







