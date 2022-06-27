const express = require('express');
const { render } = require('../app');
const drone = require('../models/Drone.model');
const router = express.Router();

// require the Drone model here

router.get('/drones', (req, res, next) => {
  drone.find()
  .then((response)=> {res.render('drones/list',{drones:response})})
  .catch(error => next(error))
  // Iteration #2: List the drones
  // ... your code here
});

router.get('/drones/create', (req, res, next) => {
  res.render('drones/create-form')

  
});

router.post('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
  
});

router.get('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  // ... your code here
});

router.post('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  // ... your code here
});

router.post('/drones/:id/delete', (req, res, next) => {
  // Iteration #5: Delete the drone
  // ... your code here
});

module.exports = router;
