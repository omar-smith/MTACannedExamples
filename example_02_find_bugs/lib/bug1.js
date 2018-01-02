var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');

function bugOneRoute() {
  var bugOne = new express.Router();
  bugOne.use(cors());
  bugOne.use(bodyParser());


  // GET REST endpoint - query params may or may not be populated
  bugOne.get('/', function(req, res) {
    var array = ['1','2','3','4'];
    var returnArray = [];

    array.forEach(function (value) {
      returnArray.push(value);
    });

    return res.json(returnArray);
  });

  // POST REST endpoint - note we use 'body-parser' middleware above to parse the request body in this route.
  // This can also be added in application.js
  // See: https://github.com/senchalabs/connect#middleware for a list of Express 4 middleware
  bugOne.post('/', function(req, res) {
    var array = ['1','2','3','4'];
    var returnArray = [];

    array.forEach(function (value) {
      returnArray.push(value);
    });

    res.json(returnArray);
  });

  return bugOne;
}

module.exports = bugOneRoute;
