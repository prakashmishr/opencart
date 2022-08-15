const userVerifiedTrueService = require('../service/userVerifiedTrueService')

module.exports = (req, res) => {
    var jwt = require('jsonwebtoken');
    var key = req.params.token;
    // console.log('l5', key);
    var decoded = jwt.verify(key, 'shhhhh');
    console.log(decoded.userId)
    userVerifiedTrueService(decoded.userId).then((user) => {
        console.log("L10 ",user);
        res.render('login', {
            msg: 'USER VERIFIED SUCESSFULL! PLZ LOGIN',
            symbol:'success'
        })

    })
}