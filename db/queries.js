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

async function createUser(username, name, password, role) {
    await pool.query("INSERT INTO users (username, name, password, role) VALUES ($1, $2, $3, $4)", [username, name, password, role]);
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

async function addMessage(title, message, author_id) {
    await pool.query("INSERT INTO messages (title, message, author_id) VALUES ($1, $2, $3)", [title, message, author_id]);
}

async function deleteMessage(messageId) {
    await pool.query("DELETE FROM messages WHERE id = $1", [messageId]);
}

module.exports = {
    getAllMessages,
    createUser, 
    getUser,
    getUserById,
    updateRole,
    addMessage, 
    deleteMessage
}