const getProduct = require('../service/getHomeProductService')

module.exports = (req, res) => {
    getProduct().then((products) => {
        // console.log(products);
        if (req.session.Auth) {
            res.render("index", {
                auth: true,
                name: req.session.userName,
                products: products
            })

        } else {

            res.render("index", {
                auth: false,
                name: '',
                products: products
            })
        }
    })
}