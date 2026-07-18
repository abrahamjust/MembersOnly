const { Router } = require("express");
const { handleSignup, addMessage, deleteMessage, homePage, viewPage, joinClub } = require("../controllers/controller");
const passport = require("passport");

const router = Router();

router.get("/", homePage);

router.get("/signup", (req, res) => {
    res.render("signUpPage");
});
router.post("/signup", handleSignup);

router.get("/joinClub", (req, res) => {
    res.render("joinClubPage");
});
router.post("/joinClub", joinClub);

router.get("/login", (req, res) => {
    res.render("loginPage");
});
router.post("/login", 
    passport.authenticate("local", {
        successRedirect: "/view",
        failureRedirect: "/login",
    })
);
router.get("/view", viewPage);

router.post("/addMessage", addMessage);

router.get("/deleteMessage/:messageid", deleteMessage);

module.exports = router;