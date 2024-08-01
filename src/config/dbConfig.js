const mysql = require('mysql2/promise');
require('dotenv').config();
const ENVIRONMENT = process.env;
const connection = mysql.createPool({
  host: ENVIRONMENT.HOST,
  user: 'Leandro13',
  password: 'D3C5H2V7M6J5',
  database: 'Marisail',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

module.exports = connection;
