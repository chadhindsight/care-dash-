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
        res.json({meds})
    })
        .catch(err => console.log("Cannot find medication"))

})

//Backend portion of checking out
router.post('/order', isAuth, (req, res, next) => {
    console.log(req.body)

//     sgMail.send({ 
//     to: `chaddyjizzle@gmail.com`,
//     from: 'chadrickj8@gmail.com',
//     subject: 'Order Confirmation',
//     text: `Thank you for your order. We're working on it!`
// })

    // //Target the specific user's info
    // let destinedUser = User.findById({ _id: req.user._id }, () =>{
    //     email
    //     console.log(email)
    // })

    });


function isAuth(req, res, next) {
    req.isAuthenticated() ? next() : res.status(401).json({ msg: 'Log in first' });
}
module.exports = router;

// Method that lets send grid set your api key
// sgMail.setApiKey(process.env.sendgridAPIKey)

// sgMail.send({
//     // 
//     to: `chaddyjizzle@gmail.com`,
//     from: 'chaddyjizzle@gmail.com',
//     subject: 'Order Confirmation',
//     text: `Thank you for your order. We're working on it!`
// })