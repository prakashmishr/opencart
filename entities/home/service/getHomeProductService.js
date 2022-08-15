const productDB = require('../../../database/models/product');


module.exports = ()=>{
   return productDB.find({})

}