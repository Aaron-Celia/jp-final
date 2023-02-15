const express = require('express');
const path = require('path');
// const cors = require('cors');
// const volleyball = require('volleyball');
const app = express();
const router = require('./api')

// static middleware
app.use(express.static(path.join(__dirname, '..','public')));

// app.use(cors());
// app.use(volleyball);
app.use(express.urlencoded({extended: false}));
// app.use(express.json());

app.use('/api', router);

app.use("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/index.html"));
});

app.use((req, res, next) => {
  const err = new Error('API route not found!')
  err.status = 404
  next(err)
})

module.exports = {
  app
}

