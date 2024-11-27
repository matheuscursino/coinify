const mongoose = require("mongoose");
const { Schema } = mongoose;

const ofertaSchema = new Schema({
  nomeUsuario: String,
  idOferta: String,
  valorMoeda: String,
  quantidadeSatoshis: String,
  modoPagamento: String,
  tipoOferta: String
});

const ofertaModel = mongoose.model("offers", ofertaSchema);

module.exports = ofertaModel;