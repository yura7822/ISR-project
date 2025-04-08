const express = require('express');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const mySecKey = 'secretik123';  
const router = express.Router();

// Роут для отримання даних користувача
router.get('/user', async (req, res) => {
  try {
    const token = req.headers.authorization?.split(' ')[1];  // Отримуємо токен із заголовка

    if (!token) {
      return res.status(401).json({ message: 'Токен не надано' });  // Якщо токен відсутній
    }

    // Верифікація токену
    const decoded = jwt.verify(token, mySecKey);  // Перевіряємо токен
    const userId = decoded.userId;  // Отримуємо ID користувача із токену

    // Шукаємо користувача по ID
    const user = await User.findById(userId);  
    if (!user) {
      return res.status(404).json({ message: 'Користувач не знайдений' });  // Якщо користувача не знайшли
    }

    res.status(200).json({
      user: {
        userId: user._id,
        userFirstName: user.firstname,
        userLastName: user.lastname,
        userEmail: user.email,
      },
    });
  } catch (error) {
    console.error('Помилка при отриманні даних користувача:', error);
    res.status(500).json({ message: 'Внутрішня помилка сервера' });  // Помилка сервера
  }
});

module.exports = router;
