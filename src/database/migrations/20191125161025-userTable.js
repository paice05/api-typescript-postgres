module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('users', {
      id: {
        type: Sequelize.DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
      },
      name: Sequelize.STRING,
      type_account: {
        type: Sequelize.STRING,
        enum: ['buy', 'sale']
      },
      full_name: Sequelize.STRING,
      username: {
        type: Sequelize.STRING,
        unique: true
      },
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
