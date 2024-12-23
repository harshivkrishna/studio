const express = require('express');
const multer = require('multer');
const path = require('path');
const Image = require('../models/image'); // Import the Image model

const router = express.Router();

// Set up storage for multer
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    // Ensure the 'uploads' folder exists
    cb(null, './public/uploads');
  },
  filename: (req, file, cb) => {
    // Set the file name with a unique timestamp and extension
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({ storage });

// POST route for image upload
router.post('/upload', upload.single('image'), async (req, res) => {
  if (!req.file) {
    return res.status(400).json({ success: false, message: 'No file uploaded' });
  }

  try {
    const newImage = new Image({
      imagePath: `/uploads/${req.file.filename}`, // Store the relative path
    });

    await newImage.save(); // Save the image to the database

    res.status(200).json({
      success: true,
      message: 'Image uploaded successfully!',
      imagePath: newImage.imagePath,
    });
  } catch (error) {
    console.error('Error saving image:', error);
    res.status(500).json({ success: false, message: 'Error saving image to database' });
  }
});

module.exports = router;
