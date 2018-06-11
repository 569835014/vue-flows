<template>
  <div id="app">
    <img src="./assets/logo.png">
    <router-view/>
  </div>
</template>

<script type="text/javascript">
/* flow */
import type {
  cat
} from '../flow/cat'

export default {
  name: 'App',
  created () {
    this.sum({
      name: '1',
      speak () {}
    }, 1)
  },
  methods: {
    sum (a:cat, b:number):number {
      console.info(a)
      console.info(a)
      console.info(a)
      console.info(a)
      return b
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
