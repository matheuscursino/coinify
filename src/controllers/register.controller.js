let RegisterController = {
  renderRegister(req, res) {
    if (req.cookies.token) {
      res.redirect("/");
    } else {
      res.render("loginAndRegister.ejs");
    }
  },
};

module.exports = RegisterController;
