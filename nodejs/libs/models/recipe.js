const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Recipe = new Schema({
    categoryId: {
        type: String,
        required: true
    },

    title: {
        type: String,
        required: true
    },

    text: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Recipe', Recipe);
