const Comment = require('../models/Comment.model');

module.exports.commentController = {
    postComment: (req, res) => {
        Comment.create({
            text: req.body.text,
            user: req.body.user,
            twit: req.body.twit,
        })
        .then(() => {
            res.json('Комментарий добавлен')
        })
        .catch((err) =>{
            res.json('Err! Please, try again')
        });
    },
    getComment: (req, res) => {
        Comment.find()
        .populate('twit')
        .populate('user')
        .then((data) => {
            res.json(data)
        })
        .catch((err) =>{
            res.json('Err! Please, try again')
        });
    },
    deleteComment: (req, res) => {
        Comment.findByIdAndRemove(req.params.id)
        .then((data) => {
            res.json(data)
        })
        .catch((err) =>{
            res.json('Err! Please, try again')
        });
    },
    patchComment: (req, res) => {
        Comment.findByIdAndUpdate(req.params.id, {
            text: req.body.text,
            user: req.body.user,
            twit: req.body.twit,
        })
        .then((data) => {
            res.json(data)
        })
        .catch((err) =>{
            res.json('Err! Please, try again')
        });
    }

}