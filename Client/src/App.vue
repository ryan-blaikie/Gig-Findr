<template>
  <div id="app">
    <HelloWorld msg="FindaGig" />
    <br><img src='./assets/gig-pic.jpg'>
    <!-- <input placeholder="Type something then click 'Display Data'" v-model="msgData"> Experiment to manipulate data from same file -->
    <br><br>
    <h2>Upcoming Gigs:</h2>
    <!-- <button v-on:click="saveData">Check In</button> //Button moved to other file--> 

    <EventTable/>
    <!-- <button v-on:click="displayData">Display Data</button> Experiment to manipulate data from same file -->
  <br>    <Inputs ref="inputTest"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Inputs from './components/Inputs'
import EventTable from './components/EventTable'

export default {
  name: 'App',
  data: ()=>({
    popupText: "Hello there!",
    msgData:  ""//initial value only
  }),
  components: {
    HelloWorld, Inputs, EventTable
  },
  methods:{
     

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
  background-color: whitesmoke;
  padding-bottom: 150px;
  padding-top: 100px;
}

table, th, td{
    border: 1px solid black;
}

table{
  border-collapse: collapse;
  margin-left: 50px;
  }
</style>
