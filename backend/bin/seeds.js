const csvFilePath = './drugsComTest_raw.csv'
const csv = require('csvtojson')
const Medicine = require('../models/Medicine');
const User = require('../models/User');
const users = require('./users')
const mongoose = require('mongoose');

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost/care-dash'
console.log('Connecting DB to ', MONGODB_URI)

mongoose
    .connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then((x) => console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`))
    .catch((err) => console.error('Error connecting to mongo', err));
//Convert csv drug data to JSON and insert it
csv()
    .fromFile(csvFilePath)
    .then((jsonObj) => {
        console.log(jsonObj);
    Medicine.insertMany(jsonObj) 
       
        /**
         * [
         * 	{a:"1", b:"2", c:"3"},
         * 	{a:"4", b:"5". c:"6"}
         * ]
         */
    })
User.insertMany(users)