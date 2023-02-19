//insert values in the database
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
    var sql="insert into customer (name,address) values ?";
    var values = [
                    ['Rohit','Vasai'],      
                    ['Manoj','Andheri'],
                    ['Ramesh','Bandra'],
                    ['Mahesh','Borivali'],
                    ['Suresh','Dahisar']
                ]
    con.query(sql, [values], function(err,result){
        if (err) throw err;
        console.log('records inserted');
        con.end();
    });
});
