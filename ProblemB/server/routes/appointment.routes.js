var express = require('express');
var router = express.Router();

const appointment = require("../controllers/appointment.controller.js");

var router = require("express").Router();

// Create a new appointment
router.post("/", appointment.create);

// Retrieve all appointment
router.get("/", appointment.findAll);

// Retrieve a single appointment with id
router.get("/:id", appointment.findOne);

// Update a appointment with id
router.put("/:id", appointment.update);

// Delete a appointment with id
router.delete("/:id", appointment.delete);


// Retrieve a single appointment with id
router.get("/:date/:appoType", appointment.findDateByAppoType);


module.exports = router;