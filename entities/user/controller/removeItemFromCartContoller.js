const removeProductFromCartService = require('../service/removeProductFromCartService')

module.exports = (req,res)=>{
    console.log(req.body);
    removeProductFromCartService(req.body.productId).then((count)=>{
        console.log(count);
        res.redirect('/user/cart')
    }).catch((err)=>{
        console.log(err);
    })
}