const { Employee } = require('../models')


exports.getAllEmployees = async (req, res, next) => {
    try {
        const employee = await Employee.findAll();
        return res.status(200).json(employee);
    } catch (error) {
        return res.status(500).json(error);
    }
};

exports.getOneEmployee = async (req, res, next) => {
    const { id } = req.params
    try {
        const employee = await Employee.findByPk(id);
        return res.status(200).json(employee);
    } catch (error) {
        return res.status(500).json(error);
    }
};

exports.storeEmployee = async (req, res, next) => {
    const { first_name, 
        last_name, 
        manager_id, 
        email, 
        password, 
        gender, 
        birth_date, 
        card_id, 
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
        const employee = await Employee.create({
            first_name: first_name,
            last_name: last_name,
            manager_id: manager_id,
            email: email,
            password: password,
            gender: gender,
            birth_date: birth_date,
            card_id: card_id,
            salary: salary,
            starting_date: starting_date,
            starting_time: starting_time,
            finishing_time: finishing_time,
        });
        return res.status(200).json({massage: "employe add sucessfully", employee_id: employee.id});
    } catch (error) {
        return res.status(500).json(error);
    }
};

exports.updateEmployee = async (req, res, next) => {
    const { id } = req.params;
    const { first_name, 
        last_name, 
        manager_id, 
        email, 
        password, 
        gender, 
        birth_date, 
        card_id, 
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
        const employee = await Employee.create({
            first_name: first_name,
            last_name: last_name,
            manager_id: manager_id,
            email: email,
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
        return res.status(200).json({massage: "employee updated sucessfully", employee_id: employee.id});
    } catch (error) {
        return res.status(500).json(error);
    }
};

exports.deleteEmployee = async (req, res, next) => {
    const { id } = req.params;
    try {
        const employee = await Employee.destroy({
            where: {
                id: id
            }
        });
        return res.status(200).json({massage: "employee deleted sucessfully"});
    } catch (error) {
        return res.status(500).json(error);
    }
};