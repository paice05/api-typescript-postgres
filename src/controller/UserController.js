const User = require('../models/User');

const BaseController = require('./BaseController');

class UserController extends BaseController {
  constructor() {
    super(User, '/users');
  }

  async login(req, res) {
    const { email, password } = req.body;

    const isUser = await this.model.findOne({ where: { email, password } });

    if (!isUser) return res.json({ message: 'User not found!' });

    return isUser;
  }

  routes() {
    const route = super.routes();

    route.post('/users/login', this.login.bind(this));

    return route;
  }
}

module.exports = UserController;
