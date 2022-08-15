const sendMail = require('../../../utils/sendMail');


// var decoded = jwt.verify(token, 'shhhhh');
// console.log(decoded.foo) // bar

module.exports = (user,token,message,credential) => {
    const subject = 'CONFIRM YOUR EMAIL';
    const username = user.userName;
    const url = "http://localhost:3000/user/"+credential+"/"+token;
    const msg = message;
    console.log(user)
    const body = "<h3>Hi " + username + ", Welcome to openCart.</h3> <br /><h4> <a href=" + url + ">Click Here </a> to "+msg+".</h4><br />May the cart brings happiness for you!!"

    return sendMail(user.userEmail, user.userName, subject, body)

}