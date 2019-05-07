<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    {{ daytime("morning")}}
    {{ hayhello }}
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your   Adp',
    }
  },
  methods:{
    daytime(x){
return "good "+x

    }
  },
  computed:{
    hayhello(){
      return "good evening"
    }
  }
}
</script>


</style>
