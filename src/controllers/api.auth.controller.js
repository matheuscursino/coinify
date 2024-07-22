const jwt = require("jsonwebtoken");
const userModel = require("../models/user.model.js");

const { validationResult } = require("express-validator");

let AuthController = {
  checkToken(req, res) {
    var id = req.userId;
    userModel.findById(id).then((user) => {
      res.send({ data: user });
    });
  },
  createToken(req, res) {
    const errors = validationResult(req);
    if (errors.isEmpty()) {
      var emailInput = req.body.email;
      var passwordInput = req.body.password;

      userModel.findOne({ email: emailInput }).then((user) => {
        if (user) {
          if (passwordInput == user.password) {
            const userId = user._id;
            var token = jwt.sign({ userId }, process.env.SECRET);

            res
              .cookie("token", token, {
                httpOnly: false,
                sameSite: "none",
                secure: true,
              })
              .send({ message: "Logged in successfully" });
          } else {
            res.status(400).send({error: "Senha incorreta"})
          }
        }
      });
    } else {
      res.status(400).send({ errors: errors });
    }
  },
};

module.exports = AuthController;
