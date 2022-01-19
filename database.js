const mysql = require('mysql2');

const dotenv = require('dotenv');
dotenv.config();

// Database Connection
const db = mysql.createConnection({
	host: process.env.DB_HOST || 'localhost',
	user: process.env.DB_USER || 'root',
	password: process.env.DB_PASSWORD || '',
	database: process.env.DB_DATABASE || '',
});

db.connect((err) => {
	if(err) {
		throw err;
	}
	console.log("Connected to MySQL database");
});

module.exports = db;