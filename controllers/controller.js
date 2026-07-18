const { name } = require("ejs");
const db = require("../db/queries");
const bcrypt = require("bcryptjs");

async function homePage(req, res) {
    const messages = await db.getAllMessages();
    res.render("homepage", { messages });
}

async function handleSignup(req, res) {
    const { name, email, password } = req.body;
    let role = "user";
    try {
        if (password == process.env.ADMIN_PASSWORD) {
            role = "admin";
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        await db.createUser(email, name, hashedPassword, role);
        res.redirect("/login");
    } catch (error) {
        console.error(error);
        res.status(500).send("Something went wrong.");
    }
}

async function viewPage(req, res) {
    const messages = await db.getAllMessages();
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
    const { title, messageInput } = req.body;
    await db.addMessage(title, messageInput, req.user.userid);
    res.redirect("/view");
}

async function deleteMessage(req, res) {
    let messageId = req.params.messageid;
    await db.deleteMessage(messageId);
    res.redirect("/view");

}

function logout(req, res, next) {
    req.logout((err) => {
    if (err) {
        return next(err);
    }
        res.redirect("/");
    });
}

module.exports = {
    handleSignup,
    addMessage,
    deleteMessage,
    homePage,
    viewPage,
    joinClub,
    logout
}