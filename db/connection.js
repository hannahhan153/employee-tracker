const mysql = require('mysql2');

// Connect to database
const db = mysql.createConnection(
    {
      host: 'localhost',
      // Your MySQL username,
      user: 'root',
      // Your MySQL password
      password: 'Jesus777',
      database: 'employee'
    },
    console.log('Connected to the employee database.')
  );


  module.exports = db;