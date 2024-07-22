let HomeController = {
    renderHome(req, res){
        if(req.cookies.token == undefined){
            res.render("home");
        } else {
            res.redirect("/dashboard");
        }
    }
};

module.exports = HomeController;