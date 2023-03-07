const express = require('express');

const router = express.Router();

const patientController = require('../controllers/patient');

router.get('/patients', patientController.getAllPatients);

router.put('/patient/edit/:id', patientController.updatePatient);

router.post('/patient/store', patientController.storePatient);

router.get('/patient/:id', patientController.getOnePatient);

router.delete('/patient/delete/:id', patientController.deletePatient);


module.exports = router;