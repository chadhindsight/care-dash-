const express = require('express');
const router = express.Router();
const passport = require('../config/passport');
const Medicine = require('../models/Medicine'); 

// Search route
router.get('/search', (req, res, next) => {
    // //DB SEARCH
    Medicine.find({}).then(med => res.json(med))
        .catch(err => console.log("Cannot find medication"))

    console.log(req.query)
})
//Cart route
router.get('/cart', (req, res, next) => {

})
module.exports = router;