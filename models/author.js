const mongoose = require('mongoose');

const authorSchema = new mongoose.Schema({
    name: {
        type: String,
        minlength: 3,
        maxlength: 50
    },
    title: {
        type: String,
        minlength: 3,
        maxlength: 50
    },
    imageUrl: {
        type: String
    }
})

const Author = mongoose.model('Author', authorSchema);

module.exports = authorSchema;
