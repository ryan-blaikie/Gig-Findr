<template>
  <div id="app">
    <v-app id="inspire">
    <Title msg="Gig Findr by Ryan" />
    <br><img src='./assets/gig-pic.jpg' width='60%'>
    <br>
    <h2>Upcoming Gigs:</h2>
    <EventTable/>
  <img ref="evfinda" src = "https://www.eventfinda.co.nz/images/global/attribution.gif?qgocdu" width='350'>
  <br>    
  <Inputs/>

        
  </v-app>
  </div>
</template>

<script>
import Title from './components/Title.vue'
import Inputs from './components/Inputs'
import EventTable from './components/EventTable'

export default {
  name: 'App',
  data: ()=>({
    
  }),
  components: {
    Title, Inputs, EventTable
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
  background-color: whitesmoke;
  padding-bottom: 150px;
  padding-top: 100px;
}

#inspire{
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: whitesmoke;
}

img{
  display: block;
  margin-left: auto;
  margin-right: auto;

}

table, th, td{
    border: 1px solid black;
}

table{
  border-collapse: collapse;
  margin-left: 50px;
  }
</style>
