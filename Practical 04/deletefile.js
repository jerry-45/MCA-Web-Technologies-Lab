var fs = require('fs');
fs.unlink('xyz.txt',function(){
    console.log("delete completed")
});