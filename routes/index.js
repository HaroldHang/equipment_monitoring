const express = require ('express');
const router = express.Router()

const Equipments = require('../models/equipment.js');
//@desc Dashboard
// GET /dashboard

router.get('/', (req, res) => {
    res.redirect('/equipements')
})
router.get('/equipements', async (req, res) => {
    try {
        let equips = await Equipments.find()
        /*for (let index = 0; index < equips.length; index++) {
            const equip = equips[index];
            let date =  new Date(equip.dateFact)
            equip.dateFact = date.toLocaleDateString();
            console.log(equip)
        }*/
        console.log(req.query)
        let success = false
        if (req.query.add && req.query.add == "success") {
            success = true
        }
        const obj = req;
        res.render("index", {
            page: 'index',
            equipements : equips,
            success : success
        })
    } catch (error) {
        
    }
})

module.exports = router