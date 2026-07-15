const { Router } = require("express");
const { handleSignup, handleLogin, addMessage, deleteMessage, homePage } = require("../controllers/controller");

const router = Router();

router.get("/", homePage);

router.get("/signup", (req, res) => {
    res.render("signUpPage");
});
router.post("/signup", handleSignup);


router.get("/login", (req, res) => {
    res.render("loginPage");
});
router.post("/login", handleLogin);

router.post("/addMessage", addMessage);

router.get("/deleteMessage/:messageid", deleteMessage);

module.exports = router;