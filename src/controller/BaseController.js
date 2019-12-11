const { Router } = require("express");

class BaseController {
  constructor(model, path) {
    this.model = model;
    this.path = path;
  }

  async index(req, res) {
    const response = await this.model.findAll();

    return res.json(response);
  }

  async show(req, res) {
    const { id } = req.params;

    const response = await this.model.findByPk(id);

    if (!response) return res.json({ message: "Record not found" });

    return res.json(response);
  }

  async store(req, res) {
    const response = await this.model.create(req.body);

    return res.json(response);
  }

  async update(req, res) {
    const { id } = req.params;
    const { body } = req;

    const isRecord = await this.model.findByPk(id);

    if (!isRecord) return res.json({ message: "record not found!" });

    const [number, response] = await this.model.update(
      { ...body },
      { where: { id } },
      { returning: true }
    );

    return res.json({ number, response });
  }

  async destroy(req, res) {
    const { id } = req.params;

    const isRecord = await this.model.findByPk(id);

    if (!isRecord) return res.json({ message: "record not found!" });

    await this.model.destroy({ where: { id } });

    return res.status(200).json({ message: "OK" });
  }

  routes() {
    const route = Router();

    route.get(this.path, this.index.bind(this));
    route.get(`${this.path}/:id`, this.show.bind(this));
    route.post(this.path, this.store.bind(this));
    route.put(`${this.path}/:id`, this.update.bind(this));
    route.delete(`${this.path}/:id`, this.destroy.bind(this));

    return route;
  }
}

module.exports = BaseController;
