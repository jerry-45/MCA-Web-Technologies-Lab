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

    query = 'insert into studentdb (sname, srno) values ?';

    var values = [
        ['Atul', 1],
        ['Deepak', 2],
        ['Nitika', 3],
        ['Rani', 4]
    ];

    conn.query(query, [values], function(err, result, fields){
        if(err) throw err;

        console.log(result);
    });
});