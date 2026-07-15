const db = require("../db/queries");

async function homePage(req, res) {
    const messages = await db.getAllMessages();
    res.render("homepage", { messages });
}

async function handleSignup(req, res) {
    
}

async function handleLogin(req, res) {
    
}

async function addMessage(req, res) {

}

async function deleteMessage(req, res) {
    
}

module.exports = {
    handleSignup,
    handleLogin,
    addMessage,
    deleteMessage,
    homePage
}