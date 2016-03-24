var Sighting = require('/Sighting');

module.exports = {
//Post new
  create: function(req, res) {
    var newSighting = new Sighting(req.body);
    newSighting.save(function(err, result) {
      if(err) return res.status(500).send(err);
      else res.send(result);
    });
  },
//Get info
  read: function(req, res) {
    Sighting.find(req.query)
    .exec(function(err, result) {
      if(err) return res.status(500).send(err);
      else res.send(result);
    });
  },
//Put updated info
  update: function(req, res) {
    Sighting.findByIdAndUpdate(req.params.id, req.body, function(err, result) {
      if(err) return res.status(500).send(err);
      else res.send(result);
    });
  },
//Delete some info
  delete: function(req, res) {
    Sighting.findByIdAndRemove(req.params.id, function(err, result) {
      if(err) return res.status(500).send(err);
      else res.send(result);
    });
  }

};
