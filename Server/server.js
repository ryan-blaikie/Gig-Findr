// server/server.js
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const axios = require('axios');
const mongo = require('mongodb');

const app = express();
const port = process.env.PORT || 4000;

app.use(bodyParser.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));
// let dir = __dirname.slice(0, -7); //parent folder
// app.use(express.static(`${dir}./Client/public`));//test

app.get('/', (req, res) => {
  res.send(`Hi! Server is listening on port ${port}`)
});

//Fetch data from EventFinda API
const username = "findagig";
const pw = "m74tgzy6hyxb";
let data = {}; 
const musicTypes = "(146,145,279,154,276,278,277,290,255,286,106,147,248,148,28,150,156,151,153,152,302,265,149)";

async function getEvents(){
    try {
        const response = await axios({
            method: 'get',
            url: `https://api.eventfinda.co.nz/v2/events.json?rows=20&category=${musicTypes}`,
            headers: {'Authorization': 'Basic ' + Buffer.from(`${username}:${pw}`).toString('base64')},
        })
        console.log(response.data.events[0].name);
        data = response.data.events;
    } 
    catch (error) {
        console.log(error);
    }

}

// listen on the port
getEvents();
app.listen(port);

// Let client JS access data from EventFinda API
app.get('/getData', (req, res) => {
    console.log("Client request received");
    res.json({
        body: data
    })
})

app.get('/testMessage'), (req, res) =>{

    res.text({
        body: "Hello there"
    })
}