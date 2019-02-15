const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const categoryrouter = require('./category/categoryrouter');
const articleRouter = require('./articte/router');
mongoose.connect(
    'mongodb://localhost/tast1',
    {
        useCreateIndex: true,
        useNewUrlParser: true
    }, () => {
        console.log('Connect to MongoDb...');
    }
);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/categories', categoryrouter);
app.use('/article',articleRouter)
module.exports = app; 