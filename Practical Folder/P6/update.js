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

    var query = "update studentdb set sname='Jerry' where sname='Rani'";

    conn.query(query, function(err, result, fields){
        if(err) throw err;

        console(result);

        conn.end();
    });
});