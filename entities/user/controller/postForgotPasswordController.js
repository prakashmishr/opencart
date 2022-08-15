const findUserService = require('../service/findUserService')
const sendemailtoVerifyUser = require('../service/sendMailtoUser')
var jwt = require('jsonwebtoken');

module.exports = (req, res) => {
    var userName = req.body.email;
    findUserService.userName(userName).then((user) => {
        if (user) {
            var token = jwt.sign({
                userId: user._id
            }, 'shhhhh');

            console.log(token);

            // send mail to verify users 
            const msg = 'Reset Your Password';
            const credential = 'forgot/user/password';
            sendemailtoVerifyUser(user, token, msg, credential).then((result) => {
                console.log(result.body)
                res.render('forgotPassword', {
                    msg: 'Mail sent successfully',
                    symbol: 'success'
                })
            }).catch((err) => {
                console.log(err.statusCode)
                console.log(err);
                res.render('forgotPassword', {
                    msg: 'USER NOT FOUND ',
                    symbol: 'danger'
                })
            })
        } else {
            res.render('forgotPassword', {
                msg: 'USER NOT FOUND ',
                symbol: 'danger'
            })
        }
    })
}