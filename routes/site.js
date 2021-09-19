const express = require('express');
const sites = express.Router();

var connectToDB = require('../db')
var dbConn = connectToDB;

sites.route('/sites').get(async function (req, res) {
  const dbConnect = dbo.dbConn();

  dbConnect
    .collection("sites")
    .find({}).limit(50)
    .toArray(function (err, result) {
    if (err) {
      res.status(400).send("Error fetching listings!");
    } else {
      res.json(result);
    }
  });
});
