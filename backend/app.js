const express = require("express");
const mongoose = require("mongoose");
const session = require('express-session')
const passport = require('passport')
const passportLocalMongoose = require('passport-local-mongoose');


// Middleware Setup
app.use(cors());
app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(session({
    secret: "Shouout to the essential workers who are the backbone for society",
    ressave: false,
    saveUninitialized: false
}));
// Setup passport and initialize passport package
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




// ROUTES
app.get('/register', (req,res)=>{

})

app.post('/register', (req, res) => {

})

app.post('/login', (req, res)=>{
  
})