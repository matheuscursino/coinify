const express = require("express");
const apiUserRouter = express.Router();
const UsersController = require("../controllers/api.users.controller.js");
const createValidatorFor = require("../middlewares/createValidatorFor.js");
// const verifyToken = require("../middlewares/validateToken.js");

apiUserRouter.post("/", createValidatorFor("signup"), UsersController.createUser);

module.exports = apiUserRouter;