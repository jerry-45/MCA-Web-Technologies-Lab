var mysql = require('mysql');

var conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'demo'
});

conn.connect(function(err){
    if(err) throw err;
    console.log('Connection Established...');

    query = 'drop table studentdb';

    conn.query(query, function(err, result, fileds){
        if(err) throw err;

        console.log(result);
    });
});