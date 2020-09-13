'use strict';
var Sequelize = require('sequelize');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('pb_appo_types', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      enable: {
        type: Sequelize.BOOLEAN,
        allowNull: false
      },
      start_day: {
        type: Sequelize.STRING,
        allowNull: false
      },
      end_day: {
        type: Sequelize.STRING,
        allowNull: false
      },
      module_block: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      simultaneous_appo: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('pb_appo_types');
  }
};