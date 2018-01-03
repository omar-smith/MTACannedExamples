var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');

function newLibraryRoute() {
  var newLibrary = new express.Router();
  newLibrary.use(cors());
  newLibrary.use(bodyParser());

  newLibrary.get('/', function(req, res) {
    return res.json({msg: 'Response From New Library GET'});
  });

  newLibrary.post('/', function(req, res) {
    return res.json({msg: 'Response From New Library POST'});
  });

  newLibrary.get('/UnitTestFunction', function (req, res) {
    return res.json({ msg: 'Hello From Test Function' });
  });

  return newLibrary;
}

module.exports = newLibraryRoute;
