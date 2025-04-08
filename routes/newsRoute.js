const express = require("express");
const mongoose = require("mongoose");
const { getAllNews } = require("../models/NewsCard");

const app = express(); 

app.get('/news', async (req, res) => {
    try {
        const news = await getAllNews(); 
        res.status(200).json({
            message: 'Успіх',
            data: news
        });
    } catch (error) {
        console.error(error);
        res.status(500).send("Не вдалося отримати новини.");
    }
});

module.exports = app;
