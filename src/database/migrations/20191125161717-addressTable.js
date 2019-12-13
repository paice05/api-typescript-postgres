module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('address', {
      id: {
        type: Sequelize.DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
      },
      user_id: {
        type: Sequelize.DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: 'users',
          key: 'id'
        }
      },
      zipcode: Sequelize.DataTypes.STRING,
      street: Sequelize.DataTypes.STRING,
      neighborhood: Sequelize.DataTypes.STRING,
      number: Sequelize.DataTypes.STRING,
      city: Sequelize.DataTypes.STRING,
      state: Sequelize.DataTypes.STRING,
      reference: Sequelize.DataTypes.STRING,
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
    return queryInterface.dropTable('address');
  }
};
