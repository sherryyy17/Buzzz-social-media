const passport = require('passport');
const GoogleStratergy = require('passport-google-oauth2');
const keys = require('../config/keys');

const { UserModel } = require('../models/User');

passport.serializeUser((user, done) => {
    done(null, user.id); //_id.ObjectID
});

passport.deserializeUser((id, done) => {
    UserModel.findById(id)
        .then(user => {
            done(null,user);
        })
})

passport.use(new GoogleStratergy(
    {
        clientID: keys.clientID,
        clientSecret: keys.clientSecret,
        callbackURL: '/auth/google/callback'
    }, 
    (accessToken, refreshToken, profile, done) => {
        console.log(profile);
        UserModel.findOne({ googleId: profile.id })
            .then((oldUser) => {
                if(oldUser) {
                    done(null,oldUser)
                } else {
                    new UserModel({ 
                        googleId: profile.id,
                        firstName: profile.given_name,
                        lastName: profile.family_name,
                        email: profile.email,
                        profilePic: profile. picture
                    }).save()
                    .then(user => done(null,user));
                }
            })
    }
));
