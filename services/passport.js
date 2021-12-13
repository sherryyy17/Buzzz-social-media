const passport = require('passport');
const GoogleStratergy = require('passport-google-oauth2');
const keys = require('../config/keys');

passport.use(new GoogleStratergy(
    {
        clientID: keys.clientID,
        clientSecret: keys.clientSecret,
        callbackURL: '/auth/google/callback'
    }, 
    (accessToken, refreshToken, profile, done) => {
        console.log(accessToken);
        console.log(refreshToken);
        console.log(profile);
    }
));
