const mongoose = require('mongoose');

const userShema = mongoose.Schema({
    name: String, 
    save: [{
        ref: "Twit",
        type: mongoose.SchemaTypes.ObjectId,
    }],
})

const User = mongoose.model('User', userShema)

module.exports = User