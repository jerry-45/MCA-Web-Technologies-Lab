function sum(x, y){
    sum = x + y;
    console.log("Sum of numbers is " + sum);
}

function sub(x, y){
    sub = x - y;
    console.log("Difference of numbers is " + sub);
}

function div(x, y){
    div = x / y;
    console.log("Division of numbers is " + div);
}

function mul(x, y){
    mul = x * y;
    console.log("Multiplication of numbers is " + mul);
}

function cube(x){
    cube = x * x * x;
    console.log("Volume of cube is " + cube);
}

function rect(l, b){
    area = l * b;
    console.log("Area of rectangle is " + area);
}

function square(a){
    area = a ** 2;
    console.log("Area of square is " + area);
}

sum(10, 20);
sub(60, 50);
div(35, 5);
mul(6, 2);
cube(4);
rect(20, 30);
square(60);