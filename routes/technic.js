const express = require ('express');
const router = express.Router()
//const Equipments = require('../models/equipment.js');
const technicians = require('../controllers/technician.js');

// Create a new Product
router.post('/', technicians.create);

// Retrieve all Products
router.get('/', technicians.findAll);

// Retrieve a single Product with productId
router.get('/:techId', technicians.findOne);

// Update a Note with productId
router.put('/:techId', technicians.update);

// Delete a Note with productId
router.delete('/:techId', technicians.delete);


module.exports = router