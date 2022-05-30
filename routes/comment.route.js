const { Router } = require("express");

const { commentController } = require("../controllers/comment.controller");

const router = Router();

router.post("/comment", commentController.postComment);
router.get("/comment", commentController.getComment);
router.delete("/comment/:id", commentController.deleteComment);
router.patch("/comment/:id", commentController.patchComment);

module.exports = router;