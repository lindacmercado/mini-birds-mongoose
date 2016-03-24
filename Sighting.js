//Model
var mongoose = require('mongoose');

var sightingSchema = new mongoose.Schema({
  name: {type: String, lowercase: true},
  order: {type: String, lowercase: true, maxlength: 20},
  status: {type: String, lowercase: true,
    enum: [
      'extinct',
      'extinct in the wild',
      'critically endangered',
      'endangered',
      'vulnerable',
      'near threatened',
      'conservation dependent',
      'least concern'
  ]},
  numberSeen: {type: Number, min: 1},
  confirmed: {type: Boolean, default: false}
  //updateAt: {}

});
module.exports = mongoose.model('Sighting', sighting.Schema);
