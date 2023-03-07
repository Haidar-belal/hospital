
const { Consultation } = require('../models')


exports.getAllConsultations = async (req, res, next) => {
    try {
        const consultation = await Consultation.findAll();
        return res.status(200).json(consultation);
    } catch (error) {
        return res.status(500).json(error);
    }
};

exports.getOneConsultation = async (req, res, next) => {
    const { id } = req.params
    try {
        const consultation = await Consultation.findByPk(id);
        return res.status(200).json(consultation);
    } catch (error) {
        return res.status(500).json(error);
    }
};

exports.updateConsultation = async (req, res, next) => {
    const { id } = req.params;
    const { title, finished, date_id, comment } = req.body;
    try {
        const consultation = await Consultation.update({
            title: title,
            finished: finished,
            date_id: date_id,
            comment: comment
        },{
            where: {
                id: id
            }
        });
        return res.status(200).json({massage: "consultation updated sucessfully", consultation_id: consultation.id});
    } catch (error) {
        return res.status(500).json(error);
    }
};

exports.deleteConsultation = async (req, res, next) => {
    const { id } = req.params;
    try {
        const consultation = await Consultation.destroy({
            where: {
                id: id,
            }
        });
        return res.status(200).json({massage: "Consultation deleted sucessfully"});
    } catch (error) {
        return res.status(500).json(error);
    }
};