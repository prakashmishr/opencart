const productDB = require("../../../database/models/product")
module.exports = ((productId)=>{
    return productDB.findOne({id:productId})

})