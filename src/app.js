const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");

const homeRouter = require("./routes/home.route.js");
const registerRouter = require("./routes/register.route.js");
const loginRouter = require("./routes/login.route.js");
const dashboardRouter = require("./routes/dashboard.route.js");
const ofertasRouter = require("./routes/ofertas.route.js");
const apiAuthRouter = require("./routes/api.auth.route.js");
const apiUsersRouter = require("./routes/api.users.route.js");

app.use(express.static(__dirname + '/public'));



const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, './.env') });

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


app.use(cookieParser())

mongoose.connect(process.env.MONGO_URL).then(() => {
    console.log("connected to db");
});

app.use("/", homeRouter);
app.use("/register", registerRouter);
app.use("/login", loginRouter);
app.use("/ofertas", ofertasRouter);
app.use("/dashboard", dashboardRouter);
app.use("/api/users", apiUsersRouter);
app.use("/api/auth", apiAuthRouter);
app.use("*", function(req, res){
    res.render("404")
})

module.exports = app;