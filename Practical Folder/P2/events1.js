var events = require('events');

var emitter = new events.EventEmitter();

emitter.on('number', (arg)=>{
    console.log('Event occured...');
    console.log(`Number 1: ${arg.n1}`);
    console.log(`Number 2: ${arg.n2}`);
});

emitter.emit('number', {
    n1:'5',
    n2:'9'
});