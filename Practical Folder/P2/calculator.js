var events = require('events');

var emitter = new events.EventEmitter();

const n1 = 5;
const n2 = 6;
const n3 = 8;
const n4 = 10;
const n5 = 56;
const n6 = 2;
const n7 = 98;
const n8 = 4;

emitter.on('addition', (arg)=>{
    console.log(`Addition: ${arg.sum}`);
});

emitter.emit('addition',{
    sum: n1 + n2
});

emitter.on('subtraction', (arg)=>{
    console.log(`Subtraction: ${arg.sub}`);
});

emitter.emit('subtraction', {
    sub : n3 - n4
});

emitter.on('Multiplication', (arg)=>{
    console.log(`Multiplication: ${arg.mul}`);
});

emitter.emit('Multiplication',{
    mul: n5 * n6
});

emitter.on('Division', (arg)=>{
    console.log(`Division: ${arg.div}`);
});

emitter.emit('Division', {
    div : n7 / n8
});