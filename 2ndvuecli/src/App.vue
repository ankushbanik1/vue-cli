<template>
  <div id="app">

<teacher/>
    <students />
  </div>
</template>

<script>
import students from './components/students.vue'
import teacher from './components/teacher.vue'

export default {
  name: 'app',
  components: {
   students,
   teacher:teacher

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
