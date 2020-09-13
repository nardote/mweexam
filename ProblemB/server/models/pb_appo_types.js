'use strict';
const {
  Model
} = require('sequelize');

var Sequelize = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class pb_appo_types extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      models.pb_appo_types.hasMany(models.pb_appointments);
      models.pb_appointments.belongsTo(models.pb_appo_types);
    }
  };

  pb_appo_types.init({
    //AppoinmentType Name
    name: {
      type: Sequelize.STRING,
      allowNull: false
    },
    //enable or disabled
    enable: {
      type: Sequelize.BOOLEAN,
      allowNull: false
    },
    //Start time
    start_day: {
      type: Sequelize.STRING,
      allowNull: false
    },
    //Finish time
    end_day: {
      type: Sequelize.STRING,
      allowNull: false
    },
    //Block in minutes
    module_block: {
      type: Sequelize.INTEGER,
      allowNull: false
    },    
    //simultaneous appoinment
    simultaneous_appo: {
      type: Sequelize.INTEGER,
      allowNull: false
    }    
  }, {
    sequelize,
    modelName: 'pb_appo_types',
  });

  

  return pb_appo_types;
};


