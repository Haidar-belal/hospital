const express = require('express');

const router = express.Router();

const dateController = require('../controllers/date');


router.get('/dates', dateController.getAllDates);

// router.get('/date/:id', dateController.getOneDate);

router.post('/date/store', dateController.storeDate);

router.put('/date/edit/:id', dateController.updateDate);

router.delete('/date/delete', dateController.deleteDate);





module.exports = router;