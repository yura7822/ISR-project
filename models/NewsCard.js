const { Schema, model } = require("mongoose");

const cardSchema = new Schema({
  title: String,
  author: String,
  description: String,
  image: String,
  category: String
});

const NewscardPrototipe = model('NewscardPrototipe', cardSchema);

async function getAllNews() {
  try {
    return await NewscardPrototipe.find(); 
  } catch (error) {
    console.error("Помилка при отриманні новин з бази даних:", error);
    throw error;
  }
}

module.exports = { NewscardPrototipe, getAllNews };
