const express = require("express");
const path = require("node:path");
const session = require("express-session");
const passport = require("passport");
const router = require("./routers/router");
require("dotenv").config();
require("./config/passport");

const app = express();
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: false }));
app.use(session({ secret: process.env.SESSION_SECRET, resave: false, saveUninitialized: false }));
app.use(passport.session());

app.use("/", router);

const PORT = process.env.SERVER_PORT || 3000;
app.listen(PORT, (error) => {
    if (error) {
        throw error;
    }
    console.log(`App listening on port ${PORT}`);
});