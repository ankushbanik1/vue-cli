<template>
    <div id="app">


<headers/>

<contents/>
<footers/>
  </div>
</template>

<script>

import header from './components/header.vue'
import footer from './components/footer.vue'
import content from './components/content.vue'

export default {
   name: 'app',
 
  components: {
     "footers":footer,
    "contents": content,
   "headers": header,
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
