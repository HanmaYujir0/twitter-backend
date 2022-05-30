const { Router } = require('express')

const { twitController } = require('../controllers/twit.controller')

const router = Router()

router.post('/twit', twitController.postTwit);
router.delete('/twit/:id', twitController.deleteTwit);
router.get('/twit', twitController.getTwit);
router.get('/twit', twitController.getTwitById);
router.patch('/twit', twitController.patchTwit);
router.patch('/twit/like/:id', twitController.addLike);

module.exports = router