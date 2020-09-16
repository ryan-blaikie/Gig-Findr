// server/server.js
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const axios = require('axios');
const app = express();
const port = 8000;

app.use(bodyParser.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

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
    } 
    catch (error) {
        console.log(error);
    }

}

// listen on the port
getEvents();
app.listen(port);