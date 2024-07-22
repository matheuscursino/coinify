const userModel = require("../models/user.model.js");
const { check } = require("express-validator");

function createValidatorFor(route, req, res, next) {
  switch (route) {
    case "signup":
      return [
        check("name", "Nome vazio").not().isEmpty(),
        check("email", "Email vazio").not().isEmpty(),
        check("email", "Email invalido")
          .isEmail()
          .normalizeEmail()
          .trim()
          .escape(),
        check("email").custom(async (value) => {
          const user = await userModel.findOne({ email: value }).exec();
          if (user) {
            throw new Error("Este email já está em uso");
          }
        }),
        check("password", "Senha vazia").not().isEmpty(),
        check("password", "O número minimo de caracteres para senha é 6")
          .isLength({
            min: 6,
          })
          .trim()
          .escape(),
        check("name", "Nome vazio").not().isEmpty(),
        check("name", "O número maximo de caracteres para o nome é 15")
          .isLength({
            max: 15,
          })
          .trim()
          .escape(),
      ];
      break;
    case "signin":
      return [
        check("email", "Email vazio").not().isEmpty(),
        check("email", "Email invalido")
          .isEmail()
          .normalizeEmail()
          .trim()
          .escape(),
        check("email").custom(async (value) => {
          const user = await userModel.findOne({ email: value }).exec();
          if (!user) {
            throw new Error("Este email não está cadastrado");
          }
        }),
        check("password", "Senha vazia").not().isEmpty(),
        check("password", "O número minimo de caracteres para senha é 6")
          .isLength({
            min: 6,
          })
          .trim()
          .escape(),
      ]
  }
}

module.exports = createValidatorFor;