/* flow */
import Vue from 'vue'
import App from './App'
import router from './router'
import type {
  cat
} from '../flow/cat'
Vue.config.productionTip = false
function sum (a:cat) {
  console.info(a + '1')
}
sum({
  name: 'string',
  speak (a:number) {}
})
interface Serializable {
  serialize(): number;
}

class Foo {
  serialize () { return '[Foo]' }
}

class Bar {
  serialize () {}
}

const foo: Serializable = new Foo() // Works!
const bar: Serializable = new Bar() // Works!
console.info(foo)
console.info(bar)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
