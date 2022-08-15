const productDB = require('../../../database/models/product')

module.exports = (data, img) => {
    console.log('===============>');
    const productName = data.productName;
    const productId = data.productId;
    const productQuantity = data.productQuantity;
    const productCategory = data.productCategory;
    const productPrice = data.productPrice;
    const productDescription = data.productDescription;
    const productImg = img.filename;

    return productDB.create({
        productName: productName,
        productId: productId,
        productQuantity: productQuantity,
        productCategory: productCategory,
        productPrice: productPrice,
        productDescription: productDescription,
        productImg: productImg
    })


}