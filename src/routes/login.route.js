const express = require("express");
const loginRouter = express.Router();
const LoginController = require("../controllers/login.controller.js")

loginRouter.get("/", LoginController.renderLogin);

module.exports = loginRouter;