var fs=require('fs');
var data="Hello Everyone!!! Good Morning to all."
var writeStream=fs.createWriteStream('output.txt');
writeStream.write(data,'utf8');
writeStream.end();
writeStream.on('finish',function(){});