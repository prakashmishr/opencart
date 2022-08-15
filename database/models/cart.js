const mongoose = require('mongoose');

const cartSchema = new mongoose.Schema({
   userID: {
        type: String,
        required: true
    },
    productName: {
        type: String,
        required: true
    },
    productID: {
        type: String,
        unique: true,
        required: true
    },
    productImg: {
        type: String,
        required: true
    },
    productDespt: {
        type: String,
        required: true
    },
    
    productQuantity: {
        type: Number,
        required: true
    },
    productPrice: {
        type: Number,
        required: true
    }

}, {
    timestamps: true
})

const cartModel = mongoose.model('Cart',cartSchema)

module.exports = cartModel;