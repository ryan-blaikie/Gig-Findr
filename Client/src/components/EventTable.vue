<template>
    <div>
    <!-- <div ref="filters"> -->
        <!-- <form>
            <select ref="city" class="centred">
              <option value="">(All Cities)</option>
              <option value="Auckland">Auckland</option>
              <option value="Tauranga">Tauranga</option>
              <option value="Wellington">Wellington</option>
              <option value="Christchurch">Christchurch</option>
              <option value="Dunedin">Dunedin</option>
            </select>
          </form>
    </div>
    <button ref="filterbtn" v-on:click="applyFilters">Apply Filters</button> -->
    <br><br>
    <!-- <table ref="gigs" width="80%">
    </table> -->



<!-- Probably just replace this with a v-for loop -->
<!-- Simple Table -->
    <!-- <v-simple-table dark>
    <template v-slot:default>
      <thead>
        <tr>
          <th width=10px> Name</th>
          <th width=10px>  Genre </th>
          <th width=10px>Location</th>
          <th width=20%>Dates</th>
          <th/>
        </tr>
      </thead>
      <tbody>
        <tr v-for="event in eventData" :key="event.name">
          <td>{{ event.name }}</td>
          <td>{{ event.category.name }}</td>
          <td>{{ event.location.name }}</td>
          <td>{{ event.datetime_summary }}</td>
        </tr>
      </tbody>
    </template>
  </v-simple-table> -->


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

                label="Try searching for your city"
            ></v-text-field>
          <v-toolbar-title></v-toolbar-title>
        </v-toolbar>
      </template>
    <br>
      <template v-slot:default="props">
        <v-row>
          <v-col
            v-for="item in props.items"
            :key="item.name"
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
    // createTable(data, city) {
    //     let noResults = true; 
    //     let tableRef = this.$refs.gigs;
    //     for(let i=0; i<data.length; i++){
    //         //exclude canceled and show Auckland only
    //         if (data[i].is_cancelled == false 
    //             && data[i].name.includes("SOLD OUT")==false 
    //             && data[i].address.includes(city)){
    //             noResults = false;

    //             let name = data[i].name;
    //             let place = data[i].location.name;
    //             let dates = data[i].datetime_summary;
    //             let genre = data[i].category.name;
                
    //             //Insert Row
    //             let newRow  = tableRef.insertRow(-1);
    //             let cell1 = newRow.insertCell(0);
    //             let text1 = document.createTextNode(name);
    //             cell1.appendChild(text1);
    //             let cell2 = newRow.insertCell(1);
    //             let text2 = document.createTextNode(place);
    //             cell2.appendChild(text2);
    //             let cell3 = newRow.insertCell(2);
    //             let text3 = document.createTextNode(dates);
    //             cell3.appendChild(text3);
    //             let cell4 = newRow.insertCell(1);
    //             let text4 = document.createTextNode(genre);
    //             cell4.appendChild(text4);
    //         }
    //     }
    //     // Not sure if CSS display change works like this in vue still
    //     if (noResults == true){
    //         // this.$refs.noResultsMsg.css("display", "block");
    //         }
    //     else{
    //         // this.$refs.noResultsMsg.css("display", "none")
    //             //Construct headers
    //             let header = tableRef.createTHead();
    //             // this.$refs.thead.css("text-align", "center");
    //             let headerR = header.insertRow(0);
    //             let c1 = headerR.insertCell(0);
    //             c1.innerHTML = "<b>Name<b>";
    //             let c2 = headerR.insertCell(1);
    //             c2.innerHTML = "<b>Genre<b>";
    //             let c3 = headerR.insertCell(2);
    //             c3.innerHTML = "<b>Location<b>";
    //             let c4 = headerR.insertCell(3);
    //             c4.innerHTML = "<b>Dates<b>";
    //     }
    // },


     accessServer(){
        const options = {
            method: 'GET',
            headers: {
                'Content-Type':'application/json'
            }
        }
        fetch('/getData', options)
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
        //   this.createTable(this.eventData, "");
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