const userModel = require("../models/user.model.js");
const { validationResult } = require("express-validator");

let UsersController = {
  createUser(req, res) {
   const errors = validationResult(req);
    if (errors.isEmpty()) {
      var name = req.body.name;
      var email = req.body.email;
      var password = req.body.password;

      var User = new userModel({
        name: name,
        email: email,
        password: password,
        isAdmin: false
      });
      User.save().then(() => {
        res.status(201).send({ message: "conta registrada" });
      });
    } else {
      res.status(400).send({errors: errors})
    }
  },
};

module.exports = UsersController;