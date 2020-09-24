<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="FindaGig" />
    <input placeholder="Custom input on App.vue" v-model="msgData">
    <Inputs ref="inputTest"/>
    <button v-on:click="accessServer">Access Server</button>
    <button v-on:click="saveData">Save Data to Cloud</button>
    <button v-on:click="displayData">Display Data</button>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Inputs from './components/Inputs'

export default {
  name: 'App',
  data: ()=>({
    popupText: "Hello there!",
    msgData:  ""//initial value only
  }),
  components: {
    HelloWorld, Inputs
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
  }, saveData(){
        //     const options = {
        //     method: 'GET',
        //     headers: {
        //         'Content-Type':'application/json'
        //     }
        // }
    
        //Display response
        fetch('http://localhost:4000/saveData', {
            method: 'GET',
            headers: {
               'Content-Type': 'application/json',
            },
            // body: {
            //   name : "Client Test Name",
            //   address : "Clinet Test Address"
            // }
        })
        .then (response => response.json())
        .then (response => {
          console.log(response);
          })
        .catch(error => console.log(error));
  }, 
  displayData(){
    alert(this.msgData);
    console.log(this.$refs.inputTest)
    alert("Address is " + this.$refs.inputTest.eAddress);
    alert("Name is " + this.$refs.inputTest.eName);
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
  background-color: black;
  padding-bottom: 150px;
}
</style>
