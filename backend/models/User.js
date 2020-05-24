const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');
const userSchema = new mongoose.Schema(
    {
        email: String,
        name: String,
        primaryPharmacy: String,
        medications: [String],
        order: [Object]
    },
    {
        timestamps: true,
        versionKey: false
    }
);
userSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model('User', userSchema);