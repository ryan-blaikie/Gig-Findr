<template>
    <div class="inputs">
        <h2>...<br>Let us know you've visited!</h2>
    <div id="inputs">

    <v-container fluid>
    <v-row>
    <v-col cols="3"></v-col>
    <v-col cols="3">
          <v-text-field 
            label="Name"
            filled 
            v-model="name"
          ></v-text-field>
    </v-col>
    <v-col cols="3">
          <v-text-field
            label="City"
            filled
            v-model="city"
          ></v-text-field>
    </v-col>
    <v-col cols="3"></v-col>
    </v-row>

    </v-container>

    </div>
        
        <v-btn class="mx-2" fab dark  v-on:click="saveData"> 
            <v-icon dark>mdi-plus</v-icon>
        </v-btn>
    </div>
</template>
<script>
export default {
    name: 'Inputs',
    props: [''],
    data(){ 
        return {
            name : '', 
            city : ''
        }
    }, 
    methods : {
        saveData(){
          const environment = process.env.NODE_ENV;
          console.log('env:' , environment);
          const saveDataPath = environment !== 'production' ? 'http://localhost:5000/' : '';
        fetch(`${saveDataPath}saveData`, {
            method: 'POST',
            headers: {
               'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              name : this.name,
              address : this.city
            })
        })
        .then (response => response.json())
        .then (response => {
          alert("Thanks for checking in!");
          console.log(response.body);
          })
        .catch(error => console.log(error));
  }, 
    }   
}
</script>

<style scoped>


</style>