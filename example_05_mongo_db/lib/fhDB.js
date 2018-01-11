var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var $fh = require('fh-mbaas-api');

function dbRoute() {
  var dbLib = new express.Router();
  dbLib.use(cors());
  dbLib.use(bodyParser());

  dbLib.post('/add', (req, res) => {
    var payload = {
      "act": "create",
      "type": "myMTACollection", // Entity/Collection name
      "fields": { // The structure of the entry/row data. A data is analogous to "Row" in MySql or "Documents" in MongoDB
        "firstName": "Joe",
        "lastName": "Bloggs",
        "address1": "22 Blogger Lane",
        "address2": "Bloggsville",
        "country": "Bloggland",
        "phone": "555-123456",
        "another": "record"
      }
    };
    $fh.db(payload, function (err, data) {
      if (err) {
        console.error("Error " + err);
        var error = {
          "msg": "Error Processing Query",
          "error":err
        };
        return res.status(400).json(error);
      } else {
        return res.status(200).send('success');
      }
    });
  });

  dbLib.get('/read/:guid', (req, res) => {
    var options = {
      "act": "read",
      "type": "myMTACollection", // Entity/Collection name
      "guid": req.params.guid // Row/Entry ID
    };
    $fh.db(options, function (err, data) {
      if (err) {
        console.error("Error " + err);
        var error = {
          "msg": "Error Processing Query",
          "error":err
        };
        return res.status(400).json(error);
      } else {
        return res.status(200).json(data);
      }
    });
  });

  dbLib.get('/update', (req, res) => {

  });

  dbLib.get('/delete', (req, res) => {

  }); 
  
  dbLib.get('/list', (req, res) => {

  });

  return dbLib;
}

module.exports = dbRoute;
