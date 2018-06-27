exports.index = (req, res) => {
    let attribute = {
        appName: "Express + Nunjucks",
        message: "Welcome!"
    };

    res.render("home/index", { attribute: attribute });
};