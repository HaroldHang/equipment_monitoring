const express = require ('express');
const router = express.Router()
//const Equipments = require('../models/equipment.js');
const equipments = require('../controllers/equipment.js');

/*router.get('/create', (req, res) => {
    res.render("index", {
        page : 'create'
    })
})

router.post('/add', async (req, res) => {
    console.log(req.body)
    try {
        await Equipments.create(req.body)
        res.render("index", {
            page : 'create'
        })
        res.redirect('/equipements?add=success')
        
    } catch (error) {
        console.log(error)
        res.redirect('/equipements')
    }
})*/

// Create a new Product
router.post('/', equipments.create);

// Retrieve all Products
router.get('/', equipments.findAll);

// Retrieve a single Product with productId
router.get('/:equipId', equipments.findOne);

// Update a Note with productId
router.put('/:equipId', equipments.update);

// Delete a Note with productId
router.delete('/:equipId', equipments.delete);


module.exports = router