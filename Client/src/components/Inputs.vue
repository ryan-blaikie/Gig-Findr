<template>
    <div class="inputs">
        <p>Event Name</P><input id="nameInput" v-model="eName" placeholder="Enter your event's name">
         <p>Event Address</P><input id="addressInput" v-model="eAddress" placeholder="Enter your event's address">

         <p>Lol ur address is {{eAddress}} xD</p>
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
        
    }



    
}
</script>

<style scoped>
    div{
        display: block;
        margin: 30px;
    }
</style>