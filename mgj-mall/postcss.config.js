module.exports = {
  plugins: {
    autoprefixer: {},
    'postcss-px-to-viewport': {
      viewportWidth: 375, // 视窗的宽度
      viewportHeight: 667, //视窗的高度
      viewportUnit: 'vw', // 指定需要转换成的视窗单位,建议使用 vw
      unitPrecision: 5, //指定 ‘px’ 转换为视窗单位值的小委属(很多时候无法整除)
      selectortBlackList: ['ignore', 'tab-bar', 'tab-bar0item'], // 指定不需要转换的类
      minPixelValue: 1, //小于或等于 '1px' 不转换为视窗单位
      mediaQuery: false, //允许在媒体查询中转换 'px'
    },
  },
}
