const mongoose = require('mongoose');
const articleSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    title: {
        type: String,
        require: true
    },
    text: {
        type: String,
        require: true
    },
    date: {
        type: Date,
        require: true
    },
    category:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"category",
        require:true
    }
})
module.exports = mongoose.model('article',articleSchema);

