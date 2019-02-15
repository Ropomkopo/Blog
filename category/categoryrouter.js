const express = require('express');
const router = express.Router();
const Category = require('./catedorymodul')
const mongoose = require('mongoose');

router.get('/', async (req, res) => {
    const categories = await Category.find({});
    res.status(200).json({
        categories: categories
    })
});

router.post('/', async (req, res) => {
    const newCategory = await Category.create({
        _id:  mongoose.Types.ObjectId(),
        name: req.body.name
    })
    res.status(200).json(newCategory)
});


router.delete('/:id', async (req, res) => {
    const id = req.params.id;
    const data = await Category.deleteMany({_id: id});
    res.status(200).json(data)
});

module.exports = router;