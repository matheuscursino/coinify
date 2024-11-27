let OfertasController = {
    renderOfertas(req, res) {
      if (req.cookies.token) {
        res.render("ofertas.ejs")
      } else {
        res.render("loginAndRegister.ejs");
      }
    },
  };
  
  module.exports = OfertasController;
  