const sendMail = require('../../../utils/sendMail');
const userDB = require('../../../database/models/userDB')

module.exports = function useR(data, img, hash) {
    console.log(data);
    const name = data.fName + ' ' + data.lName;
    const email = data.email;
    const mobile = data.mobileNo;
    const gender = data.customRadio;
    const profilePic = img.filename;
    const address = data.dist + ' ' + data.city + ' ' + data.zip;
    const pwd = hash;

    return userDB.create({
        userName: name,
        userEmail: email,
        userMobile: mobile,
        userGender: gender,
        userPwd: pwd,
        userPic: profilePic,
        userAddress: address,
        userVerified : false

    })


}