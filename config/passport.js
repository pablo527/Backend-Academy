const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

const mongoose = require('mongoose');
const User = require('../models/User'); 
const jwt = require('jsonwebtoken');
const {JWT_SCECRET} = require('../config/keys');

passport.use(new LocalStrategy({
  usernameField: 'email'
}, async (email, password, done) => {
  // Match Email's User
  const user = await User.findOne({email: email});
  if (!user) {
    return done(null, false, { message: 'Not User found.' });
  } else {
    // Match Password's User
    const match = await user.matchPassword(password);
    if(match) {
      const playload = {
        _id : user.id,
        name  : user.name,
        email : user.email
      }
      let token  = jwt.sign(playload, JWT_SCECRET, {
        expiresIn: 1440
      })
      console.log(token)
      return done(null,user, token);
    } else {
      return done(null, false, { message: 'Incorrect Password.' });
    }
  }

}));
//almacenar session
passport.serializeUser((user, done) => {
  done(null, user.id,token);
});

passport.deserializeUser((id, done) => {
  User.findById(id, (err, user) => {
    done(err, user);
  });
});