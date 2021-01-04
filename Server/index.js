const eventFindaInfo = require('./eventFindaInfo.js'); 
const mongoDBInfo = require('./mongoDBInfo'); //contains pw and username

// server/server.js
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const axios = require('axios');
const mongo = require('mongodb');
const mongoose = require('mongoose');
const assert = require('assert'); //for testing
// const morgan = require('morgan'); //logs all access



const app = express();
const port = process.env.PORT || 5000; //Used to be 4000 before Heroku

app.use(bodyParser.json()); //transforms each req to json format
const corsOptions = {
    origin: 'http://localhost:8080', //allow post acces from client
    methods: "GET, PUT, POST"
  }
  
app.use(cors(corsOptions));
// app.use(morgan('tiny'));
app.use(express.urlencoded({ extended: true }));
// let dir = __dirname.slice(0, -7); //parent folder
// app.use(express.static(`${dir}./Client/public`));//test

//Handle production
if(process.env.NODE_ENV === 'production'){
    //Static folder
    app.use(express.static(__dirname + '/public'));

    //Handle single-page application
    // app.get(/.*/, (req, res) => res.sendFile(__dirname + '/public/index.html')); //re-directs every route to index.html
}



app.get('/', (req, res) => {
  res.send(`Hi! Server is listening on port ${port}`)
});

//Fetch data from EventFinda API
// const username = "findagig";
// const pw = "m74tgzy6hyxb";
let data = JSON.stringify({body : "The events have not yet been retrieved from the API"}); //default
const musicTypes = "(146,145,279,154,276,278,277,290,255,286,106,147,248,148,28,150,156,151,153,152,302,265,149)";

async function getEvents(){
    try {
        const response = await axios({
            method: 'get',
            url: `https://api.eventfinda.co.nz/v2/events.json?rows=20&category=${musicTypes}`,
            headers: {'Authorization': 'Basic ' + Buffer.from(`${eventFindaInfo.username}:${eventFindaInfo.pw}`).toString('base64')},
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

    res.json({
        body: "Hello there"
    })
}

// let corsOptions = {
//     origin: 'http://localhost:8080', //allow post acces from client
//   }

app.post('/saveData', (req, res) =>{
    
    let jsonObj = req.body;
       
    uploadData(jsonObj);
    res.json({
        body: "Data saved to MongoDB Atlas"
    })
})



const mongoUri = `mongodb+srv://${mongoDBInfo.username}:${mongoDBInfo.pw}@free-cluster.xabww.mongodb.net/MongoGigDB?retryWrites=true&w=majority`;

mongoose.connect(mongoUri, {
        useNewUrlParser : true,
        useCreateIndex: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
    })
    .then(() => 
        console.log('MongdoDB database connected.'))
        // uploadData()
    
    .catch((err) => console.log(err));

const eventModel = require('./eventSchema') //Model for MongoDB
const userModel = require('./userSchema') //Model for MongoDB

async function uploadData(jsonObj){
    const testEvent = new userModel ({
        name : jsonObj.name,
        city : jsonObj.address
    });
    try{
        await testEvent.save();
        console.log("Data has been saved to the MongoDB Cloud.");
    }
    catch(err){
        console.log(err);
        console.log("Data not saved to cloud :(");
    }
}
