// 新增自定义配置文件
module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        assets: '@/assets',
        common: '@/components/common',
        components: '@/components',
        network: '@/network',
      },
    },
  },
}
