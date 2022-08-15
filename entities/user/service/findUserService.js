const userDB = require('../../../database/models/userDB')

module.exports.userName = (email)=>{
   return userDB.findOne({userEmail:email})
}
module.exports.userId = (Id)=>{
   return userDB.findOne({_id: Id})
}