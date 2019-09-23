const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Category = new Schema({
    title: {
        type: String,
        required: true
    },

    parentId: {
        type: String,
        required: false,
        default: null
    }
});

module.exports = mongoose.model('Category', Category);
