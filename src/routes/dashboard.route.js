const express = require("express");
const dashboardRouter = express.Router();
const DashboardController = require("../controllers/dashboard.controller.js")

dashboardRouter.get("/", DashboardController.renderDashboard);

module.exports = dashboardRouter;