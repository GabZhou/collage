const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/email-builder');

const db = mongoose.connection;

module.exports = db;