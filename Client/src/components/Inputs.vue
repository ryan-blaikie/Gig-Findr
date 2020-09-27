<template>
    <div class="inputs">
        <h2>...<br>Let us know you've visited us!</h2>
    <div id="inputs">

    <v-container fluid>
    <v-row>
    <v-col cols="3"></v-col>
    <v-col cols="3">
          <v-text-field 
            background-color="black"
            label="Your Name"
            filled 
            v-model="name"
          ></v-text-field>
    </v-col>
    <v-col cols="3">
          <v-text-field
            label="Your City"
            filled
            v-model="city"
          ></v-text-field>
    </v-col>
    <v-col cols="3"></v-col>
    </v-row>

    </v-container>

    </div>
        
        <v-btn class="mx-2" fab dark color="yellow" v-on:click="saveData"> 
            <v-icon dark>mdi-plus</v-icon>
        </v-btn>
        <!-- ^^^^Color attribute not working? -->
         <!-- <p>Lol ur address is {{eAddress}} xD</p> Example using modeled data from same file -->
    </div>
</template>
<script>
export default {
    name: 'Inputs',
    props: [''],
    data(){ //is this only used for internal reference and not for exporting?
        return {
            name : '', 
            city : ''
        }
    }, 
    methods : {
        saveData(){

        fetch('http://localhost:4000/saveData', {
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
          })
        .catch(error => console.log(error));
  }, 
  notify(){
    alert(this.eName);
  }
    }



    
}
</script>

<style scoped>


</style>