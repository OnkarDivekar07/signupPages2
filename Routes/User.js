const express = require("express");
const router = express.Router();
const controller = require("../Controller/User");
const auth = require("../Middleware/auth");

router.post("/signup", controller.SignUP);
router.post("/Login", controller.Login);
router.get("/getuserinfo", auth.verify, controller.getInfo);

module.exports = router;
