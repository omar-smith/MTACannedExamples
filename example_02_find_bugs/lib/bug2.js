var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');

function bugTwoRoute() {
  var bugTwo = new express.Router();
  bugTwo.use(cors());
  bugTwo.use(bodyParser());


  // GET REST endpoint - query params may or may not be populated
  bugTwo.get('/', function(req, res) {
    var array = [1,'2',3,'4','hi','there'];
    
    var returnArray = [];
    var numberArray = [];
    var stringArray = [];

    array.forEach(function (value) {
      if (typeof value === 'number') {
        numberArray.push(value);
      } else if (typeof value === 'string') {
        stringArray.push(value);
      }
    });

    returnArray.push(numberArray);
    returnArray.push(stringArray);

    return res.json(returnArray);
  });

  return bugTwo;
}

module.exports = bugTwoRoute;
