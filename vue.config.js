
module.exports = {
  chainWebpack: config => {
    config
    .plugin('html')
    .tap(args => {
      args[0].title = '东方福利网-大运营系统'
      return args
    })
  },
  devServer: {
    host: '10.7.7.58',
    port: '8085',
    open: true,
    proxy: {
      '/api': {
        target: '<url>',
        ws: true,
        changeOrigin: true
      },
      '/foo': {
        target: '<other_url>'
      }
    }
  }
}