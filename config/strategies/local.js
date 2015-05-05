var passport = require ('passport'),
    LocalStrategy = require ('passport-local').Strategy,
    User = require('mongoose').model('User');

module.exports = function (){
  passport.use(new LocalStrategy({
    usernameField: 'email'
  },function(username, password, done){
    console.log("Someone is trying to log with password:" + password + "username: " + username);
    User.findOne({
      'email': username
    }, function (err, user){
      if(err){
        return done(err);
      } 

      if (!user) {
        return done(null, false, {
          message: "Unknown user"
        });
      }

      if (!user.authenticate(password)) {
        return done(null, false, {
          message: 'Invalid password'
        });
      }

      return done(null, user);
    });
  }));
};