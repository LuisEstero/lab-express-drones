// Iteration #1
require("../db/index")

const mongoose = require("mongoose");
// Siempre tenemos que requerir el modelo que vayamos a usar en la base de datos
const Drone = require('../models/Drone.model');

const drones = [
    { name: "Creeper XL 500", propellers: 3, maxSpeed: 12 },
    { name: "Racer 57", propellers: 4, maxSpeed: 20 },
    { name: "Courier 3000i", propellers: 6, maxSpeed: 18 }
  ];


  Drone
  .create(drones)
  .then((dronesDB) => {
    mongoose.connection.close();
    console.log(`Hemos creado ${dronesDB.length} drones`)
  })
  .catch(err => console.log(err));