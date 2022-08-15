const cartDB = require('../../../database/models/cart')
module.exports = (products,userId)=>{
    // console.log(productId,quantity,userId);
    console.log(products);
    return cartDB.create({
        userID: userId,
        productID:products.productId,
        productName:products.productName,
        productPrice:products.productPrice,
        productQuantity:products.quantity,
        productImg:products.productImg,
        productDespt : products.productDesp
    })
}