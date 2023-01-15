var fs=require('fs');
console.log('Here we are login');
console.log('This is a starting point.');
var content=fs.readFile('data.txt',function(error,data){
    if(error)
    {
        console.error(error);
        return;
    }
    console.log(data.toString());
});

console.log('All operations completed');