<template>
  <div>
    <button v-on:click="onClick">JSONP</button>
  </div>
</template>

<script>
export default {
  name:"JSONP",
  methods: {
    jsonp : function (url, data = {}, callback='callback') {
      // 转化数据为url字符串形式
      let dataStr = url.indexOf('?') === -1 ? '?' : '&'
      for(let key in data) {
        dataStr += `${key}=${data[key]}&`
      }
      // 处理url中的回调函数
      dataStr += 'callback=' + callback
      // 创建srcipt标签并添加src属性值
      let scriptBody = document.createElement('script')
      scriptBody.src = url + dataStr
    
      // append到页面中 添加到页面就立刻发起请求
      document.body.appendChild(scriptBody)
      //返回一个promise
      return new Promise((resolve, reject) => {
        window[callback] = (data) => {
          try {
            resolve(data)
          } catch(e) {
            reject(e)
          } finally {
            // 移除script元素
            scriptBody.parentNode.removeChild(scriptBody)
            console.log(scriptBody)
          }
        }
      })
    },
    onClick:function(){
      console.log(1);
      this.jsonp('https://photo.sina.cn/aj/index',{page:1,cate:'recommend'}).then(response=>{console.log(response)})
    }
  },
}
</script>