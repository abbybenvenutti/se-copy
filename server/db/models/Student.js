'use strict'

const db = require('../database');
const Sequelize = require('sequelize');

const Student = db.define('student', {
  firstName: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  lastName: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
      isEmail: true
    }
  },
  imageUrl: {
    type: Sequelize.STRING,
    defaultValue:
      'https:i.pinimg.com/236x/8d/65/20/8d6520bd03d17f94ff22690f284344c8--happy-faces-happy-smile.jpg'
},
  gpa: {
    type: Sequelize.DOUBLE,
    validate: {
      min: 0.0,
      max: 4.0
    }
  }
})


module.exports = Student
