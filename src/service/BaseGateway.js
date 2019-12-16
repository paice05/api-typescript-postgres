class BaseGateway {
  constructor(service) {
    this.service = service;

    this.registerListeners();
  }

  registerListeners() {
    this.service.getEvents().forEach((event) => {
      this.service.on(event, data => this.eventListener(event, data));
    });
  }

  eventListener(event, data) {}
}

module.exports = BaseGateway;
