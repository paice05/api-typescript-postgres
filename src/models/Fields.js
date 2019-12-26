const { Model, DataTypes } = require('sequelize');

class Field extends Model {
  static init(connection) {
    super.init(
      {
        id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          allowNull: false,
          autoIncrement: true
        },
        type: DataTypes.STRING,
        name: DataTypes.STRING,
        identity: DataTypes.STRING,
        placeholder: DataTypes.STRING
      },
      {
        sequelize: connection
      }
    );
  }

  static associate(models) {
    this.hasMany(models.Item, { foreignKey: 'field_id', as: 'items' });
  }
}

module.exports = Field;
