const express = require('express');
const router = express.Router();
const User = require('../models/User');
const passport = require('../config/passport');

// Package that sends emails
const sgMail = require('@sendgrid/mail');


router.post('/signup', (req, res, next) => {
  console.log(req.body.username)
  User.register(req.body, req.body.password)
    .then((user) => { 
        req.login(user, function(err,result){
          res.status(201).json(user)
        })
    })
    .catch((err) => { 
      console.log(err)
      res.status(500).json({ err })
    });
});

// User orders medicine
router.get('/order', async (req, res) => {
  User.findById(req.user._id).then(stuff => {

    sgMail.setApiKey(process.env.SENDGRID_API_KEY)
    console.log(stuff)
    sgMail.send({
        to: `${stuff.email}`,
        from: 'chadrickj8@gmail.com',
        subject: 'Just testing an app',
        text: 'I hope this one actually gets through! I will never be successful.'
    }).catch(err => console.log("junk"))
  }).catch(err => console.log("junk"))
})

//return await service.get('/is-logged-in');
router.get('/is-logged-in', (req, res, next) => {  
  res.json(req.user)
})


router.post('/login', passport.authenticate('local'), (req, res, next) => {
  const { user } = req;
  console.log(user)
  res.status(200).json(user);
});

router.get('/logout', (req, res, next) => {
  req.logout();
  res.status(200).json({ msg: 'Logged out' });
});

router.get('/profile', isAuth, (req, res, next) => {
  User.findById(req.user._id)
    .then(user => {
      res.status(200).json({ user })
    })
    .catch((err) => res.status(500).json({ err }));
});

router.post('/profile',isAuth, (req, res, next) => {
  console.log(req.body, "random stuff")
  User.findByIdAndUpdate({ _id: req.user._id }, { 
      email: req.body.name, 
      // pw: req.body.password, 
      primaryPharmacy: req.body.primaryPharm 
  }, 
    { new: true }).then(user =>{ console.log(user)
    res.status(200).json( user)})
})


 function isAuth(req, res, next) {
  req.isAuthenticated() ? next() : res.status(401).json({ msg: 'Log in first' });
}

module.exports = router;
// caredash20@gmail.com