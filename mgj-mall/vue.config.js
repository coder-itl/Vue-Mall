// 新增自定义配置文件
module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        assets: '@/assets', // 静态资源路径别名
        common: '@/components/common', // 共用组件路径别名【TODO: BUG ，应将 common 作为外层】
        components: '@/components', // 组件别名
      },
    },
  },
}
