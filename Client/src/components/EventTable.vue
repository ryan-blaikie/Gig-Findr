<template>
    <div>
    <br><br>

  <!-- Data Iterator -->
    <v-container fluid>
    <v-data-iterator
      :items="items"
      :items-per-page.sync="itemsPerPage"
      hide-default-footer
      :search="search"
    >
      <template v-slot:header>
        <v-toolbar
          class="mb-2"
          color="indigo darken-5"
          dark
          flat
        >
                    <v-text-field
                v-model="search"
                clearable
                flat
                solo-inverted
                hide-details

                label="Try searching your city, a genre, or artist"
            ></v-text-field>
          <v-toolbar-title></v-toolbar-title>
        </v-toolbar>
      </template>
    <br>
      <template v-slot:default="props">
        <v-row>
          <v-col
            v-for="item in props.items"
            :key="item.id"
            cols="12"
            sm="6"
            md="4"
            lg="4"
          >
            <v-card>
              <v-card-title class="subheading font-weight-bold">{{ item.name }}</v-card-title>

              <v-divider></v-divider>

              <v-list dense>
                <v-list-item>
                  <v-list-item-content>Genre:</v-list-item-content>
                  <v-list-item-content class="align-end">{{ item.category.name }}</v-list-item-content>
                </v-list-item>

                <v-list-item>
                  <v-list-item-content>Location:</v-list-item-content>
                  <v-list-item-content class="align-end">{{ item.location_summary }}</v-list-item-content>
                </v-list-item>

                <v-list-item>
                  <v-list-item-content>Time:</v-list-item-content>
                  <v-list-item-content class="align-end">{{ item.datetime_summary }}, {{item.datetime_start}}</v-list-item-content>
                </v-list-item>

                
              </v-list>
            </v-card>
          </v-col>
        </v-row>
      </template>
    </v-data-iterator>
  </v-container>



    <p ref="noResultsMsg" style="display: none;">We're sorry, it looks like there are no matching gigs!</p>
    <br>
    <div>
        <img ref="evfinda" src = "https://www.eventfinda.co.nz/images/global/attribution.gif?qgocdu">
    </div>
    </div>
</template>

<script>
export default {
    name:'EventTable', 
    data(){
        return {
            eventData : '',
            items: '',
            itemsPerPage : 10,
            search: '',
        }
    },
    methods: {

     accessServer(){
        const options = {
            method: 'GET',
            headers: {
                'Content-Type':'application/json'
            }
        }
        fetch('getData', options)
        .then (response => response.json())
        .then (data => {
            this.eventData = data.body;
            data.body.forEach(e => {
                e.datetime_start = e.datetime_start.split(' '); //getting the time
                e.datetime_start = e.datetime_start[1].slice(0,5);
                e.timezone = ""; //remove name of Auckland as messing with search
            });
            this.items = data.body;
          console.log(this.eventData);
          })
          
        .catch(error => console.log(error));
  }, 
    },
    mounted(){
        this.accessServer();
    },
}
    
</script>

<style scoped>


</style>