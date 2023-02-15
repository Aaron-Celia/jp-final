const Sequelize = require('Sequelize');

const db = new Sequelize(`postgres://localhost:5432/acme_schools_db`, {
  logging: false
})


module.exports = db