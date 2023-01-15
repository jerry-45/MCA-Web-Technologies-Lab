var firstname='Atul'; //scope of variable in function
function myname(){
    var firstname='Jerry';
    console.log(firstname);
}
myname();
console.log(firstname);