const express = require('express');
const app = express();
require('dotenv').config();

const { BAHTTEXT } = require('./bahttext');
const { ToWords } = require('to-words');

// const toWords = new ToWords(); // number to English words
const toWords = new ToWords({
  localeCode: 'en-US',
  converterOptions: {
    currency: true,
    ignoreDecimal: false,
    ignoreZeroCurrency: false,
  },
});

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/:number', (req, res) => {
  res.send(BAHTTEXT(req.params.number));
});

app.get('/en/:number', (req, res) => {
  // console.log(req.query);
  // console.log(JSON.parse(req.query.currency.toLowerCase()));
  let currency = true;
  if (req.query.currency) {
    currency = JSON.parse(req.query.currency.toLowerCase());
  }
  res.send(toWords.convert(req.params.number, { currency }));
});

app.listen(process.env.PORT, () => {
  console.log(`Example app listening at http://localhost:${process.env.PORT}`);
});
