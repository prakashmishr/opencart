const express = require('express');
const router = express.Router();

const multer  = require('multer')
const upload = multer({ dest: 'uploads/profileImg' })

const userSignupGetController = require('../controller/userGetController');
const userSignupPostController = require('../controller/userPostController');


router.route("/")
.get(userSignupGetController)
.post(upload.single('profilePic'),userSignupPostController);





module.exports = router;