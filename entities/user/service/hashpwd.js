const bcrypt = require('bcrypt');
const saltRounds = 10;



module.exports.encrypt = (data) => {
    
    const myPlaintextPassword = data;
    console.log(myPlaintextPassword);
    return bcrypt.hash(myPlaintextPassword, saltRounds)
}

module.exports.decrypt = (pwd,hash)=>{
    return bcrypt.compare(pwd, hash) 
}
