
const { Patient } = require('../models')


exports.getAllPatients = async (req, res, next) => {
    try {
        const patient = await Patient.findAll();
        return res.status(200).json(patient);
    } catch (error) {
        return res.status(500).json(error);
    }
};

exports.getOnePatient = async (req, res, next) => {
    const { id } = req.params
    try {
        const patient = await Patient.findByPk(id);
        return res.status(200).json(patient);
    } catch (error) {
        return res.status(500).json(error);
    }
};

exports.storePatient = async (req, res, next) => {
    const { first_name, 
        last_name, 
        address, 
        insurance_card, 
        phone } = req.body;
    try {
        const patient = await Patient.create({
            first_name: first_name,
            last_name: last_name,
            address: address,
            insurance_card: insurance_card,
            phone: phone,
        });
        return res.status(200).json({massage: "patient add sucessfully", patient_id: patient.id});
    } catch (error) {
        return res.status(500).json(error);
    }
};

exports.updatePatient = async (req, res, next) => {
    const { id } = req.params;
    const { first_name, 
        last_name, 
        address, 
        insurance_card, 
        phone } = req.body;
    try {
        const patient = await Patient.update({
            first_name: first_name,
            last_name: last_name,
            address: address,
            insurance_card: insurance_card,
            phone: phone,
        },
        {
            where: {
                id: id
            }
        });
        return res.status(200).json({massage: "patient update sucessfully", patient_id: patient.id});
    } catch (error) {
        return res.status(500).json(error);
    }
};

exports.deletePatient = async (req, res, next) => {
    const { id } = req.params;
    try {
        const patient = await Patient.destroy({
            where: {
                id: id,
            }
        });
        return res.status(200).json({massage: "patient deleted sucessfully"});
    } catch (error) {
        return res.status(500).json(error);
    }
};