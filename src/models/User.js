const { Model, DataTypes } = require('sequelize');
const uuid = require('uuid/v4');

class User extends Model {
  static init(connection) {
    super.init(
      {
        id: {
          type: DataTypes.UUIDV4,
          primaryKey: true,
          allowNull: false,
          defaultValue: uuid()
        },
        name: DataTypes.STRING,
        type_account: DataTypes.STRING,
        full_name: DataTypes.STRING,
        username: DataTypes.STRING,
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
