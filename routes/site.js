const express = require('express');
const sites = express.Router();

var connectToDB = require('../db')

sites.route('/').get(async function (req, res) {
  const dbConnect = await connectToDB();
  console.log(dbConnect.db)
  dbConnect.db
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

module.exports = sites;