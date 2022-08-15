const userDB = require('../../../database/models/userDB')

module.exports = (id,hash)=>{
    var filter = {_id:id};
    var update = {userPwd : hash};

    return userDB.findOneAndUpdate(filter, update)
}