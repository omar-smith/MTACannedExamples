var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');

function helloRoute() {
  var hello = new express.Router();
  hello.use(cors());
  hello.use(bodyParser());

  var restArray = [];

  hello.get('/', function(req, res) {
    res.json(restArray);
  });

  hello.post('/', function (req, res) {
    restArray.push(req.body.val);
    res.json({msg: 'Added value: ' + req.body.val});
  });

  hello.delete('/', function (req, res) {
    restArray.pop();
    res.json({msg: 'Removed last value in array.'});
  });

  hello.put('/', function (req, res) {
    restArray.length = 0;
    res.json(restArray);
  });

  return hello;
}

module.exports = helloRoute;
