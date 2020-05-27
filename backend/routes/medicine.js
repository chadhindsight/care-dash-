const express = require('express');
const router = express.Router();
const passport = require('../config/passport');
const Medicine = require('../models/Medicine'); 

// Search route
router.get('/search', (req, res, next) => {
    // //DB SEARCH
    console.log(req.query)
    Medicine.find({ drugName: { $regex: req.query.name, $options: 'i' }}).limit(20).then(meds => {
        console.log(meds)
        res.json({meds})
    })
        .catch(err => console.log("Cannot find medication"))

})
//Cart route
router.get('/cart', (req, res, next) => {

})
module.exports = router;