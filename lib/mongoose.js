'use strict';

var mongoose = require('mongoose');
var db;
function connect() {
  mongoose.connect('mongodb://localhost/mongo_refs', {});
  db = mongoose.connection;
  db.on('error', console.error.bind(console, 'connection error:'));
  db.once('open', function() {
    console.log('DB connected');
  });
  db.on('disconnect', connect);
}

connect();

module.exports = mongoose;

