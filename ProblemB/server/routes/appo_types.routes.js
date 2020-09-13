var express = require('express');
var router = express.Router();

const AppoType = require("../controllers/appo_types.controller.js");

var router = require("express").Router();

// Create a new AppoType
router.post("/", AppoType.create);

// Retrieve all AppoType
router.get("/", AppoType.findAll);

// Retrieve a single AppoType with id
router.get("/:id", AppoType.findOne);

// Update a AppoType with id
router.put("/:id", AppoType.update);

// Delete a AppoType with id
router.delete("/:id", AppoType.delete);


module.exports = router;