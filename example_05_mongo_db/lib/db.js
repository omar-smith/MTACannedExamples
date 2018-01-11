var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var $fh = require('fh-mbaas-api');

function dbRoute() {
  var dbLib = new express.Router();
  dbLib.use(cors());
  dbLib.use(bodyParser());

  dbLib.post('/add', (req, res) => {
    var options = {
      "act": "create",
      "type": "myFirstEntity", // Entity/Collection name
      "fields": { // The structure of the entry/row data. A data is analogous to "Row" in MySql or "Documents" in MongoDB
        "firstName": "Joe",
        "lastName": "Bloggs",
        "address1": "22 Blogger Lane",
        "address2": "Bloggsville",
        "country": "Bloggland",
        "phone": "555-123456"
      }
    };
    $fh.db(options, function (err, data) {
      if (err) {
        console.error("Error " + err);
      } else {
        console.log(JSON.stringify(data));
      }
    });
  });


  return dbLib;
}

module.exports = dbRoute;
