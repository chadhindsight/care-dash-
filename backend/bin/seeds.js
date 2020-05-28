const csvFilePath = './drugsComTest_raw.csv'
const csv = require('csvtojson')
const Medicine = require('../models/Medicine');
const User = require('../models/User');
// const users = require('./users')
const mongoose = require('mongoose');

///const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost/care-dash'
const MONGODB_URI=`mongodb+srv://chad:Designer2@cluster0-k7zkq.mongodb.net/care-dash?retryWrites=true&w=majority`

console.log('Connecting DB to ', MONGODB_URI)

mongoose
    .connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then((x) =>{
        
        console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
        csv()
            .fromFile(csvFilePath)
            .then((jsonObj) => {
                console.log('jsonObj[0]');
                Medicine.insertMany(jsonObj).then(res=>console.log('res')).catch(err=>console.log(err))

            })
    
    })
    .catch((err) => console.error('Error connecting to mongo', err));
//Convert csv drug data to JSON and insert it

// User.insertMany(users)