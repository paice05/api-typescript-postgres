const { UserController, FieldController, ItemController } = require('./controller');

module.exports = [
  new UserController(),
  new FieldController(),
  new ItemController()
];
