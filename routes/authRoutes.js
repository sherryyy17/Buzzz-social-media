const passport = require('passport');

module.exports = (app) => {
    app.get(
        '/auth/google', 
        passport.authenticate('google', {
            scope: ['profile', 'email']
        })
    ); 
    
    app.get('/auth/google/callback', passport.authenticate('google', {
        successRedirect: "/api/currUser"
    }));

    app.get('/logout', (req, res) => {
        req.logout();
        res.send("Successfully logged out!");
    })

    app.get('/api/currUser', (req, res) => {
        res.send(req.user);
    })
};
