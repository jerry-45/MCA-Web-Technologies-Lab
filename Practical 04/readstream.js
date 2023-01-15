var fs=require("fs");
var data='';
var readerStream=fs.createReadStream('abc.txt');//creating the readable stream
readerStream.setEncoding('utf-8');//encoding with utf-8
readerStream.on("data", function(chunk){
    data+=chunk;
})

readerStream.on("end",function(){
    console.log(data);
});