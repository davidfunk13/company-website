  const appController = {
    landing: (req, res) => {
            res.render("index");
    },
    pageTwo: (req, res) => {
        res.render("2")
    }
}; 

module.exports = appController;