const mongoose = require('mongoose');

// Model for the collection of medicine
const MedSchema = mongoose.Schema({
    uniqueID: String,
    drugName: String,
    condition: String,
    review: String,
    rating: String,
    date: {
        type: String,
        required: true,
    },
    usefulCount: String
})

module.exports = mongoose.model('Medicine', MedSchema);