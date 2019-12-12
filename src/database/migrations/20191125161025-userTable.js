const uuid = require('uuid/v4');

('use strict');

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('users', {
      id: {
        type: Sequelize.DataTypes.UUID,
        primaryKey: true,
        allowNull: false,
        defaultValue: uuid()
      },
      name: Sequelize.STRING,
      type_account: {
        type: Sequelize.STRING,
        enum: ['buy', 'sale']
      },
      full_name: Sequelize.STRING,
      username: Sequelize.STRING,
      password: Sequelize.STRING,
      phone: Sequelize.STRING,
      created_at: {
        type: Sequelize.DataTypes.DATE,
        allowNull: false
      },
      updated_at: {
        type: Sequelize.DataTypes.DATE,
        allowNull: false
      }
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('users');
  }
};
