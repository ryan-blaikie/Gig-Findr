<template>
    <div class="inputs">
        <h2>...<br>Let us know you've visited us!</h2>
        <p>Your name</p><input id="nameInput" v-model="eName" placeholder="Enter your name">
        <p>Your city</p><input id="addressInput" v-model="eAddress" placeholder="Enter your city">
        <br><br><button v-on:click="saveData">Check In</button>
         <!-- <p>Lol ur address is {{eAddress}} xD</p> Example using modeled data from same file -->
    </div>
</template>
<script>
export default {
    name: 'Inputs',
    props: [''],
    data(){ //is this only used for internal reference and not for exporting?
        return {
            eName : '', 
            eAddress : ''
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
              name : this.eName,
              address : this.eAddress
            })
        })
        .then (response => response.json())
        .then (response => {
          alert("Thanks! " + response.body);
          })
        .catch(error => console.log(error));
  }, 
    }



    
}
</script>

<style scoped>
    h2{
        color: grey;
    }   
    div{
        display: block;
        margin: 30px;
    }
</style>