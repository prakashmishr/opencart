const addProductService = require('../service/addProductservice');

module.exports = (req, res) => {
    console.log(req.body, req.file);
    addProductService(req.body, req.file).then(() => {
        console.log('product added sucessfully');
        res.render('addProduct', {
            msg: 'product added sucessfully',
            symbol: 'success'
        })
    }).catch((err) => {
        console.log('error occoured');
        console.log(err);
    })
}