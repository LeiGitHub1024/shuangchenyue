import { createApp } from "vue"
import Message from "./Toast.vue"
const Toast = res => {
  res = res || '提示文字为空！';
  let messageNode = document.createElement("div")

  const app = createApp(Message, {
      content:res,
      remove() {  messageNode.remove() }
    })
  app.vm = app.mount(messageNode) //把新建的div挂载（绑定？）至我们的Toast组件。
  document.body.appendChild(messageNode)   
}
export default Toast