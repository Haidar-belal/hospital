
const { Bill } = require('../models')


exports.getAllBills = async (req, res, next) => {
    try {
        const bill = await Bill.findAll();
        return res.status(200).json(bill);
    } catch (error) {
        return res.status(500).json(error);
    }
};

exports.getOneBill = async (req, res, next) => {
    const { id } = req.params
    try {
        const bill = await Bill.findByPk(id);
        return res.status(200).json(bill);
    } catch (error) {
        return res.status(500).json(error);
    }
};

exports.storeBill = async (req, res, next) => {
    const { cost, 
        summary, 
        date_id} = req.body;
    try {
        const bill = await Bil.create({
            cost: cost,
            summary: summary,
            date_id: date_id,
        });
        return res.status(200).json({massage: "bill add sucessfully", bill_id: bill.id});
    } catch (error) {
        return res.status(500).json(error);
    }
};

exports.updateBill = async (req, res, next) => {
    const { cost, 
        summary, 
        date_id} = req.body;
    try {
        const bill = await Bill.update({
            cost: cost,
            summary: summary,
            date_id: date_id,
        });
        return res.status(200).json({massage: "bill update sucessfully", bill_id: bill.id});
    } catch (error) {
        return res.status(500).json(error);
    }
};

exports.deleteBill = async (req, res, next) => {
    const { id } = req.params;
    try {
        const bill = await Bill.destroy({
            where: {
                id: id,
            }
        });
        return res.status(200).json({massage: "bill deleted sucessfully"});
    } catch (error) {
        return res.status(500).json(error);
    }
};