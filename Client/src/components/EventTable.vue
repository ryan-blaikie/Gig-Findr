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
    <br><br><br>
    <table ref="gigs" width="80%">
    </table>
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
            eventData : ''
        }
    },
    methods: {
    createTable(data, city) {
        let noResults = true; 
        let tableRef = this.$refs.gigs;
        for(let i=0; i<data.length; i++){
            //exclude canceled and show Auckland only
            if (data[i].is_cancelled == false 
                && data[i].name.includes("SOLD OUT")==false 
                && data[i].address.includes(city)){
                noResults = false;

                let name = data[i].name;
                let place = data[i].location.name;
                let dates = data[i].datetime_summary;
                let genre = data[i].category.name;
                
                //Insert Row
                let newRow  = tableRef.insertRow(-1);
                let cell1 = newRow.insertCell(0);
                let text1 = document.createTextNode(name);
                cell1.appendChild(text1);
                let cell2 = newRow.insertCell(1);
                let text2 = document.createTextNode(place);
                cell2.appendChild(text2);
                let cell3 = newRow.insertCell(2);
                let text3 = document.createTextNode(dates);
                cell3.appendChild(text3);
                let cell4 = newRow.insertCell(1);
                let text4 = document.createTextNode(genre);
                cell4.appendChild(text4);
            }
        }
        // Not sure if CSS display change works like this in vue still
        if (noResults == true){
            // this.$refs.noResultsMsg.css("display", "block");
            }
        else{
            // this.$refs.noResultsMsg.css("display", "none")
                //Construct headers
                let header = tableRef.createTHead();
                // this.$refs.thead.css("text-align", "center");
                let headerR = header.insertRow(0);
                let c1 = headerR.insertCell(0);
                c1.innerHTML = "<b>Name<b>";
                let c2 = headerR.insertCell(1);
                c2.innerHTML = "<b>Genre<b>";
                let c3 = headerR.insertCell(2);
                c3.innerHTML = "<b>Location<b>";
                let c4 = headerR.insertCell(3);
                c4.innerHTML = "<b>Dates<b>";
        }
    },


     accessServer(){
        const options = {
            method: 'GET',
            headers: {
                'Content-Type':'application/json'
            }
        }
        fetch('http://localhost:4000/getData', options)
        .then (response => response.json())
        .then (data => {
            this.eventData = data.body;
          console.log(this.eventData);
          this.createTable(this.eventData, "");
          })
          
        .catch(error => console.log(error));
  }, 
    // applyFilters(){
    //     // alert(this.$refs.city.value);
    //     let city = this.$refs.city.value;
    //     this.$refs.gigs.clear();
    //     this.createTable(this.eventData, city);
    // }
    },
    mounted(){
        this.accessServer();
    },
}
    
</script>

<style scoped>

</style>