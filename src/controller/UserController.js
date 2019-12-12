const jwt = require('jsonwebtoken');

// models
const User = require('../models/User');

// base-controller
const BaseController = require('./BaseController');

class UserController extends BaseController {
  constructor() {
    super(User, '/users');
  }

  async login(req, res) {
    const { username, password } = req.body;

    const isUser = await this.model.findOne({ where: { username, password } });

    if (!isUser) return res.json({ message: 'User not found!' });

    return jwt.sign(
      { isUser },
      process.env.SECRET_JWT,
      { expiresIn: '8d' },
      (err, token) => {
        if (err) return res.json({ message: String(err) });

        return res.json({
          token,
          data: isUser
        });
      }
    );
  }

  routes() {
    const route = super.routes();

    route.post('/auth', this.login.bind(this));

    return route;
  }
}

module.exports = UserController;
