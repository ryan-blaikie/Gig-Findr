
const mongoose = require('mongoose');
//Schema defining attributes of obj for MongoDB
const eventSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Name is required'],
    },
    address: {
        type: String,
        required: [true, 'Address is required'],
        default: "Auckland"
    }
})

const Event = mongoose.model("Event", eventSchema); //convert to a model using the schema to import to MongoDB
module.exports = Event;