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

const app = express();
// Middleware Setup
app.use(cors());
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



// ROUTES
// Home Route
app.get('/', (req, res) => {
    res.send("Boot")
})

// This commented out GET route might not need to be done here
// app.get('/register', (req,res)=>{

// })
// Register a new user profile
app.post('/register', (req, res) => {
    User.register({ username: req.body.username}, req.body.password, (err, user)=>{
        if(err) {
            console.log(err)
            
            res.redirect("/register");
        }
        else{
            passport.authenticate("local")(req, res, ()=>{
                // res.redirect("/profile")
                res.send('Success!')
            })
        }
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

app.post('/profile', (req, res)=>{
  
})
// Search route
app.get('/searchsearch/:name', (req, res, next) =>{

})
//Cart route
app.get('/cart')

module.exports = app;
