module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('fields', {
      id: {
        type: Sequelize.DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
      },
      type: Sequelize.STRING,
      name: Sequelize.STRING,
      identity: Sequelize.STRING,
      placeholder: Sequelize.STRING,
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
    return queryInterface.dropTable('fields');
  }
};
