const WeddingModel = require('../models/weddingModel.js');

const getRecords = async (req, res) => {
    try {
        const weddRecords = await WeddingModel.find({});
        res.status(200).json(weddRecords);
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
}
const getRecord = async (req, res) => {
    try {
        const { id } = req.params;
        const weddRecord = await WeddingModel.findById(id);
        res.status(200).json(weddRecord);
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const createRecord = async (req, res) => {
    try {
        const weddRecord = await WeddingModel.create(req.body);
        res.status(200).json(weddRecord);
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const updateRecord = async (req, res) => {
    try {
        const { id } = req.params;
        const weddRecord = await WeddingModel.findByIdAndUpdate(id, req.body);
        if (!weddRecord) {
            return res.statuc(404).json({ message: "Record not found" });
        }

        const updateRecord = await WeddingModel.findById(id);
        res.status(200).json(updateRecord);
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const deleteRecord = async (req, res) => {
    try {
        const { id } = req.params;

        const weddRecord = await WeddingModel.findByIdAndDelete(id);
        if (!weddRecord) {
            return res.status(404).json({ message: "Record not found" });
        }
        res.status(200).json({ messge: "Record deleted successfully " });
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    getRecords,
    getRecord,
    createRecord,
    updateRecord,
    deleteRecord
}