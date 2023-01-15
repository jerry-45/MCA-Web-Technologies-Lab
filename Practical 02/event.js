var events = require('events');     //import module inside the application

var emitter = new events.EventEmitter();    //creating instance/object of EventEmitter

emitter.on('eventname', ()=>{
    //binding event & functions
    console.log("Event getting fired")
});

emitter.emit('eventname');   //fire the event