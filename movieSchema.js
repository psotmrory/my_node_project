const mongoose = require('mongoose');

const Schema = mongoose.Schema;

// Сутність "Фільм"
const movieSchema = new Schema({
    id: { type: Number, required: true },
    title: { type: String, required: true },
    year: { type: Number, required: true },
    director: { type: String, required: true },
    genre: { type: String, required: true },
    rating: { type: Number, required: true }
});

// Модель сутності "Фільм"
const Movie = mongoose.model('Movie', movieSchema);

module.exports = { Movie };
