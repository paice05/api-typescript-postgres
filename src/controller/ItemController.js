const Items = require('../models/Items');

// base-controller
const BaseController = require('./BaseController');

class ItemController extends BaseController {
  constructor() {
    super(Items, '/items');
  }

  routes() {
    const route = super.routes();

    return route;
  }
}

module.exports = ItemController;
