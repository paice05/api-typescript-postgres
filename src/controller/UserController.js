const { Router } = require("express");
const User = require("../models/User");

const BaseController = require("./BaseController");

class UserController extends BaseController {
  constructor() {
    super(User, "/users");
  }

  async login(req, res) {
    return res.json({ message: 'Ok' })
  }

  routes() {
    const route = super.routes()

    route.post("/users/login", this.login.bind(this));

    return route;
  }
}

module.exports = UserController;
