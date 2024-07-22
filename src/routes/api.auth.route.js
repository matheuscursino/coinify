const express = require("express");
const apiAuthRouter = express.Router();
const AuthController = require("../controllers/api.auth.controller.js");
const createValidatorFor = require("../middlewares/createValidatorFor.js");
const verifyToken = require("../middlewares/validateToken.js");

apiAuthRouter.get("/", verifyToken, AuthController.checkToken);
apiAuthRouter.post("/", createValidatorFor("signin"), AuthController.createToken);

module.exports = apiAuthRouter;