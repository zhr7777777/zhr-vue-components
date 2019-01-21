import List from './List.vue'
import Alert from './Alert.vue'
import Vue from 'vue'

const app = document.getElementById('app') // obtain root node

export function list(propsData) {
  const ListConstructor = Vue.extend(List)
  const listInstance = new ListConstructor({
    propsData
  })
  mountElement(listInstance)
  listInstance.$on('close', () => {
    removeElement(listInstance)
  })
}

export function alert(propsData) {
  const AlertConstructor = Vue.extend(Alert)
  const alertInstance = new AlertConstructor({
    propsData
  })
  mountElement(alertInstance)
  setTimeout(() => {
    removeElement(alertInstance)
  }, 2000)
}

// util methods
function mountElement(instance) {
  const div = document.createElement('div') // create a new div
  app.appendChild(div) // 将新建元素添加到页面中
  instance.$mount(div) // 将组件挂载到新建元素上，也就是替代这个新元素
}

function removeElement(instance) {
  const instanceRootNode = instance.$el // 实例的根元素
  app.removeChild(instanceRootNode)
  instance.$destroy()
}

const MessageBox = {
  list,
  alert
}

export default MessageBox
