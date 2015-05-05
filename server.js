process.env.NODE_ENV = process.env.NODE_ENV || 'development';

var mongoose = require ("./config/mongoose"),
    passport = require('./config/passport');
    express = require ('./config/express');

var db  = mongoose();    
var passport = passport();
var app = express();


var port = 3000;

app.listen(port);

module.exports = app;

console.log("Server is running at http://localhost:3000");