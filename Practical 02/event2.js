const EventEmitter = require('events');
const emitter = new EventEmitter();
const n1=20;
const n2=60;
const n3=70;
const n4=30;
const num1=10;
const num2=50;
const num3=40;
const num4=20;

emitter.on('addition',(arg)=> {
    console.log(`Addition of two numbers is = ${arg.sum}`);
});

emitter.emit('addition',{
    sum: n1+n2
});

emitter.on('subtraction',(arg)=> {
    console.log(`Difference of two numbers is = ${arg.sub}`);
});

emitter.emit('subtraction',{
    sub: n3-n4
});

emitter.on('multiplication',(arg)=> {
    console.log(`Multiplication of two numbers is = ${arg.mul}`);
});

emitter.emit('multiplication',{
    mul: num1*num2
});

emitter.on('division',(arg)=> {
    console.log(`Division of two numbers is = ${arg.div}`);
});
    
emitter.emit('division',{
    div: num3/num4
});