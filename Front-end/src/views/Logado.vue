<template>
  <div class="app">
    <h1 class="title" id="app">Ola {{name}}</h1>
    <hr id="hr">
    <Marte/>
  </div>

</template>

<script>

import axios from "axios";
import Marte from "../components/marte"
export default {
  data(){
    return {
      name: [],
      fotos: '',
      subtitle: '',
    }
  },
  components: {
    Marte
  },
      created: function(){
      axios.get('http://localhost:8081/user').then((res)=>{
         this.name = res.data[0].name;
          console.log(this.name)
      }).catch((err)=>{
        console.log(err)
      })
    },
  
   
}
</script>

<style scoped>

  #app{
    margin-top: 1%;
  }

  #hr{
    border: solid 1px rgba(224, 220, 220, 0.8);
  }

  #img{
    margin-top:1%;
    margin-bottom: 1%;
  }

</style>