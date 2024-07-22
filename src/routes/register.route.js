const express = require("express");
const registerRouter = express.Router();
const RegisterController = require("../controllers/register.controller.js")

registerRouter.get("/", RegisterController.renderRegister);

module.exports = registerRouter;