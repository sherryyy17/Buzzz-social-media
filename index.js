const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser')
const keys = require('./config/keys');
const cookieSession = require('cookie-session');
const authRoutes = require('./routes/authRoutes');
const userRoutes = require('./routes/users');
const postRoutes = require('./routes/posts');
const passport = require('passport');
require('./services/passport');
var cors = require('cors');

mongoose.connect(keys.mongoURI);

const app = express();

app.use(bodyParser.json())
app.use(cors());

app.use(
    cookieSession({
        maxAge: 30 * 24 * 60 * 60 * 1000,
        keys: [keys.cookieKey]
    })
);
app.use(passport.initialize());
app.use(passport.session());

authRoutes(app);
app.use(userRoutes);
app.use(postRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => { console.log("Listening to port 5000"); })