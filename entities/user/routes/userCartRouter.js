const express = require('express');
const router = express.Router();
const getUserCartController = require('../controller/getUserCartController')
const addItemToCartController = require('../controller/addItemToCartController')
const removeItemFromCartContoller = require('../controller/removeItemFromCartContoller')

router.route('/')
.get(getUserCartController)

router.route('/additem')
.post(addItemToCartController)

router.route('/remove/item')
.post(removeItemFromCartContoller)

module.exports = router;