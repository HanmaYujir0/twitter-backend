const mongoose = require('mongoose');

const twitShema = mongoose.Schema({
    title: String,
    text: String,
    like: [{
        ref: "User",
        type: mongoose.SchemaTypes.ObjectId
    }]
})

const Twit = mongoose.model('Twit', twitShema);

module.exports = Twit;