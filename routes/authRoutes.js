const passport = require('passport');

module.exports = (app) => {
    app.get(
        '/auth/google', 
        passport.authenticate('google', {
            scope: ['profile', 'email']
        })
    ); 
    
    app.get('/auth/google/callback', passport.authenticate('google'));

    app.get('/logout', (req, res) => {
        req.logout();
        res.send("Successfully logged out!");
    })

    app.get('/currUser', (req, res) => {
        res.send(req.user);
    })
};
