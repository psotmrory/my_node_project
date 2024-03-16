const { Movie } = require('./movieSchema');

// Операція створення
async function createMovie(data) {
    try {
        const newMovie = await Movie.create(data);
        return newMovie;
    } catch (error) {
        throw error;
    }
}

// Операція читання
async function readMovie(movieId) {
    try {
        const movie = await Movie.findById(movieId);
        return movie;
    } catch (error) {
        throw error;
    }
}

// Операція оновлення
async function updateMovie(movieId, newData) {
    try {
        const updatedMovie = await Movie.findByIdAndUpdate(movieId, newData, { new: true });
        return updatedMovie;
    } catch (error) {
        throw error;
    }
}

// Операція видалення
async function deleteMovie(movieId) {
    try {
        await Movie.findByIdAndDelete(movieId);
    } catch (error) {
        throw error;
    }
}

module.exports = {
    createMovie,
    readMovie,
    updateMovie,
    deleteMovie
};
