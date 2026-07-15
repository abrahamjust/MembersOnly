const { Pool } = require("pg");

module.exports = new Pool({
    host: process.env.HOST,
    user: process.env.USER,
    database: process.env.DATABASE,
    password: process.env.DB_PASSWORD,
    port: DB_PORT
});