const { Model, DataTypes } = require('sequelize');

class User extends Model {
  static init(connection) {
    super.init(
      {
        id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          allowNull: false,
          autoIncrement: true
        },
        name: DataTypes.STRING,
        username: {
          type: DataTypes.STRING,
          unique: true
        },
        password: DataTypes.STRING
      },
      {
        sequelize: connection
      }
    );
  }

  static associate(models) {}
}

module.exports = User;
