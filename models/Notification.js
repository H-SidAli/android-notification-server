const mongoose = require('mongoose');

const notificationSchema = new mongoose.Schema({
  packageName: String,
  title: String,
  text: String,
  timestamp: Number
}, { timestamps: true });

module.exports = mongoose.model('Notification', notificationSchema);