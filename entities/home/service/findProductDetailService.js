const productDB = require('../../../database/models/product')

module.exports = (productID) => {
    return productDB.findOne({
        _id: productID
    })

}