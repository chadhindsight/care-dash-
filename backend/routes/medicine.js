const express = require('express');
const router = express.Router();
const passport = require('../config/passport');
const Medicine = require('../models/Medicine'); 
const User = require ('../models/User');

// Search route
router.get('/search', (req, res, next) => {
    // //DB SEARCH
    Medicine.find({ drugName: { $regex: req.query.name, $options: 'i' }}).limit(20).then(meds => {
        // console.log(meds)
        res.json({meds})
    })
        .catch(err => console.log("Cannot find medication"))

})

//Backend portion of checking out
router.post('/order', isAuth, (req, res, next) => {
    //Target the specific user's order array
    User.findByIdAndUpdate({ _id: req.user._id }, { order: req.body }, { new: true }).then(x => console.log(x))
    // console.log(req.body, req.user._id)

})
router.post('/ranked', (req, res, next) => {
    Medicine.find({}).sort({rating: Number(req.body.ranked)}).limit(10).then(meds=>{
        res.json({meds})
    })
})

function isAuth(req, res, next) {
    req.isAuthenticated() ? next() : res.status(401).json({ msg: 'Log in first' });
}
module.exports = router;