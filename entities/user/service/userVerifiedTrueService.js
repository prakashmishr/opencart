const userDB = require('../../../database/models/userDB')


module.exports = (id) => {
    const filter = {_id : id};
    const update = {userVerified : true};
    return userDB.findOneAndUpdate(filter,update);
}