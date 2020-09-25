<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="FindaGig" />
    <!-- <input placeholder="Type something then click 'Display Data'" v-model="msgData"> Experiment to manipulate data from same file -->
    <Inputs ref="inputTest"/>
    <!-- <button v-on:click="saveData">Check In</button> //Button moved to other file--> 
  <br><br>
    <button v-on:click="accessServer">Access Server</button>
    <!-- <button v-on:click="displayData">Display Data</button> Experiment to manipulate data from same file -->
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
        
          })
        .catch(error => console.log(error));
  }, 

  // This is how to access info from a child component (if button on this file)
// saveData(){

//         fetch('http://localhost:4000/saveData', {
//             method: 'POST',
//             headers: {
//                'Content-Type': 'application/json',
//             },
//             body: JSON.stringify({
//               name : this.$refs.inputTest.eName,
//               address : this.$refs.inputTest.eAddress
//             })
//         })
//         .then (response => response.json())
//         .then (response => {
//           alert("Thanks! " + response.body);
//           })
//         .catch(error => console.log(error));
//   }, 

  // This used as experiment to manipulate data from same file
  // displayData(){
  //   alert(this.msgData);
  //   console.log(this.$refs.inputTest)
  //   alert("Address is " + this.$refs.inputTest.eAddress);
  //   alert("Name is " + this.$refs.inputTest.eName);
  // }
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
  padding-top: 100px;
}
</style>
