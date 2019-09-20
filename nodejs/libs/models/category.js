var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Category = new Schema({
    title: {
        type: String,
        required: true
    },

    parentId: {
        type: String,
        required: false
    }
});

module.exports = mongoose.model('Category', Category);
