<template>
  <div >
    <header>
  
    <h2>{{name}} </h2>
    <p>{{website}} </p>
    </header>

  </div>
</template>

<script>
export default {
  data (){
    return{
      name: 'wellcome To our website',
  website: 'https://www.ankushbanik.com',
 
    }
  }
}

</script>

<style scoped>
header{
  background-color: #3f51b5f2;
  color: white;
  text-align: center;
  padding: 3px;
}
</style>
