const Twit = require('../models/Twit.model');

module.exports.twitController = {
    postTwit: (req, res) => {
        Twit.create({
            title: req.body.title,
            text: req.body.text,
        })
        .then(() => {
            res.json('Пост добавлен')
        })
        .catch((err) =>{
            res.json('Err! Please, try again')
        });
    },
    deleteTwit: (req, res) => {
        Twit.findByIdAndRemove(req.params.id)
        .then(() => {
            res.json('Пост удален')
        })
        .catch((err) =>{
            res.json('Err! Please, try again')
        });
    },
    patchTwit: (req, res) => {
        Twit.findByIdAndUpdate(req.params.id, {
            title: req.body.title,
            text: req.body.text,
        })
        .then(() => {
            res.json('Пост изменен')
        })
        .catch((err) =>{
            res.json('Err! Please, try again')
        });
    },
    getTwit: (req, res) => {
        Twit.find()
        .then((data) => {
            res.json(data)
        })
        .catch((err) =>{
            res.json('Err! Please, try again')
        });
    },
    getTwitById: (req, res) => {
        Twit.findById(req.params.id)
        .then((data) => {
            res.json(data)
        })
        .catch((err) =>{
            res.json('Err! Please, try again')
        });
    },
    addLike: (req,res) => {
        Twit.findByIdAndUpdate(req.params.id , {
            $push: {
                like: req.body.like
            }
        })
        .then((data) => {
            res.json(data)
        })
        .catch((err) =>{
            res.json('Err! Please, try again')
        });
    }
}