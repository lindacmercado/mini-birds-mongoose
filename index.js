//Dependencies
var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var mongoose = require('mongoose');

//Connections
var port = 3000;
var mongoUri = 'mongodb://localhost:27017/mini-birds-mongoose';

//invoke express
var app = express();

//Controller
var SightingCtrl = require('SightingCtrl');

//Middleware
app.use(bodyParser.json());
app.use(cors());

//Endpoints
app.get('/Sighting', SightingCtrl.read);
app.post('/Sighting', SightingCtrl.create);
app.put('/Sighting/:id', SightingCtrl.update);
app.delete('/Sighting/:id', SightingCtrl.delete);

//Mongoose Connections
mongoose.set('debug', true);
mongoose.connect(mongoUri);
mongoose.connection.once('open', function(){
  console.log("Connected to MongoDb at: " + mongoUri);
})

app.listen(port, function() {
  console.log("listening on port " + port);
});
