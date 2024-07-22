let LoginController = {
  renderLogin(req, res) {
    if (req.cookies.token) {
      res.redirect("/");
    } else {
      res.render("loginAndRegister.ejs");
    }
  },
};

module.exports = LoginController;
