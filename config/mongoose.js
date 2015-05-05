var config = require ("./config"),
    mongoose = require ("mongoose");

module.exports = function (){
  var db = mongoose.connect(config.db);
  mongoose.set('debug', config.mongooseDebug);
  require ('../app/models/user.server.model');

  return db;
};