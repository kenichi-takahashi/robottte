module.exports = {
  devServer: {
      port: 8080,
      disableHostCheck: true,
      watchOptions: {
        poll: true
      }
  },
  publicPath: 'vue/',
  outputDir: '../docs'
};