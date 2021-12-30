const blogs = require('./routes/blogs');
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const mongoose = require("mongoose");

mongoose.connect('mongodb://localhost/blog')
    .then(() => console.log('Connected to mongoDb'))
    .catch(err => console.log(err));

app.use(cors());    
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));
app.use(express.json());


app.use('/api/blogs', blogs);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server is running on port ${port}..`));