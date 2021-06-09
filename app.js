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
  res.send('Webservice for Excel');
});

app.get('/th/:number', (req, res) => {
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

app.get('/area/:sqwah', (req, res) => {
  const sqwah2rnw = (sqwah) => {
    const rai = Math.floor(sqwah / 400);
    const ngan = Math.floor((sqwah - 400 * rai) / 100);
    const wah = sqwah - rai * 400 - ngan * 100;
    return `${rai}-${ngan}-${wah}`;
  };
  res.send(sqwah2rnw(+req.params.sqwah));
});

app.get('/bmi', (req, res) => {
  console.log(req.query);
  let height = +req.query.height; // in cm.
  let weight = +req.query.weight; // in kg.
  let bmi = weight / (height / 100) ** 2;
  res.send(bmi.toString()); // bmi (number) must be converted to string before sending
});

app.listen(process.env.PORT, () => {
  console.log(`Example app listening at http://localhost:${process.env.PORT}`);
});
