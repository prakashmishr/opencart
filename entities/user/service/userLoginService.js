const userDB = require('../../../database/models/userDB');
 

module.exports = (data) => {
    const userName = data.email;
    console.log(userName);


  
    return userDB.findOne({
        userEmail : userName
    })


}