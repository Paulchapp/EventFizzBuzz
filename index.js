const Logger = require('./emitter');
const Logger1 = new Logger();

Logger1.on("messageRecu", function(payload) {
    console.log('Logger 1 : payload =>', payload)
})

const Logger2 = new Logger();
Logger2.on("messageRecu", function(payload) {
    console.log('Logger 2 : payload =>', payload)
})

const EventEmitter = require('event');
const emitter = new EventEmitter();
emitter.on("messageRecu", function(payload) {
    console.log('emitter: payload =>', payload)
})

Logger1.Log('message n°1');
Logger1.Log('message n°2');
Logger1.Log('message n°3');
Logger1.Log('message n°4');