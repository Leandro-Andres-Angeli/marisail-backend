const mysql = require('mysql2/promise');
require('dotenv').config();
const ENVIRONMENT = process.env;
const connection = mysql.createPool({
  host: ENVIRONMENT.HOST,
  user: ENVIRONMENT.MY_USER,
  password: ENVIRONMENT.MY_PASSWORD,
  database: 'Marisail',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

module.exports = connection;
