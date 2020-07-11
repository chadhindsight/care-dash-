const express = require('express');
const router = express.Router();
const passport = require('../config/passport');
const Medicine = require('../models/Medicine'); 
const User = require ('../models/User');
require('dotenv').config();

// Package that sends emails
const sgMail = require('@sendgrid/mail')

// Search route
router.get('/search', (req, res, next) => {
    // //DB SEARCH HERE
    Medicine.find({ drugName: { $regex: req.query.name, $options: 'i' }}).limit(20).then(meds => {
        // console.log(meds)
        res.json({meds})
    })
        .catch(err => console.log("Cannot find medication"))

})

//Backend portion of checking out
router.post('/order', isAuth, (req, res, next) => {
    console.log(req.body)
    //Target the specific user's order array
    User.findByIdAndUpdate({ _id: req.user._id }, { order: req.body }, { new: true }).then(x => console.log(x))
    .catch(err => res.json('Please ign in'))

    });


function isAuth(req, res, next) {
    req.isAuthenticated() ? next() : res.status(401).json({ msg: 'Log in first' });
}
module.exports = router;

// Method that lets send grid set your api key
// sgMail.setApiKey(process.env.sendgridAPIKey)

// sgMail.send({
//     // 
//     to: '',
//     from: 'chaddyjizzle@gmail.com',
//     subject: 'Order Confirmation',
//     text: `Thank you for your order. We're working on it!`
// })