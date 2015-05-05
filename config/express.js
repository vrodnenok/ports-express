var config = require('./config'),
  session = require('express-session'), 
  express = require('express'),
  morgan = require('morgan'),
  methodOverride = require('method-override'),
  bodyParser = require('body-parser'),
  flash = require('connect-flash'),
  compress = require('compression'),
  passport = require('passport');

module.exports = function(){
  console.log(process.env.NODE_ENV);
  var app = express();
  if (process.env.NODE_ENV === 'development'){
    app.use(morgan('dev'));
    console.log("adding morgan");
  } else if (process.env.NODE_ENV === 'production'){
    app.use(compress());
  }

  app.use(bodyParser.urlencoded({
    extended: true  
  }));
  app.use(bodyParser.json());
  app.use(methodOverride());
  app.use(flash());

  app.use(session({
    saveUninitialized: true,
    resave: true,
    secret: config.sessionSecret
  }));

  app.use(passport.initialize());
  app.use(passport.session());

  app.set('views', './app/views');
  app.set('view engine', 'ejs');

  require("../app/routes/index.server.routes.js")(app);
  require("../app/routes/user.server.routes.js")(app);

  return app;
};