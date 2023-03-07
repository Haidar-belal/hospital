const express = require('express');

const router = express.Router();

const operationController = require('../controllers/operation');

// router.get('/operations', operationController.getAllOperations);

// router.get('/operation/:id', operationController.getOneOperations);

router.put('/operation/edit/:id', operationController.updateOperation);

router.delete('/operation/delete/:id', operationController.deleteOperation);




module.exports = router;