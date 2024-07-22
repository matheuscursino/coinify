const express = require("express");
const homeRouter = express.Router();
const HomeController = require("../controllers/home.controller.js")

homeRouter.get("/", HomeController.renderHome);

module.exports = homeRouter;