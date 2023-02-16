const express = require('express');
const path = require('path');
// const cors = require('cors');
// const volleyball = require('volleyball');
const app = express();
// const router = require('./api')

const students = require('./api/students')
const campuses = require('./api/campuses')

// static middleware
app.use(express.static(path.join(__dirname, '..','public')));

// app.use(cors());
// app.use(volleyball);
app.use(express.urlencoded({extended: false}));

//middleware bodyparser for forms
app.use(express.json());

// app.use(express.json());

// app.use('/api', router);

app.use('/students', students);
app.use('/campuses', campuses);

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

