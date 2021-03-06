const express = require('express');
const bodyParser = require('body-parser');
const passport = require('passport');
const morgan = require('morgan');

const config = require('./config.js');

// connect to the database and load models
require('./server/models').connect(config.dbUrl);

const app = express();
// tell the app to look for static files in these directories
app.use(express.static('./server/static/'));
app.use(express.static('./client/dist/'));

// tell the app to parse HTTP body messages
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.use(morgan('dev'));

// pass the passport middleware
app.use(passport.initialize());

// load passport strategies
const localSignupStrategy = require('./server/passport/local-signup');
const localLoginStrategy = require('./server/passport/local-login');
passport.use('local-signup', localSignupStrategy);
passport.use('local-login', localLoginStrategy);

// pass the authenticaion checker middleware
const authCheckMiddleware = require('./server/middleware/auth-check');
app.use('/api', authCheckMiddleware);

// routes
const authRoutes = require('./server/routes/auth');
app.use('/auth', authRoutes);

const apiRoutes = require('./server/routes/api');
app.use('/api', apiRoutes);

const test = require('./server/routes/test');
app.use('/test', test);

const bike = require('./server/routes/bike');
app.use('/bike', bike);


// start the server
app.listen(config.port, () => {
  console.log('Server is running on http://127.0.0.1:4000 or ', config.port);
});