const { Operation } = require('../models');

exports.getAllOperation = async (req, res, next) => {
    try {
        const operations = await Operation.findAll();
        return res.status(200).json(operations);
    } catch (error) {
        return res.status(500).json(error);
    }
};

exports.getOneOperation = async (req, res, next) => {
    const { id } = req.params;
    try {
        const operation = await Operation.findByPk(id);
        return req.status(200).json(operation);
    } catch (error) {
        return res.status(500).json(error);
    }
};

exports.updateOperation = async (req, res, next) => {
    const { id } = req.params;
    const { title, finished, date_id, comment } = req.body;
    try {
        const operation = await Operation.update({
            title: title,
            finished: finished,
            date_id: date_id,
            comment: comment
        },{
            where: {
                id: id
            }
        });
        return res.status(200).json({massage: "operation updated sucessfully", operation_id: operation.id});
    } catch (error) {
        return res.status(500).json(error);
    }
};

exports.deleteOperation = async (req, res, next) => {
    const { id } = req.params;
    try {
        const operation = await Operation.destroy({
            where: {
                id: id
            }
        });
        return res.status(200).json({massage: "operation deleted sucessfully"});
    } catch (error) {
        return res.status(500).json(error);
    }
};