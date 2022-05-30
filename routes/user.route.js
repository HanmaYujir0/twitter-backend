const { Router } =require('express')

const { userController } = require('../controllers/user.controller')

const router = Router();

router.post('/user', userController.postUser)
router.get('/user', userController.getUser)
router.get('/user/:id',userController.getUserById)
router.delete('/user/:id', userController.deleteUser)
router.patch('/user/:id/twit/', userController.addSave)
router.patch('/user/:id', userController.patchUser)

module.exports = router