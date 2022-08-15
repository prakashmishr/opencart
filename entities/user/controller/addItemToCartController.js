const addTOcartServices = require('../service/addTOcartServices')
module.exports = (req, res) => {
    console.log(req.body);
    console.log(req.body.productId, req.body.quantity,req.session.userID);
    if(req.session.Auth){
        addTOcartServices(req.body,req.session.userID).then((item)=>{
            console.log(item)
            res.redirect('/user/cart')
        }).catch((err)=>{
            console.log(err)
            res.redirect('/user/cart')
        })
    }else{
        res.render('login', {
            msg: 'PLZ LOGIN TO YOUR ACCOUNT',

            symbol: 'danger'
        })
    }
}