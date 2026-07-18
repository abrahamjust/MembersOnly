const pool = require("./pool");

async function getAllMessages() {
    const { rows } = await pool.query(`
        SELECT
            m.id,
            m.title,
            m.message,
            m.date,
            u.name AS author
        FROM messages m
        JOIN users u
            ON m.author_id = u.userid
        ORDER BY m.date DESC;
    `);

    return rows;
}

async function createUser(username, name, password) {
    await pool.query("INSERT INTO users (username, name, password) VALUES ($1, $2, $3)", [username, name, password]);
}

async function getUser(username) {
    const { rows } = await pool.query("SELECT * FROM users WHERE username = $1", [username]);
    return rows[0];
}

async function getUserById(id) {
    const { rows } = await pool.query("SELECT * FROM users WHERE userid = $1", [id]);

    return rows[0];
}

async function updateRole(role, userid) {
    await pool.query("UPDATE users SET role = $1 WHERE userid = $2", [role, userid]);
}

module.exports = {
    getAllMessages,
    createUser, 
    getUser,
    getUserById,
    updateRole
}