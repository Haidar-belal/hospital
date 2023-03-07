const { Room, Department, Photo } = require('../models')

//----room funtions----//
exports.getAllRooms = async (req, res, next) => {
    try {
        const rooms = await Room.findAll();
        return res.status(200).json(rooms);
    } catch (error) {
        return res.status(500).json(error);
    }
};

exports.getOneRoom = async (req, res, next) => {
    const { id } = req.params
    try {
        const room = await Room.findByPk(id);
        return res.status(200).json(room);
    } catch (error) {
        return res.status(500).json(error);
    }
};

exports.storeRoom = async (req, res, next) => {
    const { type, level, department_id, cost, beds_number } = req.body;
    try {
        const room = await Room.create({
            type: type,
            level: level,
            department_id: department_id,
            cost: cost,
            beds_number: beds_number,
        });
        return res.status(200).json({massage: "room add sucessfully", room_id: room.id});
    } catch (error) {
        return res.status(500).json(error);
    }
};

exports.updateRoom = async (req, res, next) => {
    const { id } = req.params;
    const { type, level, department_id, cost, beds_number } = req.body;
    try {
        const room = await Room.update({
            type: type,
            level: level,
            department_id: department_id,
            cost: cost,
            beds_number: beds_number,
        },
        {
            where: {
                id: id
            }
        });
        return res.status(200).json({massage: "room updated sucessfully", room_id: room.id});
    } catch (error) {
        return res.status(500).json(error);
    }
};

exports.deleteRoom = async (req, res, next) => {
    const { id } = req.params;
    try {
        const room = await Room.destroy({
            where: {
                id: id,
            }
        });
        return res.status(200).json({massage: "room deleted sucessfully"});
    } catch (error) {
        return res.status(500).json(error);
    }
};

//----department functions----//
exports.getAllDepartments = async (req, res, next) => {
    try {
        const departments = await Department.findAll({
            include: 'photo'
        });
        return res.status(200).json(departments);
    } catch (error) {
        return res.status(500).json(error);
    }
};

exports.getOneDepartment = async (req, res, next) => {
    const { id } = req.params
    try {
        const department = await Department.findByPk(id, {
            include: 'photo'
        });
        return res.status(200).json(department);
    } catch (error) {
        return res.status(500).json(error);
    }
};

exports.storeDepartment = async (req, res, next) => {
    const { name, floor, number_of_rooms, photo_id } = req.body;
    try {
        const department = await Department.create({
            name: name,
            floor: floor,
            photo_id: photo_id,
            number_of_rooms: number_of_rooms,
        });
        return res.status(200).json({massage: "department add sucessfully", department_id: department.id});
    } catch (error) {
        return res.status(500).json(error);
    }
};

exports.updateDepartment = async (req, res, next) => {
    const { id } = req.params;
    const { name, floor, number_of_rooms, photo_id } = req.body;
    try {
        const department = await Department.update({
            name: name,
            floor: floor,
            photo_id: photo_id,
            number_of_rooms: number_of_rooms,
        },
        {
            where: {
                id: id
            }
        });
        return res.status(200).json({massage: "department updated sucessfully", department_id: department.id});
    } catch (error) {
        return res.status(500).json(error);
    }
};

exports.deleteDepartment = async (req, res, next) => {
    const { id } = req.params;
    try {
        const department = await Department.destroy({
            where: {
                id: id,
            }
        });
        return res.status(200).json({massage: "room deleted sucessfully"});
    } catch (error) {
        return res.status(500).json(error);
    }
};

exports.storeImage = async (req, res, next) => {
    const { image } = req.file;
    try {
        const photo = await Photo.create({
            image_url: image.path
        });
        return res.status(200).json({massage: "photo added sucessfully", photo_id: photo.id})
    } catch (error) {
        return res.status(500).json(error);
    }
}
