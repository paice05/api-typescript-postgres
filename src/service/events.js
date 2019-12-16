const { EventEmitter } = require('events');

const CREATED = 'CREATED';
const UPDATED = 'UPDATED';
const DESTROYED = 'DESTROYED';

class Events {
  constructor() {
    this.emitter = new EventEmitter();
    this.events = [CREATED, UPDATED, DESTROYED];
  }

  emit(event, data) {
    if ((Array.isArray(data) && !data.length) || !data) {
      return null;
    }

    if (this.emitter && this.emitter.emit) {
      return this.emitter.emit(event, data);
    }

    return null;
  }

  on(event, listener) {
    if (this.emitter && this.emitter.emit) {
      return this.emitter.on(event, listener);
    }

    return null;
  }

  emitCreated(data) {
    return this.emit(CREATED, data);
  }

  emitUpdated(data) {
    return this.emit(UPDATED, data);
  }

  emitDestroyed(data) {
    return this.emit(DESTROYED, data);
  }

  onCreated(listener) {
    return this.on(CREATED, listener);
  }

  onUpdated(listener) {
    return this.on(UPDATED, listener);
  }

  onDestroyed(listener) {
    return this.on(DESTROYED, listener);
  }

  getEmitter() {
    return this.emitter;
  }

  getEvents() {
    return this.events;
  }
}

module.exports = {
  Events,
  CREATED,
  UPDATED,
  DESTROYED
};
