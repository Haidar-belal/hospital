const { Manager, Doctor, Employee } = require('../models');

exports.login =  (req, res, next) => {
    const { email, password, type } = req.body;
    try {
        if (type === "manager") {
            managerLogin(email, password);
        } else if (type === "employee") {
            EmployeeLogin(email, password);
        } else {
            doctorLogin(email, password);
        }
    } catch (error) {
        return res.status(500).json(error);
    }
};







async function managerLogin(email, password) {
    const manager = await Manager.findOne({
        where: {
            email: email
        }
    });
    if (manager === null) {
        return res.status(402).json({massage: "invalid email"});
    } else {
        if (manager.password === password) {
            return res.status(200).json(manager);
        }
        req.status(402).json({masage: "invalid password"});
    }
};

async function EmployeeLogin(email, password) {
    const employee = await Employee.findOne({
        where: {
            email: email
        }
    });
    if (employee === null) {
        return res.status(402).json({massage: "invalid email"});
    } else {
        if (employee.password === password) {
            return res.status(200).json(employee);
        }
        req.status(402).json({masage: "invalid password"});
    }
};

async function doctorLogin(email, password) {
    const doctor = await Doctor.findOne({
        where: {
            email: email
        }
    });
    if (doctor === null) {
        return res.status(402).json({massage: "invalid email"});
    } else {
        if (doctor.password === password) {
            return res.status(200).json(doctor);
        }
        req.status(402).json({masage: "invalid password"});
    }
};