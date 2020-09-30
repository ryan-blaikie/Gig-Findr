<template>
  <div id="app">
    <HelloWorld msg="FindaGig" />
    <br><img src='./assets/gig-pic.jpg'>
  
    <br><br>
    <h2>Upcoming Gigs:</h2>

    <EventTable/>
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
