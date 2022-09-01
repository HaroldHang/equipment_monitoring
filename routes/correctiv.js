const express = require ('express');
const router = express.Router()
//const Equipments = require('../models/equipment.js');
const corrective = require('../controllers/corrective.js');

// Create a new Product
router.post('/', corrective.create);

// Retrieve all Products
router.get('/', corrective.findAll);

// Retrieve a single Product with productId
router.get('/:correctId', corrective.findOne);

// Update a Note with productId
router.put('/:correctId', corrective.update);

// Delete a Note with productId
router.delete('/:correctId', corrective.delete);


module.exports = router