const express = require ('express');
const router = express.Router()

//@desc Dashboard
// GET /dashboard

router.get('/dashboard', (req, res) => {
    res.render("index")
})

module.exports = router