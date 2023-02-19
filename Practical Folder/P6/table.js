var mysql = require('mysql');

var conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'demo'
});

conn.connect(function(err){
    if(err) throw err;
    console.log('Connection Established....');

    var query = 'create table studentdb(sname varchar(20), srno integer)';

    conn.query(query, function(err, result){
        if(err) throw err;

        console.log('Table created successfully!!!');

        conn.end();
    });
});