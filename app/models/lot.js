var mongoose = require('mongoose');

var lotSchema = mongoose.Schema({
  name: {type: String, required: true},
  latitude: {type: Number, required: true},
  longitude: {type: Number, required: true},
  spotcount: {type: Number, required: true},
  capacity: {type: Number, required: true},
  increments: {type: Number}
  decrements: {type: Number}
});

exports.model = mongoose.model('lot', lotSchema);




