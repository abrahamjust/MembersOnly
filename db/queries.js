const pool = require("./pool");

async function getAllMessages() {
    const { rows } = await pool.query("SELECT * FROM messages")
    return rows;
}

async function createUser(username, password, role) {
    await pool.query("INSERT INTO users (username, password, role) VALUES ($1, $2, $3)", [username, password, role]);
}

async function getUser(username) {
    const { rows } = await pool.query("SELECT * FROM users WHERE username = $1", [username]);
    return rows[0];
}