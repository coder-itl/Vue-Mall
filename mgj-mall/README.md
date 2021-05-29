# mgj-mall

## Project setup
```javascript
npm install
```

### Compiles and hot-reloads for development
```javascript
npm run serve
```

### Compiles and minifies for production
```javascript
npm run build
```

### Lints and fixes files
```javascript
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).



## MGJ-Mall 总结



###  安装`vue`脚手架

```bash
npm install -g @vue/cli
```



###  脚手架项目创建

```bash
# vue-cli 3
vue create "project-name"

# vue-cli 2
vue init webpack "project-name"

```



###  Vue-cli@3

+ `runtime-compiler`和`run-time-only`的区别

  + `runtime-compiler`

    ```javascript
    template -> ast -> render -> vdom(虚拟dom) -> UI
    ```

  + `runtime-only`

    ```javascript
    render - vdom -> UI
    
    总结(优点):
    	1. 性能更高
        2. 代码量更少
        
    ```

+ `render`函数总结

  ```javascript
  render: (h)=>{
      return h(App)
  }
  
  // 解析函数
  render: function(createElement){
       // 1. createElement('标签',{'标签的属性'},[‘内容’])
      return createElement()
      // 2. 传入组件对象
  }
  ```

+ `vue-cli3`与`2`版本区别

  1. `vue-cli 3`是基于 `webpack 4`打造,`vue-cli 2` 还是`wbpack3`
  2.  `vue-cli 3`的设计原则是 `0配置`,移除的配置文件根目录下的 `build 和 config`等目录
  3.  `vue-cli 3`提供了 `vue ui`命令,提供了可视化配置,更加人性化
  4.  移除了 `static`文件夹,新增`public`文件夹,并且`index.html`移动到`public`中

  

  

  

  

  

  