const express = require('express');
const app = express();
const port = 5001;

const { getAdsSpend, getPurchases } = require('./BigQueryClient');

// Add headers before the routes are defined
app.use(function (req, res, next) {

  // Website you wish to allow to connect
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');

  // Request methods you wish to allow
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

  // Request headers you wish to allow
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader('Access-Control-Allow-Credentials', true);

  // Pass to next layer of middleware
  next();
});

app.get('/', (req, res) => {
  res.send('Hello World!')
});

app.listen(port, () => {
  console.log(`Server app listening at http://localhost:${port}`)
});

app.get('/ads-spend-data', (req, res) => {
  console.log('Fetching ads spend data from BigQuery');
  const resultPromise = getAdsSpend();
  resultPromise.then(result => {
    console.log("Done fetching data");
    res.send(result);
  });
});

app.get('/purchase-data', (req, res) => {
  console.log('Fetching data from BigQuery');
  const resultPromise = getPurchases();
  resultPromise.then(result => {
    console.log("Done fetching data");
    res.send(result);
  });
});