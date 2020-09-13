'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('pb_appo_types', [
      {
        name: 'JEDI STRESS MANAGEMENT',
        enable: true,
        start_day: '9:00',
        end_day: '14:00',
        module_block: 45,
        simultaneous_appo: 4,
        createdAt: new Date,
        updatedAt: new Date
      },{
        name: 'LIGHTSABER SKILLS',
        enable: true,
        start_day: '9:00',
        end_day: '14:00',
        module_block: 45,
        simultaneous_appo: 4,
        createdAt: new Date,
        updatedAt: new Date
      },{
        name: 'FIGHTING THE DARK SIDE',
        enable: true,
        start_day: '9:00',
        end_day: '16:00',
        module_block: 60,
        simultaneous_appo: 1,
        createdAt: new Date,
        updatedAt: new Date
      }
    ], {});

    
  }
};
