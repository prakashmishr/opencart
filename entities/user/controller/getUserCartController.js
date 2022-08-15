const getCartItemServices = require('../service/getCartItemService')
const getProductForCartService = require('../service/getProductForCart')

module.exports = (req, res) => {
    if (req.session.Auth) {
        // console.log(req.session.userID);
        getCartItemServices(req.session.userID).then((items) => {
            // console.log("===>",items);
            res.render('cart', {
                auth: true,
                name: req.session.userName,
                items: items

            })
        })
    } else {


        res.render('login', {
            msg: 'PLZ LOGIN TO YOUR ACCOUNT',
            symbol: 'danger'
        })

    }
}