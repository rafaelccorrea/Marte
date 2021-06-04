<template>

    <div class="card">
        <div class="card-image">
            <img id="img" :src="fotos" alt="fotos"> <br>
    </div>
    <div>
            <input type="hidden" id="id" v-model="like">
            <button @click="curtir" v-on:click="counter += 1" type="submit" id="btn1" class="button is-link">Like</button>
            <p id="like" class="subtitle is-5">Likes: {{counter}}</p>
    </div>
    
            <p id="sub">{{subtitle}}</p>
  </div>

</template>

<script>
import axios from "axios";
export default {
    data() {
        return {
            fotos: [],
            subtitle: '',
            edit: '',
            counter: 0,
            like: "",

        }
    },
     created: function(){
      axios.get('https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=DEMO_KEY').then((dados)=>{
        this.fotos = dados.data.photos[1].img_src
        this.subtitle = dados.data.photos[1].camera.full_name
        console.log(this.subtitle)
      })
},
methods: {
    curtir(){
        axios.post("http://localhost:8081/like", {
            like: this.like,
        }).then(() =>{
            console.log(this.like)
        })
    }
}
};
</script>

<style>

    #img{
    margin-top:1%;
    margin-bottom: 1%;
  }
    
    #btn1{
        float:left;
        margin-left:300px;
    }

    #sub{
        margin-top:3%;
        margin-right: 795px;
    }

    #like{
         margin-left: 935px;
    }

</style>
