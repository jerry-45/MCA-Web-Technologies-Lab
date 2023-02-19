//create table in the database
var mysql=require('mysql');

var con=mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'mydb1'
});

con.connect(function(err){
    if (err) throw err;
    console.log("connected to server successfully");
    var sql="create table customer(name varchar(20), address varchar(25))"
    con.query(sql, function(err,result){
        if (err) throw err;
        console.log('table created');
        con.end();
    });
    
});