const express = require('express');

const router = express.Router();

const consultationController = require('../controllers/consultation');


router.get('/consultations', consultationController.getAllConsultations);

router.get('/consultation/:id', consultationController.getOneConsultation);

router.put('/consultation/edit/:id', consultationController.updateConsultation);

router.delete('/consultation/delete/:id', consultationController.deleteConsultation);



module.exports = router