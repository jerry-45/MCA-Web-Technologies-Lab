var mysql = require('mysql');

var conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: ''
});

conn.connect(function(err){
    if(err) throw err;
    console.log('Connection Established....');

    var query = 'create database demo';

    conn.query(query, function(err, result){
        if(err) throw err;

        console.log('Database created successfullt!!!');
    });
});