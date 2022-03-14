const mysql = require('mysql2');

const db = mysql.createConnection({
    host: 'localhost',
// sql username
    user: 'root',
    password: 'Jesus777',
    database: 'employee'
},
);


module.exports = db;