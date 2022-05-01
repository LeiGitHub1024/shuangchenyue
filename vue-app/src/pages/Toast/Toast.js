import { createApp } from "vue"
import Message from "./Toast.vue"
const Toast = res => {
  res = res || '提示文字为空！';
  let messageNode = document.createElement("div")

  const app = createApp(Message, {
      content:res,
      remove() {  messageNode.remove() }
    })
  app.vm = app.mount(messageNode)
  document.body.appendChild(messageNode)   
}
export default Toast