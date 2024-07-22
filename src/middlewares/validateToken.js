const jwt = require("jsonwebtoken");

var verifyToken = (req, res, next) => {
  let token = req.cookies.token;

  if (!token) {
    return res.status(403).send({ message: "Unauthorized" });
  }

  jwt.verify(token, process.env.SECRET, (err, decoded) => {
    if (err) {
      return res.status(401).send({
        message: "Unauthorized",
      });
    } else {
      req.userId = decoded.userId;
      next();
    }
  });
};

module.exports = verifyToken;