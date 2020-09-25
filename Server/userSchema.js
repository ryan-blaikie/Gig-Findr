const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    name : {
        type: String,
        required : true
    },
    city : {
        type: String
    }
})

const User = mongoose.model("User", userSchema); //convert from schema to model to import to MongoDB
module.exports = User;