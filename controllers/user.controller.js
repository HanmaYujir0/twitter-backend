const User = require('../models/User.model');

module.exports.userController = {
    postUser: (req, res) => {
        User.create({
            name: req.body.name,
        })
        .then(() => {
            res.json('Пользователь добавлен')
        })
        .catch((err) =>{
            res.json('Err! Please, try again')
        });
    },
    deleteUser: (req, res) => {
        User.findByIdAndRemove(req.params.id)
        .then(() => {
            res.json('Пользователь удален')
        })
        .catch((err) =>{
            res.json('Err! Please, try again')
        });
    },
    getUserById: (req, res) => {
        User.findById(req.params.id)
        .then((data) =>{
            res.json(data)
        })
        .catch((err) =>{
            res.json('Err! Please, try again')
        });
    },
    patchUser: (req, res) => {
        User.findByIdAndUpdate(req.params.id , {
            name: req.body.name,
        })
        .then(() =>{
            res.json('Пользователь изменен')
        })
        .catch((err) =>{
            res.json('Err! Please, try again')
        });
    },
    getUser: (req, res) => {
        User.find()
        .then((data) =>{
            res.json(data)
        })
        .catch((err) =>{
            res.json('Err! Please, try again')
        });
    },
    addSave: (req, res) => {
        User.findByIdAndUpdate(req.params.id , {
            $push: {
                save: req.body.save
            }
        })
        .populate('twit')
        .then((data) =>{
            res.json(data)
        })
        .catch((err) =>{
            res.json('Err! Please, try again')
        });
    }
}