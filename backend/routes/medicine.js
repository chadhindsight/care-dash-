const express = require('express');
const router = express.Router();
const Medicine = require('../models/Medicine');
require('dotenv').config();

// Search route
router.get('/search', (req, res, next) => {
    // //DB SEARCH HERE
    Medicine.find({ drugName: { $regex: req.query.name, $options: 'i' } }).limit(20).then(meds => {
        res.json({ meds })
    })
        .catch(err => console.log("Cannot find medication"))

})


function isAuth(req, res, next) {
    req.isAuthenticated() ? next() : res.status(401).json({ msg: 'Please log in or signup' });
}
module.exports = router;
