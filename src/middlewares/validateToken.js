const jwt = require("jsonwebtoken");

var verifyToken = (req, res, next) => {
  let token = req.cookies.token;

  if (!token) {
    return res.status(403).send({ message: "nao autorizado" });
  }

  jwt.verify(token, process.env.SECRET, (err, decoded) => {
    if (err) {
      return res.status(401).send({
        message: "nao autorizado",
      });
    } else {
      req.userId = decoded.userId;
      next();
    }
  });
};

module.exports = verifyToken;