const { title } = require('faker/lib/locales/ar');
const { Date, Consultation, Operation, Room, Employee, Doctor, Patient } = require('../models');


exports.getAllDates = async (req, res, next) => {
    try {
        const dates = await Date.findAll();
        return res.status(200).json(dates);
    } catch (error) {
        return res.status(500).json(error);
    }
};

exports.getOneRoom = async (req, res, next) => {
    const { id } = req.params
    try {
        const date = await Date.findByPk(id);
        return res.status(200).json(date);
    } catch (error) {
        return res.status(500).json(error);
    }
};

exports.storeDate = async (req, res, next) => {
    const { datea, exit_date, employee_id, room_id, doctor_id, paient_id, type, title, finished, comment } = req.body;
    try {
        const patient = await Patient.findByPk(paient_id);
        if (patient === null){
            return res.status(404).json({massage: "this patient is not found"});
        }
        else{
            const date = await Date.create({
                date: datea,
                exit_date: exit_date,
                employee_id: employee_id,
                room_id: room_id,
                doctor_id: doctor_id,
                patient_id: patient.id
            });
            if (type === "consultation"){
                const consultation = await Consultation.create({
                    title: title,
                    finished: finished,
                    date_id: date.id,
                    comment: comment
                });
            } else {
                const operation = await Operation.create({
                    title: title,
                    date_id: date.id,
                    finished: finished,
                    comment: comment
                });
            }
            return res.status(200).json({massage: `date and ${type} added sucessfully`, date_id: date.id});
        }
    } catch (error) {
        return res.status(500).json(error);
    }
};

exports.updateDate = async (req, res, next) => {
    const { id } = req.params;
    const { datea, exit_date, employee_id, room_id, doctor_id } = req.body;
    try {
        const date = await Date.update({
            date: datea,
            exit_date: exit_date,
            employee_id:employee_id,
            doctor_id: doctor_id,
            room_id: room_id,
        },
        {
            where: {
                id: id
            }
        });
        return res.status(200).json({massage: "date updated sucessfully", date_id: date.id});
    } catch (error) {
        return res.status(500).json(error);
    }
}

exports.deleteDate = async (req, res, next) => {
    const { id } = req.params;
    try {
        const date = await Date.destroy({
            where: {
                id: id,
            }
        });
        return res.status(200).json({massage: "date deleted sucessfully"});
    } catch (error) {
        return res.status(500).json(error);
    }
};