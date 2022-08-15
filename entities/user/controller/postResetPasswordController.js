const hashPwd = require('../service/hashpwd')
const findUserAndUpdate = require('../service/findUserAndUpdateService')

module.exports = (req, res) => {
    console.log(req.body);
    const userId = req.body.userid;
    var passformat = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@#!%*?&])[A-Za-z\d$@$!%*?&]{8,16}$/;

    if (!(passformat.test(req.body.newPwd1))) {
        res.render('setNewPassword', {
            userId: userId,
            msg: 'PASSWORD SHOULD HAVE Minimum 8 characters max 16 chars at least 1 Uppercase Alphabet, 1 Lowercase Alphabet, 1 Number and 1 Special Character',
            symbol: 'danger'
        })

        return
    }
    
    let pw1 = req.body.newPwd1;
    let pw2 = req.body.newPwd2;
    console.log(userId, 'hi')
    console.log(pw1, pw2)
    if (pw1 !== pw2) {
        res.render('setNewPassword', {
            userId: userId,
            msg: 'PASSWORD DONOT MATCHED',
            symbol: 'danger'
        })
    } else {
        hashPwd.encrypt(pw1).then(function (hash) {

            findUserAndUpdate(userId, hash).then((user) => {
                console.log(user);
                res.render('login', {
                    msg: 'PASSWORD RESET SUCCESSFULLY',
                    symbol: 'success'
                })
            }).catch((err) => {
                console.log(err);
            })

        })
    }
}