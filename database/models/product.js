const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    productName: {
        type: String,
        required: true
    },
    productId: {
        type: String,
        required: true
    },
    productQuantity: {
        type: Number,
        required: true
    },
    productCategory: {
        type: String,
        required: true
    },
    productDescription: {
        type: String,
        required: true
    },
    productPrice: {
        type: Number,
        required: true
    },
    productImg: {
        type: String,
        required: true
    },


}, {
    timestamps: true
})

const productModel = mongoose.model('Product',productSchema)

module.exports = productModel;