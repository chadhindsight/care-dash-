const express = require('express');
const router = express.Router();
const passport = require('../config/passport');
const Medicine = require('../models/Medicine'); 

// Search route
router.get('/search', (req, res, next) => {
    // //DB SEARCH
    Medicine.find({ drugName: { $regex: req.query.name, $options: 'i' }}).limit(20).then(meds => {
        // console.log(meds)
        res.json({meds})
    })
        .catch(err => console.log("Cannot find medication"))

})
//Cart route
router.post('/order', (req, res, next) => {
    //Target the specific user's order array
    console.log(req.body)
})
module.exports = router;