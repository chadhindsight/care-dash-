const User = require('../models/User');
const passport = require('passport');

// This createStrategy() line is related to mongoose and passport hooking up.
passport.use(User.createStrategy());

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

module.exports = passport;
