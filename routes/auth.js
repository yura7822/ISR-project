const express = require('express');
const router = express.Router();
const User = require('../models/User'); 
const jwt = require('jsonwebtoken');

const mySecKey = 'secretik123';

router.post('/registration', async (req, res) => {
  try {
    const { email, password, firstname, lastname } = req.body;

    const isUsed = await User.findOne({ email });
    if (isUsed) {
      return res.status(400).json({ message: 'This e-mail is already used, try another one.' });
    }
    const user = new User({ email, password, firstname, lastname });
    await user.save();

    res.status(201).json({ message: 'User registered successfully!' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error, please try again later.' });
  }
});

router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: 'User not found' });
    }

    if (user.password !== password) {
      return res.status(400).json({ message: 'Incorrect password' });
    }

    const token = jwt.sign(
      { userId: user._id, userFirstName: user.firstname, userLastName: user.lastname },
      mySecKey, 
      { expiresIn: '1h' } 
    );

    res.status(200).json({
      message: 'Login successful',
      token: token,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
