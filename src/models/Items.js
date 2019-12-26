const { Model, DataTypes } = require('sequelize');

class Item extends Model {
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
        value: DataTypes.STRING
      },
      {
        sequelize: connection
      }
    );
  }

  static associate(models) {
    this.belongsTo(models.Field, { foreignKey: 'field_id', as: 'field' });
  }
}

module.exports = Item;
