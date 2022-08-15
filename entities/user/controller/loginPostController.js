const validateUser = require('../service/userLoginService');
const hashPwd = require('../service/hashpwd')
const getProduct = require('../../home/service/getHomeProductService')


module.exports = (req, res) => {
    console.log(req.body);
    validateUser(req.body).then((user) => {
        if (user) {

            console.log(user);
            hashPwd.decrypt(req.body.pwd, user.userPwd).then((result) => {
                console.log(result);
                console.log(user.userVerified);
                if (result) {
                    if (user.userVerified) {


                        getProduct().then((products) => {

                            req.session.Auth = true;
                            req.session.userName = user.userName;
                            req.session.userID = user._id;
                            res.render("index", {
                                auth: true,
                                name: user.userName,
                                products: products
                            });
                        })
                    }else{
                        res.render('login', {
                            msg: 'USER NOT VERIFIED! PLZ VERIFY EMAIL',
    
                            symbol: 'danger'
                        })
                    }
                } else {
                    res.render('login', {
                        msg: 'wrong password',

                        symbol: 'danger'
                    })
                }

            })
        } else {
            res.render('login', {
                msg: 'USER NOT FOUND',

                symbol: 'danger'
            })
        }
    }).catch((err) => {
        console.log(err);

    })

}