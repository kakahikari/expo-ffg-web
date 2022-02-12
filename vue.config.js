const path = require('path')

module.exports = {
  productionSourceMap: false,
  devServer: {
    host: process.env.DEV_SERVER_HOST,
    https: true,
  },
  publicPath: './',
  chainWebpack: (config) => {
    config.resolve.alias
      .set('vue', path.resolve('./node_modules/vue'))
      .set('@', path.resolve(__dirname, 'src/'))
      .set('~', path.resolve(__dirname, 'src/assets/'))
    config.plugin('html').tap(args => {
      args[0].title = `${process.env.VUE_APP_SITE_TITLE} ${process.env.npm_package_version}`
      return args
    })
    config.plugin('stylelint')
      .use(require('stylelint-webpack-plugin'), [
        {
          exclude: [
            'dist',
            'node_modules',
            'public',
          ],
          files: ['**/*.{vue,htm,html,css,scss}'],
        },
      ])
  },
}
