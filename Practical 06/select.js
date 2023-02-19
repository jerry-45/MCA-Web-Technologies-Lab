//select values from database
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
    var sql="select * from customer";
    con.query(sql, function(err,result,fields){
        if (err) throw err;
        console.log(result);
        con.end();
    });
});