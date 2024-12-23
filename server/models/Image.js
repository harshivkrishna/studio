const express = require('express');
const multer = require('multer');
const path = require('path');
const mongoose = require('mongoose');
const Image = require('../models/image'); // Import the Image model

const router = express.Router();

// Set up storage for multer
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, './public/uploads'); // Directory to store the uploaded files
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname)); // Generate unique filename
  },
});

const upload = multer({ storage });

// Route for uploading image
router.post('/upload', upload.single('image'), async (req, res) => {
  if (!req.file) {
    return res.status(400).json({ success: false, message: 'No file uploaded' });
  }

  try {
    // Save the file path to the database (if necessary)
    const newImage = new Image({
      imagePath: `/uploads/${req.file.filename}`, // Relative path to store in DB
    });

    await newImage.save();
    res.status(200).json({ success: true, imagePath: newImage.imagePath });
  } catch (error) {
    console.error('Error saving image:', error);
    res.status(500).json({ success: false, message: 'Error saving image' });
  }
});

module.exports = router;
