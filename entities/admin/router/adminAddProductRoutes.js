const express = require('express');
const router = express.Router();

const multer  = require('multer')
const upload = multer({ dest: 'uploads/productImg' })

const getAddProductController = require('../controller/getAddProductController')
const postAddProductController = require('../controller/postAddProductController')

router.route('/addProduct')
.get(getAddProductController)
.post(upload.single('productImg'),postAddProductController)

module.exports = router;