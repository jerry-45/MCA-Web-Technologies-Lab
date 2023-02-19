//delete values from the table
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
    var sql="delete from customer where address='Andheri'";
    con.query(sql, function(err,result,fields){
        if (err) throw err;
        console.log(result);
        con.end();
    });
});