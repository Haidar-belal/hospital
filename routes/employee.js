const express = require('express');

const router = express.Router();

const employeeController = require('../controllers/employee');

router.get('/employees', employeeController.getAllEmployees);

router.get('/employee/:id', employeeController.getOneEmployee);

router.get('/employee/store', employeeController.storeEmployee);

router.put('/employee/edit/:id', employeeController.updateEmployee);

router.delete('/employee/delete/:d', employeeController.deleteEmployee);


module.exports = router;