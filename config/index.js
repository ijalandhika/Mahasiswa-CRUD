const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost', 
    user: 'root', 
    password: 'password', 
    database: 'mydb'
});

connection.connect((err) => {
    if(err) throw err;
});

module.exports = connection;