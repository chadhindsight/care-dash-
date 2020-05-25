require("dotenv").config();
const express = require("express");
const cookieParser = require("cookie-parser");
const path = require("path");

const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const session = require('express-session')
const passport = require('passport')
const User = require('./models/User')
const Medicine = require('./models/Medicine')
const cors = require("cors");
const GoogleStrategy = require('passport-google-oauth20').Strategy;

const app = express();
// Middleware Setup
app.use(cors({
  origin: function(origin, callback){
    return callback(null, true);
  },
  optionsSuccessStatus: 200,
  credentials: true
}));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(session({
    secret: "Shoutout to the essential workers who are the backbone for society",
    resave: false,
    saveUninitialized: false
}));
// Setupt and initialize passport package
app.use(passport.initialize());
app.use(passport.session());

mongoose
    .connect("mongodb://localhost/care-dash", { useNewUrlParser: true, useUnifiedTopology: true })
    .then((x) => {
        console.log(
            `Connected to Mongo! Database name: "${x.connections[0].name}"`
        );
    })
    .catch((err) => {
        console.error("Error connecting to mongo", err);
    });
mongoose.set('useCreateIndex', true);

    passport.use(User.createStrategy());

passport.serializeUser(function (user, done) {
    done(null, user.id);
});

passport.deserializeUser(function (id, done) {
    User.findById(id, function (err, user) {
        done(err, user);
    });
});

// GOOGLE OAUTH STUFF
passport.use(new GoogleStrategy({
    clientID: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
    callbackURL: "http://localhost:5000/auth/google/care-dash",
    userProfileURL: "https://www.googleapis.com/oauth2/v3/userinfo"
},
    function (accessToken, refreshToken, profile, cb) {
        console.log(profile);

        User.findOrCreate({ googleId: profile.id }, function (err, user) {
            return cb(err, user);
        });
    }
));

// ROUTES
// Home Route
app.get('/', (req, res) => {
    res.send('deez')
})

app.get('/auth/google', (req, res)=>{
    passport.authenticate('google', {scope: ['profile']})
})

app.get('/auth/google/care-dash', (req, res) => {
    passport.authenticate('google', {failureRedirect: '/login'}).then(() => {
        res.redirect('/profile')
    })
})

// Register a new user profile and send them to that profile page
app.post('/register', (req, res) => {

    User.register({
        username: req.body.username, 
        fullname: req.body.fullname,
        primaryPharmacy: req.body.primaryPharmacy,
        conditions: req.body.conditions
         }, req.body.password)
        .then(passport.authenticate("local", (req, res, () => {
            // res.redirect("/profile")
            res.send('Success!')
        }))
        ).catch(err => {
        console.log(err)
        res.redirect("/register");
    })
})

app.post('/login', (req, res) => {
    const user = new User({
       username: req.body.username,
       password: req.body.password
    })
    req.login(user, (err)=>{
        if(err) console.log(err)
        
        else {
            passport.authenticate('local')
            res.send('You Good')
        }
    })
})
// Logout the user
app.get('/logout', (req, res)=> {
    req.logout();
    res.status(200).json({ msg: 'Logged out' });
})

// View User Profile
app.post('/profile', (req, res)=> {
  
})
// Search route
app.get('/searchsearch/:name', (req, res, next) =>{

})
//Cart route
app.get('/cart', (req, res, next) => {

})

module.exports = app;
