'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('users', 'email');
  },

  down: (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.addColumn('users', 'email', {
        type: Sequelize.STRING,
        allowNull: false,
      }),
    ]);
  },

};
