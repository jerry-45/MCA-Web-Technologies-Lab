const http=require('http');//including http module
http.createServer((req,res) =>{
    res.write("Hello Everyone!!! My Name is Atul Vishwakarma.");
    res.end();
}).listen(5000);

console.log('Server is running properly on port 5000');