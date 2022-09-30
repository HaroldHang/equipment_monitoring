const express = require ('express');
const router = express.Router()
const services = require('../controllers/services.js');

// Create a new Product
router.post('/', services.create);
router.post('/division', services.createDiv);

// Retrieve all Products
router.get('/', services.findAll);
router.get('/:servId/division', services.findAllDiv);

// Retrieve a single Product with productId
router.get('/:servId', services.findOne);

// Update a Note with productId
router.put('/:servId', services.update);
router.put('/division/:divId', services.updateDiv);

// Delete a Note with productId
router.delete('/:servId', services.delete);
router.delete('/division/:divId', services.deleteDiv);


module.exports = router