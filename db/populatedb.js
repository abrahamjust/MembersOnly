const { Client } = require("pg");
require("dotenv").config();

const SQL = `

CREATE TABLE IF NOT EXISTS users (
    userid INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    username VARCHAR ( 255 ) UNIQUE NOT NULL,
    password VARCHAR ( 255 ) NOT NULL,
    role VARCHAR ( 255 ) NOT NULL DEFAULT 'user'
);

CREATE TABLE IF NOT EXISTS messages (
    id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    title VARCHAR ( 255 ) NOT NULL,
    message TEXT NOT NULL,
    author_id INTEGER REFERENCES users(userid),
    date TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
`

async function main() {
    console.log("seeding...");
    const client = new Client({
    connectionString: `postgresql://${process.env.USER}:${process.env.DB_PASSWORD}@${process.env.HOST}:${process.env.DB_PORT}/${process.env.DATABASE}`,
    });
    await client.connect();
    await client.query(SQL);
    await client.end();
    console.log("done");
}

main();