const mongoose = require('mongoose');

const launchesSchema = new mongoose.Schema({
    flightNumber: {
        type: Number,
        require: true,
    }, 
    launchDate: {
        type: Date, 
        required: true,
    },
    rocket: {
        type: String, 
        required: true, 
    },
    target: {
        type: String,
    },
    customers: [ String ],
    upcoming: {
        type: Boolean, 
        required: true,
    },
    success: {
        type: Boolean, 
        required: true, 
        default: true, 
    } 
});

//Connects launchesSchema with the "launches" collection
module.exports = mongoose.model('Launch', launchesSchema);



