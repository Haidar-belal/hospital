const { Manager } = require('../models')


exports.getAllManagers = async (req, res, next) => {
    try {
        const manager = await Manager.findAll();
        return res.status(200).json(manager);
    } catch (error) {
        return res.status(500).json(error);
    }
};

exports.getOneManager = async (req, res, next) => {
    const { id } = req.params
    try {
        const manager = await Manager.findByPk(id);
        return res.status(200).json(manager);
    } catch (error) {
        return res.status(500).json(error);
    }
};

exports.storeManager = async (req, res, next) => {
    const { first_name, 
        last_name, 
        manager_id, 
        email, 
        password, 
        gender, 
        birth_date, 
        card_id, 
        phone,
        job_title,
        address,
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
        const manager = await Manager.create({
            first_name: first_name,
            last_name: last_name,
            manager_id: manager_id,
            email: email,
            phone: phone,
            job_title: job_title,
            address: address,
            password: password,
            gender: gender,
            birth_date: birth_date,
            card_id: card_id,
            salary: salary,
            starting_date: starting_date,
            starting_time: starting_time,
            finishing_time: finishing_time,
        });
        return res.status(200).json({massage: "manager add sucessfully", manager_id: manager.id});
    } catch (error) {
        return res.status(500).json(error);
    }
};

exports.updateManager = async (req, res, next) => {
    const { id } = req.params;
    const { first_name, 
        last_name, 
        manager_id, 
        email, 
        password, 
        gender, 
        birth_date, 
        card_id, 
        phone,
        job_title,
        address,
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
        const manager = await Manager.update({
            first_name: first_name,
            last_name: last_name,
            manager_id: manager_id,
            email: email,
            phone: phone,
            job_title: job_title,
            address: address,
            password: password,
            gender: gender,
            birth_date: birth_date,
            card_id: card_id,
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
        return res.status(200).json({massage: "manager updated sucessfully", manager_id: manager.id});
    } catch (error) {
        return res.status(500).json(error);
    }
};

exports.deleteManager = async (req, res, next) => {
    const { id } = req.params;
    try {
        const manager = await Manager.destroy({
            where: {
                id: id
            }
        });
        return res.status(200).json({massage: "manager deleted sucessfully"});
    } catch (error) {
        return res.status(500).json(error);
    }
};