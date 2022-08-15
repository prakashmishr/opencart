const cartDB = require('../../../database/models/cart')

module.exports = (userId)=>{
    return cartDB.find({userID:userId})
}