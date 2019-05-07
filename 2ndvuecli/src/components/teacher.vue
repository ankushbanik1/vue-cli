<template>
  <div ><ul>
    <li v-for="students in  name">{{ students}}</li>
</ul>

      <h3> "hello guyss"</h3>

  </div>
</template>

<script>
export default {
    data(){
        return {
  name: ["HelloWorld","hello","world"],

        }
    }
 
}
</script>

<style  scoped>
li{
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-size: 20px;
    color:blue;
}
h3{
     color:blue
}
</style>
