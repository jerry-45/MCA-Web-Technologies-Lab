const events = require('events'); //emit method with arguments
const EventEmitter = require('events');
const emitter = new EventEmitter();

emitter.on('saved',(arg)=> {
    console.log(`event occured: Number 1 : ${arg.n1}, Number 2:  ${arg.n2}`);
});

emitter.emit('saved',{
    n1: '40',
    n2: '80'
});
