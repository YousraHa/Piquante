const express = require('express');
const router = express.Router();

const auth = require('../middleware/auth');
const multer = require('../middleware/multer-config');

const sauceCtrl = require ('../controllers/sauce')

router.get('/:id', auth , sauceCtrl.getOneSauce);
router.get('/', auth , sauceCtrl.getAllSauces);
router.post('/', auth , multer, sauceCtrl.createSauce);
router.delete('/:id', auth , sauceCtrl.deleteOneSauce);
router.put('/:id' ,auth,  multer , sauceCtrl.updateOneSauce);
router.post('/:id/like' ,auth , sauceCtrl.addLike);



module.exports = router;