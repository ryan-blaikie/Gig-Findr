<template>
    <div class="inputs">
        <p>Let us know you've visited us!</p>
        <p>Your name</P><input id="nameInput" v-model="eName" placeholder="Enter your name">
        <p>Your city</P><input id="addressInput" v-model="eAddress" placeholder="Enter your city">
        <button v-on:click="saveData">Check In</button>
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
    div{
        display: block;
        margin: 30px;
    }
</style>