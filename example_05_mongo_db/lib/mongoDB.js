var express = require("express");
var bodyParser = require("body-parser");
var cors = require("cors");
var MongoClient = require("mongodb").MongoClient;

function mongoDbRoute() {
  var mongoLib = new express.Router();
  mongoLib.use(cors());
  mongoLib.use(bodyParser());

  mongoLib.post("/add", (req, res) => {
    MongoClient.connect("mongodb://localhost:27017", function(err, client) {
      var db = client.db("FH_LOCAL");
      var collection = db.collection("myMTACollection");

      collection.insert(
        {
          firstName: "Mongo",
          lastName: "Driver",
          address1: "22 Blogger Lanes",
          address2: "Bloggsvilles",
          country: "Blogglands",
          phone: "555-123456s",
          another: "woohoo"
        },
        function(err, resp) {
          if (err) {
            console.log("-->Issue inserting into database.");
            return res.status(400).json(err);
          } else {
            return res.status(200).send("success");
          }
        }
      );
    });
  });

  mongoLib.get("/read/:guid", (req, res) => {
    var options = {
      act: "read",
      type: "myMTACollection", // Entity/Collection name
      guid: req.params.guid // Row/Entry ID
    };
    $fh.db(options, function(err, data) {
      if (err) {
        console.error("Error " + err);
        var error = {
          msg: "Error Processing Query",
          error: err
        };
        return res.status(400).json(error);
      } else {
        return res.status(200).json(data);
      }
    });
  });

  mongoLib.get("/update", (req, res) => {});

  mongoLib.get("/delete", (req, res) => {});

  mongoLib.get("/list", (req, res) => {});

  return mongoLib;
}

module.exports = mongoDbRoute;
