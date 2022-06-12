const express = require ('express');
const router = express.Router()
const Equipments = require('../models/equipment.js');

router.get('/create', (req, res) => {
    res.render("index", {
        page : 'create'
    })
})

router.post('/add', async (req, res) => {
    console.log(req.body)
    try {
        await Equipments.create(req.body)
        /*res.render("index", {
            page : 'create'
        })*/
        res.redirect('/equipements?add=success')
        
    } catch (error) {
        console.log(error)
        res.redirect('/equipements')
    }
})

module.exports = router