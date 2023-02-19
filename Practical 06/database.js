//connecting to database
var mysql=require('mysql');

var con=mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: ''
});

con.connect(function(err){
    if (err) throw err;
    console.log("connected to server successfully");
});

con.query('create database mydb1',function(err,result){
    if (err) throw err;
    console.log('database created');
});