const mongoose = require('mongoose');
const  url = "mongodb+srv://prakashmishr:XPGaJLpoQDRh24ns@cluster0.drbse.mongodb.net/opencartDB?retryWrites=true&w=majority"

module.exports = function dbInit(){
    return mongoose.connect(url)
}