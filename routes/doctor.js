const express = require('express');

const router = express.Router();

const doctorController = require('../controllers/doctor');

router.get('/doctors', doctorController.getAllDoctors);

router.get('/doctor/:id', doctorController.getOneDoctor);

router.post('/doctor/store', doctorController.storeDoctor);

router.put('/doctor/edit/:id', doctorController.updateDoctor);

router.delete('/doctor/delete/:id', doctorController.deleteDoctor);


module.exports = router;