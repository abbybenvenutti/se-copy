'use strict'

const db = require('../database');
const Sequelize = require('sequelize');

const Campus = db.define('campus', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  imageUrl: {
    type: Sequelize.STRING,
    defaultValue:
      'https://amhsnewspaper.com/wp-content/uploads/2018/02/17DAY2rl_00782-1.jpg'

  },
  address: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  description: {
    type: Sequelize.TEXT
  }
})


module.exports = Campus
