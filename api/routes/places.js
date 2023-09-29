const express = require('express')
const {placeCreate,placeUpdate,placeDelete,placeGet,placeGetAll,countByCity,countByType} = require('../controllers/placeController')
const {verifyAdmin} = require('../utils/verifyToken')

const router = express.Router()
const multer = require('multer');
const storage = multer.memoryStorage(); // Use memory storage for uploading files
const upload = multer({ storage });

router.route('/').post(upload.array('files', 5),placeCreate)
router.route('/:id').put(verifyAdmin,placeUpdate)
router.route('/find/:id').delete(verifyAdmin,placeDelete)
router.route('/find/:id').get(placeGet)
router.route('/').get(placeGetAll)
router.route('/countByCity').get(countByCity)
router.route('/countByType').get(countByType)

module.exports = router;