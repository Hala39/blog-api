const express = require('express');
const router = express.Router();
const Blog = require('../models/blog');

router.get('/', async (req, res) => {
    const blogs = await Blog.find().sort('-postDate');
    res.send(blogs)
});

router.get('/:id', async (req, res) => {
    const blog = await Blog.findById(req.params.id);
 
    if (!blog) return res.status(404).send("Not Found");

    res.send(blog);
})

router.post('/', async (req, res) => {
    let blog = new Blog({
        title: req.body.title,
        description: req.body.description,
        body: req.body.body,
        imageUrl: req.body.imageUrl,
        category: req.body.category,
        author: {
            name: req.body.author.name,
            title: req.body.author.title,
            imageUrl: req.body.author.imageUrl
        }
    });

    blog = await blog.save();

    res.send(blog);
})

router.put('/:id', async (req, res) => {
    const blog = await Blog.findByIdAndUpdate(req.params.id, {
        title: req.body.title,
        description: req.body.description,
        body: req.body.body,
        imageUrl: req.body.imageUrl,
        category: req.body.category
    }, 
    {
        new: true
    })

    if (!blog) return res.status(404).send("Not Found");

    res.send(blog);
})

router.delete('/:id', async (req, res) => {
    const blog = await Blog.findByIdAndDelete(req.params.id);

    if (!blog) return res.status(404).send("Not Found");

    res.send(blog);
})

module.exports = router;