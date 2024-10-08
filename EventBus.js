const EventEmitter = require('events');

// Creamos el EventBus
class EventBus extends EventEmitter {}

const eventBus = new EventBus();
module.exports = eventBus;