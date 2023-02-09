const { defineConfig } = require('@vue/cli-service');
module.exports = defineConfig({
  transpileDependencies: true,
  chainWebpack: config => {
    config.module
      .rule('js')
      .include.add('/packages')
      .end()
      .use('babel-loader')
      .tap(options => {
        return options;
      });
  },
  configureWebpack: {
    experiments: {
      outputModule: true,
    },
    output: {
      library: {
        type: 'module',
      },
    },
  },
});
