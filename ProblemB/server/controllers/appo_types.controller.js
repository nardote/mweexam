const db = require("../models");
const AppoType = db.pb_appo_types;

// Create and Save a new Appoinment
exports.create = (req, res) => {

    if (!req.body.name) {
        res.status(400).send({
          message: "name can not be empty!"
        });
        return;
    }

    if (!req.body.start_day) {
        res.status(400).send({
          message: "date_start can not be empty!"
        });
        return;
    }

    if (!req.body.end_day) {
        res.status(400).send({
          message: "date_end can not be empty!"
        });
        return;
    }
    
    const AppoType = {
        name: req.body.name,
        enable: req.body.enable,
        start_day: req.body.start_day,
        end_day: req.body.end_day,
        module_block: req.body.module_block,

    };

    AppoType.create(AppoType)
    .then(data => {
        res.send(data);
    })
    .catch(err => {
        res.status(500).send({
        message:
            err.message || "Some error occurred while creating the AppoType."
        });
    });
  
};



// Retrieve all AppoType from the database.
exports.findAll = (req, res) => {
  console.log(AppoType)
  AppoType.findAll(/*{ where: { enable: true } }*/)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving AppoType."
      });
    });
};

// Find a single Appoinment with an id
exports.findOne = (req, res) => {
    const id = req.params.id;
    AppoType.findByPk(id)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving AppoType with id=" + id
      });
    });
};

// Update a AppoType by the id in the request
exports.update = (req, res) => {
    const id = req.params.id;

    AppoType.update(req.body, {
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "AppoType was updated successfully."
          });
        } else {
          res.send({
            message: `Cannot update AppoType with id=${id}. Maybe AppoType was not found or req.body is empty!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating AppoType with id=" + id
        });
      });
};

// Delete a AppoType with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;

    AppoType.destroy({
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "AppoType was deleted successfully!"
          });
        } else {
          res.send({
            message: `Cannot delete AppoType with id=${id}. Maybe AppoType was not found!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete AppoType with id=" + id
        });
      });
};

