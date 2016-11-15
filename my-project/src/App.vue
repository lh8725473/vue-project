<template>
  
  <div id="app">
  <sidebar></sidebar>
    <img src="./assets/logo.png">
    <hello></hello>
    <el-button
      plain
      @click.native="open3">
      成功
    </el-button>
  </div>
</template>

<script>
import sidebar from './view/sidebar'
import Hello from './components/Hello'


export default {
  name: 'app',
  methods: {
    open3() {
      this.$notify({
        title: '成功',
        message: '这是一条成功的提示消息',
        type: 'success'
      })
    }
  },
  components: {
    sidebar,
    Hello
  }
}
</script>

<style>
html, body{
  height: 100%;
  width: 100%;
}
#app {
  height: 100%;
  width: 100%;
}
</style>
