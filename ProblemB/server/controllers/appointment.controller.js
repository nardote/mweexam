const db = require("../models");
const { Op } = require("sequelize");
const moment = require('moment');
const Appoinments = db.pb_appointments;
const AppoType = db.pb_appo_types;




// Create and Save a new Appoinment
exports.create = (req, res) => {
console.log(req.body.date_start)
    if (!req.body.name) {
        res.status(400).send({
          message: "name can not be empty!"
        });
        return;
    }

    if (!req.body.date_start) {
        res.status(400).send({
          message: "date_start can not be empty!"
        });
        return;
    }


    if (!req.body.pb_appo_type_id) {
        res.status(400).send({
          message: "pb_appo_type_id can not be empty!"
        });
        return;
    }

    //TODO: validate if it has disponible slot
    
    const appoinments = {
        name: req.body.name,
        date_start: req.body.date_start,
        pbAppoTypeId: req.body.pb_appo_type_id
    };

    Appoinments.create(appoinments)
    .then(data => {
        res.send(data);
    })
    .catch(err => {
        res.status(500).send({
        message:
            err.message || "Some error occurred while creating the appoinments."
        });
    });
  
};

// Retrieve all Appoinment from the database.
exports.findAll = (req, res) => {
    Appoinments.findAll(/*{ where: { enable: true } }*/)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving appoinment."
      });
    });
};


// Retrieve all Appoinment from the database.
exports.findDateByAppoType = (req, res) => {

  const date = req.params.date;
  const appoType = req.params.appoType;

  let dateParsed = moment(date)
  let start_day = dateParsed.format('YYYY-MM-DD')
  let end_day = dateParsed.add(1, 'day').format('YYYY-MM-DD')

  Appoinments.findAll({ where: {
      date_start: { 
        [Op.between]:[start_day, end_day]
      },
      pbAppoTypeId: appoType
  } })
  .then(data => {
    res.send(data);
  })
  .catch(err => {
    res.status(500).send({
      message:
        err.message || "Some error occurred while retrieving appoinment."
    });
  });


  
};



// Find a single Appoinment with an id
exports.findOne = (req, res) => {
    const id = req.params.id;
    Appoinments.findByPk(id)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving AppoType with id=" + id
      });
    });
};

// Update a Appoinment by the id in the request
exports.update = (req, res) => {

    const id = req.params.id;

    Appoinments.update(req.body, {
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Appoinments was updated successfully."
          });
        } else {
          res.send({
            message: `Cannot update Appoinments with id=${id}. Maybe Appoinments was not found or req.body is empty!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating appoinment with id=" + id
        });
      });
};

// Delete a Appoinment with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;

    Appoinments.destroy({
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Appoinment was deleted successfully!"
          });
        } else {
          res.send({
            message: `Cannot delete Appoinment with id=${id}. Maybe Appoinment was not found!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete Appoinment with id=" + id
        });
      });
};

