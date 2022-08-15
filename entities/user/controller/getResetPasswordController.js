const findUserService = require('../service/findUserService')

module.exports = (req, res) => {
    console.log(req.params.token);
    var jwt = require('jsonwebtoken');
    var key = req.params.token;
    // console.log('l5', key);
    var decoded = jwt.verify(key, 'shhhhh');
    console.log(decoded.userId)
    findUserService.userId(decoded.userId).then((user) => {
        console.log("L10 ", user._id,"hi");
        res.render('setNewPassword', {
            userId:user._id,
            msg: '',
            symbol: ''
        })

    })
}