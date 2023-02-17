const express = require('express');
const path = require('path');
const app = express();

const students = require('./api/students')
const campuses = require('./api/campuses')

app.use(express.static(path.join(__dirname, '..', 'public')));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

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

