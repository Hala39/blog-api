const mongoose = require('mongoose');
const authorSchema = require('./author');

const Blog = mongoose.model('Blog', new mongoose.Schema({
    title: { 
        type: String, 
        required: true, 
        minlength: 3, 
        maxlength: 200
    },
    description: {
        type: String, 
        required: true, 
        minlength: 20, 
        maxlength: 400
    },
    body: {
        type: String, 
        required: true, 
        minlength: 100, 
        maxlength: 5000
    },
    imageUrl: {
        type: String,
        required: true
    },
    category: {
        type: String,
        default: 'Design',
        enum: [
            'Design',
            'Art', 
            'Technology',
            'Entertainment', 
            'Others'
        ]
    },
    postDate: { type: Date, default: Date.now },
    author: {
        type: authorSchema,
        required: true
    }
}));

module.exports = Blog;
