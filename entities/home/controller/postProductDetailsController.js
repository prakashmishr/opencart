const findProductDetailService = require('../service/findProductDetailService')

module.exports = (req, res) => {
    console.log(req.body);
    findProductDetailService(req.body.productID).then((product) => {
        // console.log(product);
        if (req.session.Auth) {
            res.render('productDetails', {
                product: product,
                auth: true,
                name: req.session.userName,
            })
        } else {
            res.render('productDetails', {
                product: product,
                auth: false
            })
        }
    }).catch((err) => {
        console.log(err)
    })
}