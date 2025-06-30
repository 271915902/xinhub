const KoaRouter = require("@koa/router");
const CommentController = require("../controller/comment.controller");
const { verifyAuth } = require("../middleware/login.middleware");

const commentRouter = new KoaRouter({ prefix: "/comment" });
// 新增评论
commentRouter.post("/", verifyAuth, CommentController.create);
// 回复评论
commentRouter.post("/reply", verifyAuth, CommentController.reply);

module.exports = commentRouter;
