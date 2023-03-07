const express = require('express');

const router = express.Router();

const departmentController = require('../controllers/department');

router.get('/rooms', departmentController.getAllRooms);

router.get('/room/:id', departmentController.getOneRoom);

router.post('/room/store', departmentController.storeRoom);

router.put('/room/edit/:id', departmentController.updateRoom);

router.delete('/room/delete/:id', departmentController.deleteRoom);

router.get('/departments', departmentController.getAllDepartments);

router.post('/department/store', departmentController.storeDepartment);

// router.get('/department/empty/:d', departmentController.getEmptyRoom);

router.get('/department/:id', departmentController.getOneDepartment);

router.put('/department/edit/:id', departmentController.updateDepartment);

router.delete('/department/delete/:id', departmentController.deleteDepartment);

router.post('/photo/store', departmentController.storeImage);



module.exports = router;