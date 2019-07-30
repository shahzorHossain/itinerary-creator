const express = require('express');
const bodyParser = require('body-parser');
const pino = require('express-pino-logger')();
const Amadeus = require('amadeus');
const key = require('../keys/keys.js');

const app = express();
const API_KEY = key.API_KEY;
const API_SECRET = key.API_SECRET;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(pino);

var amadeus = new Amadeus({
  clientId: API_KEY,
  clientSecret: API_SECRET
});

var barcelonaData = [];

// Barcelona data list gathering
amadeus.referenceData.locations.pointsOfInterest
  .get({
    latitude: 41.387573,
    longitude: 2.175313,
    radius: 8
  })
  .then(response => {
    barcelonaData = response.result.data;
  })
  .catch(error => {
    console.log(error);
  });

app.get('/api/barcelona', (req, res) => {
  res.send(barcelonaData);
});

app.listen(3001, () =>
  console.log('Express server is running on localhost:3001')
);
