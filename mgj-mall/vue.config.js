// 新增自定义配置文件
module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        assets: '@/assets', // 静态资源路径别名
        common: '@/common',
        components: '@/components', // 组件别名
        views: '@/views',
        network: '@/network',
      },
    },
  },
  // productionSourceMap: false,
}
