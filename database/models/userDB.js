const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    userName: {
        type: String,
        required: true
    },
    userEmail: {
        type: String,
        unique: true,
        required: true
    },
    userMobile: {
        type: String,
        required: true
    },
    userGender: {
        type: Number,
        required: true
    },
    userPic: {
        type: String,
        required: true
    },
    userAddress: {
        type: String,
        required: true
    },
    userPwd: {
        type: String,
        required: true
    },
    userVerified: {
        type: Boolean,
        required: true
    }

}, {
    timestamps: true
})

const UserModel = mongoose.model('User', userSchema);

module.exports = UserModel;