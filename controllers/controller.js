const { name } = require("ejs");
const db = require("../db/queries");
const bcrypt = require("bcryptjs");

async function homePage(req, res) {
    const messages = await db.getAllMessages();
    res.render("homepage", { messages });
}

async function handleSignup(req, res) {
    const { name, email, password } = req.body;

    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        await db.createUser(email, name, hashedPassword);
        res.redirect("/login");
    } catch (error) {
        console.error(error);
        res.status(500).send("Something went wrong.");
    }
}

async function viewPage(req, res) {
    const messages = await db.getAllMessages();

    console.log(req.user);

    console.log(messages);
    res.render("viewPage", {
        messages,
        user: req.user,
    })
}

async function joinClub(req, res) {
    const { username, code } = req.body;
    const user = await db.getUser(username);
    if (!user) {
        return res.status(400).send("Username doesn't exit."); 
    }
    if (code != process.env.CLUB_PASSWORD) {
        return res.status(400).send("wrong code");
    }
    await db.updateRole("member", user.userid);
    res.redirect("/");
}

async function addMessage(req, res) {

}

async function deleteMessage(req, res) {
    
}

module.exports = {
    handleSignup,
    addMessage,
    deleteMessage,
    homePage,
    viewPage,
    joinClub
}