const express = require('express')
const {authRegUser,authLogin} = require('../controllers/authController')

const router = express.Router()

router.route('/register').post(authRegUser)
router.route('/login').post(authLogin)

module.exports = router;
