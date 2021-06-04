<template>
  <div class="home">
      <h1 id="title" class="title">Seja Bem Vindo</h1>
      <div id="error" class="subtitle notification is-danger" v-if="erro != undefined">
              <p> {{erro}} </p>
      </div>
      <input id="input" class="input is-focused" type="text" v-model="name" placeholder="Digite seu nome: "><br>
      <button id="btn" class="button is-link" type="submit" @click="register">Entrar</button>
  </div>
</template>

<script>
import axios from "axios"
export default {
    data(){
      return {
        name: '',
        erro: undefined,
      }
    },
    methods: {
         register(){
      axios.post('http://localhost:8081/user', {
        name: this.name,
      }).then(()=>{
        this.$router.push({name: 'Logado'});
      }).catch((err)=>{
        let msgErr = err.response.data.err;
        this.erro = msgErr
      })
    }
  }
}
</script>

<style scoped>

#title {
  margin-top: 19%;
}

#input{
  width: 500px;
  margin-top: 1%;
}

#btn{
  margin-top: 2%;
  width: 6%;
}

#error{
  margin-top: 2%;
  width: 500px;
  margin: 0 auto;
}

#danger{
  width: 500px;

}

</style>