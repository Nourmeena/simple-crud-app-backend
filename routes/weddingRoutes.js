const express = require('express');
const router = express.Router();//serves as a mini Express application capable of handling its own routes
const WeddingModel = require('../models/weddingModel.js');
const { getRecords, getRecord, createRecord,updateRecord, deleteRecord } = require('../controllers/weddingController.js');


//create record
router.post('/', createRecord);

//read all the records
router.get('/',getRecords);

//read record with specific id
router.get('/:id', getRecord);

//update record with specific id and read it 
router.put('/:id', updateRecord);

//delete a record
router.delete('/:id', deleteRecord);

module.exports = router;