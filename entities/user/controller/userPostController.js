const hashPwd = require('../service/hashpwd')
const userSignupService = require('../service/userSignupservice')
const sendemailtoVerifyUser = require('../service/sendMailtoUser')

var jwt = require('jsonwebtoken');



module.exports = (req, res) => {
        console.log("-->", req.body);
        // console.log("-->", req.file);
        var passformat = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@#!%*?&])[A-Za-z\d$@$!%*?&]{8,16}$/;
        
        if (!(passformat.test(req.body.pswd))){
            res.render('signup', {
                msg: 'PASSWORD SHOULD BE IN GIVEN CRETERIA',
                symbol: 'danger'
            })
            return
        } 




            //hash the password
            hashPwd.encrypt(req.body.pswd).then(function (hash) {

                //create user
                userSignupService(req.body, req.file, hash).then((user) => {

                    console.log('user created sucessfull');

                    // creating tokens for verifying user
                    var token = jwt.sign({
                        userId: user._id
                    }, 'shhhhh');

                    console.log(token);


                    // send mail to verify users 
                    const msg = 'verify your account';
                    const credential = 'confirm';
                    sendemailtoVerifyUser(user, token, msg, credential).then((result) => {
                        console.log(result.body)
                        res.render('signup', {
                            msg: 'USER REGISTERED SUCCESSFUL',
                            symbol: 'success'
                        })
                    }).catch((err) => {
                        console.log(err.statusCode)
                        console.log(err);
                        res.render('signup', {
                            msg: 'USER ALREADY REGISTERED ',
                            symbol: 'danger'
                        })

                    })
                })
            })
        }