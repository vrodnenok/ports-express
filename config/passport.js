var passport = require ("passport"),
    mongoose = require ("mongoose");

module.exports = function (){
  var User = mongoose.model('User');

  passport.serializeUser(function(user, done){
    console.log("Trying to serialize user id = " + user.id);
    done(null, user.id);
  });

  passport.deserializeUser(function(id, done){
    console.log("Trying to serialize user id = " + id);
    User.findOne({
      _id: id
    }, '-password -salt', function (err, user){
      done(err, user);
    });
  });
  require('./strategies/local.js')();
};