'use strict';

var mongoose = require('mongoose');

var CarSchema = new mongoose.Schema({
  name: String

});

module.exports = mongoose.model('Car', CarSchema);
