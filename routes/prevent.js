const express = require ('express');
const router = express.Router()
//const Equipments = require('../models/equipment.js');
const preventive = require('../controllers/preventive.js');

// Create a new Product
router.post('/', preventive.create);

// Retrieve all Products
router.get('/', preventive.findAll);

// Retrieve a single Product with productId
router.get('/:preventId', preventive.findOne);

// Update a Note with productId
router.put('/:preventId', preventive.update);

// Delete a Note with productId
router.delete('/:preventId', preventive.delete);


module.exports = router