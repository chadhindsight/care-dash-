const express = require('express');
const router = express.Router();
const passport = require('../config/passport');
const Medicine = require('../models/Medicine'); 
const User = require ('../models/User');
 nodeMailer = require('nodemailer')


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
    console.log(req.body)
    //Target the specific user's order array
    User.findByIdAndUpdate({ _id: req.user._id }, { order: req.body }, { new: true }).then(x => console.log(x))
    .catch(err => res.json('Please ign in'))

    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'caredash20@gmail.com',
            pass: 'Designer22'
        }
    });

    let mailOptions = {
        from: 'caredash20@gmail.com',
        to: 'chadrickj8@gmail.com',
        subject: 'Sending Email using Node.js',
        text: 'That was easy!'
    };

    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
        }
    });
    
})

function isAuth(req, res, next) {
    req.isAuthenticated() ? next() : res.status(401).json({ msg: 'Log in first' });
}
module.exports = router;