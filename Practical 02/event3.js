var events = require('events');
var eventEmitter = new events.EventEmitter();

// listener #1
var listner1 = function listner1() {
    console.log('Listner 1 is executed.');
}

// listener #2
var listner2 = function listner2() {
    console.log('Listner 2  is executed.');
}

// Bind the connection event with the listner1 function
eventEmitter.addListener('connection', listner1);

// Bind the connection event with the listner2 function
eventEmitter.on('connection', listner2);

var eventListeners = require('events').EventEmitter.listenerCount(eventEmitter,'connection');
console.log(eventListeners + " Listner(s) listening to connection event");

//fire the connection event
eventEmitter.emit('connection');

//remove the binding of listner1 function
eventEmitter.removeListener('connection', listner1);
console.log("Listner 1 will not listen now.");

//fire the connection event
eventEmitter.emit('connection');
eventListeners = require('events').EventEmitter.listenerCount(eventEmitter,'connection');
console.log(eventListeners + "Listner(s) listening to connection event");
console.log("Program is Ended..");