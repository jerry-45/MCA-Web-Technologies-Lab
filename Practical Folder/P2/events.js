var events = require('events');

var emitter = new events.EventEmitter();

emitter.on('eventname', function(){
    console.log("Event fired");
});

emitter.emit('eventname');