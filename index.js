import MessageBoxComponent from './packages/message-box/index.js'

const MessageBox = {}

MessageBox.install = function (Vue) {
  Vue.prototype.$list = MessageBoxComponent.list
}