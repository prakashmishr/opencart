const cartDB = require("../../../database/models/cart")
module.exports = ((productId)=>{
    console.log(productId);
    return cartDB.findOneAndRemove({_id:productId})

})