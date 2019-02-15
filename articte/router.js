const express = require('express');
const router = express.Router();
const Article = require('./mogul');
const mongoose = require('mongoose');

router.get('/', async (req, res) => {
    const artic = await Article.find({})
    res.status(200).json({
        artic: artic
    })
});
router.post('/', async (req, res) => {
    const newArtic = await Article.create({
        _id: mongoose.Types.ObjectId(),
        title: req.body.title,
        text: req.body.text,
        data: new Date,
        category: req.body.category
    })
    res.status(200).json({
        newArtic: newArtic
    })
});







module.exports = router