const express = require('express');

const router = express.Router();

const billController = require('../controllers/bill');

router.get('/bills', billController.getAllBills);

router.get('/bill/:id', billController.getOneBill);

router.post('/bill/store', billController.storeBill);

router.put('/bill/edit/:id', billController.updateBill);

router.delete('/bill/delete/:id', billController.deleteBill);





module.exports = router;