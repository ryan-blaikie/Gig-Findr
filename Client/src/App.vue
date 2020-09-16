<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <button v-on:click="accessServer">Access Server</button>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  methods:{
     accessServer(){
      //  let dir = __dirname.slice(0, -7); //parent folder
        const options = {
            method: 'GET',
            headers: {
                'Content-Type':'application/json'
            }
        }
    
        fetch('http://localhost:4000/getData', options)
        .then (response => response.json())
        .then (data => {
          console.log(data);
          console.log(typeof(data));
        // fetch(`http://localhost:4000`, options)
        // .then(response => response.text)
        // .then (data => {
        //   console.log(data);
        
          })
        .catch(error => console.log(error));
  }
}
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
