'use strict';
const {
  Model
} = require('sequelize');


module.exports = (sequelize, DataTypes) => {
  class pb_appointments extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  pb_appointments.init({
    //Applicant's Name 
    name:{ 
      type: DataTypes.STRING,
      allowNull: false
    },
    //Appoinment start date
    date_start:{
      type: DataTypes.DATE,
      allowNull: false
    },
    //Appoinment relation with AppoinmentType
    pbAppoTypeId:{
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'pb_appointments',
  });
  return pb_appointments;
};