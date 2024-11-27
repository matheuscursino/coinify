const express = require("express");
const ofertasRouter = express.Router();
const OfertasController = require("../controllers/ofertas.controller.js")

ofertasRouter.get("/", OfertasController.renderOfertas);

module.exports = ofertasRouter;