const Sequelize = require('sequelize');

const dbConfig = require('../config/database');

const User = require('../models/User');
const Address = require('../models/Address');
const Field = require('../models/Fields');
const Item = require('../models/Items');

const connection = new Sequelize(dbConfig);

User.init(connection);
Address.init(connection);
Field.init(connection);
Item.init(connection);

Address.associate(connection.models);
User.associate(connection.models);
Field.associate(connection.models);
Item.associate(connection.models);

module.exports = connection;
