<template>
    <div>
    <br><br>

    <v-container fluid>

    <v-data-iterator
      :items="filteredItems"
      :items-per-page.sync="itemsPerPage"
      hide-default-footer
      :search="search"
    >
      <template v-slot:header>
        <v-toolbar
          class="mb-2"
          
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
            <v-spacer/>
            <v-select :items="cities" 
            filled
            flat
            outlined
            clearable
            solo-inverted
            hide-details
            multiple
            chips
            persistent-hint
            label="Filter by City"
            v-model="selectedCities" 
            @change="filterCity"></v-select>

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

          <v-hover v-slot="{ hover }">
            <v-card 
              @click="openUrl(item.url)"
              :elevation="hover ? 12 : 2"
              :class="{ 'on-hover': hover }"
              ><v-row >
                <v-col md="10">
                <v-card-title class="subheading">{{ item.name }}</v-card-title>
                </v-col><v-col md="2">
                <v-icon right v-show="hover|| $isMobile()">mdi-open-in-new</v-icon>
                </v-col>
                </v-row>
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
                  <v-list-item-content class="align-end">{{ item.datetime_summary }}, {{item.starttime_formatted}}</v-list-item-content>
                </v-list-item>

                
              </v-list>

            </v-card>
            </v-hover>
          </v-col>
        </v-row>
      </template>
    </v-data-iterator>
  </v-container>

    <br>

    </div>
</template>

<script>
export default {
    name:'EventTable', 
    data: () => ({
            eventData : '',
            items: [],
            filteredItems: [],
            itemsPerPage : 10,
            search: '',
            sortBy: 'name',
            sortDesc: false,
            selectedCities: [],
            oneCityFilteredItems: [],
            cities: ['Auckland', 'Christchurch', 'Dunedin', 'Gisborne', 'Hamilton', 'Hastings', 'Lower Hutt', 'Napier','Nelson','New Plymouth', 'Palmerston North', 'Porirua', 'Rotorua', 'Tauranga', 'Upper Hutt','Wellington', 'Whanganui', 'Whangārei']
    }),
    methods: {
      async filterCity(){
        await this.$nextTick()
        if (this.selectedCities.length !== 0){
          this.filteredItems = []; //clear each time
          this.selectedCities.forEach(c => {
              this.oneCityFilteredItems = this.items.filter(item => item.location_summary.includes(c)),
              this.oneCityFilteredItems.forEach(e => this.filteredItems.push(e))
              }
            )
            
            let sortedByDate = this.filteredItems.sort((a, b) => 
              new Date(b.datetime_start) < new Date(a.datetime_start) ? 1: -1,
            )
            console.log(sortedByDate)
          }
        else
          this.filteredItems = this.items;
      },
     accessServer(){
        const options = {
            method: 'GET',
            headers: {
                'Content-Type':'application/json'
            }
        }
        const environment = process.env.NODE_ENV;
        console.log('env:' , environment);
        const getDataPath = environment !== 'production' ? 'http://localhost:5000/' : '';

        fetch(`${getDataPath}getData`, options)
        .then (response => response.json())
        .then (data => {
            this.eventData = data.body;
            data.body.forEach(e => {
                e.starttime_formatted = e.datetime_start.split(' '); 
                e.starttime_formatted = e.starttime_formatted[1].slice(0,5);
                e.timezone = ""; //remove name of Auckland as messing with search
            });
            this.items = data.body;
            this.filteredItems = data.body;
          console.log(this.eventData);
          })
          
        .catch(error => console.log(error));
  }, 
  openUrl(url){
    window.open(url, "_blank")
  }
    },

    mounted(){
        this.accessServer();
    },
}
    
</script>

<style scoped>
.v-card__text, .v-card__title {
  word-break: normal; 
}

.v-card {
  transition: opacity .4s ease-in-out;
}

.v-card:not(.on-hover) {
  opacity: 0.95;
 }

</style>