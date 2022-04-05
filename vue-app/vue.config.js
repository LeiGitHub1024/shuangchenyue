const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave:false //为了消除一下err提醒： eror:Component name "index" should always be multi-word 
})
