// Iteration #1
const mongoose = require('mongoose');

const droneSchema  = mongoose.Schema({
    name: {
        type : String,
    },
    propellers: {
        type: Number,
    },
    maxSpeed: {
        type: Number,
    },

})
  
const drone = mongoose.model('Drone', droneSchema);
 
module.exports = drone;
