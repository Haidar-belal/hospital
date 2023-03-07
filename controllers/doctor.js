const { Doctor } = require('../models')


exports.getAllDoctors = async (req, res, next) => {
    try {
        const doctors = await Doctor.findAll();
        return res.status(200).json(doctors);
    } catch (error) {
        console.log(error);
        return res.status(500).json(error);
    }
};

exports.getOneDoctor = async (req, res, next) => {
    const { id } = req.params
    try {
        const doctor = await Doctor.findByPk(id);
        return res.status(200).json(doctor);
    } catch (error) {
        return res.status(500).json(error);
    }
};

exports.storeDoctor = async (req, res, next) => {
    const { first_name, 
        last_name, 
        room_id, 
        email, 
        password, 
        gender, 
        birth_date, 
        card_id, 
        specialize, 
        salary, 
        starting_date, 
        work_time } = req.body;

    let starting_time = "";
    let finishing_time = "";

    if (work_time === 'morning') {
        starting_time = "09:00:00AM";
        finishing_time = "09:00:00PM";
    } else {
        starting_time = "9 pm";
        finishing_time = "9 am";
    }
    try {
        const doctor = await Doctor.create({
            first_name: first_name,
            last_name: last_name,
            room_id: room_id,
            email: email,
            password: password,
            gender: gender,
            birth_date: birth_date,
            card_id: card_id,
            specialize: specialize,
            salary: salary,
            starting_date: starting_date,
            starting_time: starting_time,
            finishing_time: finishing_time,
        });
        return res.status(200).json({massage: "doctor add sucessfully", doctor_id: doctor.id});
    } catch (error) {
        return res.status(500).json(error);
    }
};

exports.updateDoctor = async (req, res, next) => {
    const { id } = req.params;
    const { first_name, 
        last_name, 
        room_id, 
        email, 
        password, 
        gender, 
        birth_date, 
        card_id, 
        specialize, 
        salary, 
        starting_date, 
        work_time } = req.body;

    let starting_time = "";
    let finishing_time = "";

    if (work_time === 'morning') {
        starting_time = "9 am";
        finishing_time = "9 pm";
    } else {
        starting_time = "9 pm";
        finishing_time = "9 am";
    }
    try {
        const doctor = await Doctor.update({
            first_name: first_name,
            last_name: last_name,
            room_id: room_id,
            email: email,
            password: password,
            gender: gender,
            birth_date: birth_date,
            card_id: card_id,
            specialize: specialize,
            salary: salary,
            starting_date: starting_date,
            starting_time: starting_time,
            finishing_time: finishing_time,
        },
        {
            where: {
                id: id
            }
        });
        return res.status(200).json({massage: "doctor updated sucessfully", doctor_id: doctor.id});
    } catch (error) {
        return res.status(500).json(error);
    }
};

exports.deleteDoctor = async (req, res, next) => {
    const { id } = req.params;
    try {
        const doctor = await Doctor.destroy({
            where: {
                id: id
            }
        });
        return res.status(200).json({massage: "doctor deleted sucessfully"});
    } catch (error) {
        return res.status(500).json(error);
    }
};