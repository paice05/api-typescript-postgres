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
        type_account: DataTypes.STRING,
        full_name: DataTypes.STRING,
        username: {
          type: DataTypes.STRING,
          unique: true
        },
        password: DataTypes.STRING,
        phone: DataTypes.STRING
      },
      {
        sequelize: connection
      }
    );
  }

  static associate(models) {
    this.hasMany(models.Address, { foreignKey: 'user_id', as: 'addresses' });
  }
}

module.exports = User;
