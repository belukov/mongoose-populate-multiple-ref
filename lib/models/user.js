'use strict';

var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
  name: String,
  buyer: {
    cars: [{
      carId: {type: mongoose.Schema.Types.ObjectId, ref: 'Car'},
      description: String
    }]
  }

});

module.exports = mongoose.model('User', UserSchema);
