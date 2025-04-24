const express = require('express');
const router = express.Router();
const Notification = require('../models/Notification');

// POST /notifications
router.post('/', async (req, res) => {
  try {
    const notif = new Notification(req.body);
    await notif.save();
    res.status(201).json({ message: 'Notification saved successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to save notification' });
  }
});

module.exports = router;
