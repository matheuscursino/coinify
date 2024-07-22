let DashboardController = {
    renderDashboard(req, res){
        if(req.cookies.token == undefined){
            res.redirect("/");
        } else {
            res.render("dashboard");
        }
    }
};

module.exports = DashboardController;