const express = require('express');
const bodyParser = require('body-parser');
const pino = require('express-pino-logger')();
const Amadeus = require('amadeus');
const key = require('../keys/keys.js');
const axios = require('axios');

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
var parisData = [];
var randomUsernames = [];

// Barcelona data list gathering
amadeus.referenceData.locations.pointsOfInterest
  .get({
    latitude: 41.387573,
    longitude: 2.175313,
    radius: 8
  })
  .then(res => {
    barcelonaData = res.result.data;
  })
  .catch(error => {
    console.log(error);
  });
// Paris data list gathering
amadeus.referenceData.locations.pointsOfInterest
  .get({
    latitude: 48.864716,
    longitude: 2.349014,
    radius: 8
  })
  .then(res => {
    parisData = res.result.data;
  })
  .catch(error => {
    console.log(error);
  });

axios
  .get('https://uinames.com/api/?amount=10&region=canada')
  .then(res => {
    randomUsernames = res.data;
  })
  .catch(error => {
    console.log(error);
  });

app.get('/api/barcelona', (req, res) => {
  res.send(barcelonaData);
});
app.get('/api/paris', (req, res) => {
  res.send(parisData);
});
app.get('/api/extra-usernames', (req, res) => {
  res.send(randomUsernames);
});

app.listen(3001, () =>
  console.log('Express server is running on localhost:3001')
);
