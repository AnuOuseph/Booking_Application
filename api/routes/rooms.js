const express = require('express')
const router = express.Router()
const {verifyAdmin} = require('../utils/verifyToken')
const { createRoom, updateRoom, deleteRoom, getRoom, getAllRoom } = require('../controllers/roomController')

router.route('/:hotelid').post(verifyAdmin,createRoom)
router.route('/:id').put(verifyAdmin,updateRoom)
router.route('/:id/:hotelid').delete(verifyAdmin,deleteRoom)
router.route('/:id').get(getRoom)
router.route('/').get(getAllRoom)

module.exports = router;