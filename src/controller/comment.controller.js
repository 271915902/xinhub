const CommentService = require("../service/comment.service");

class CommentController {
  async create(ctx, next) {
    const { momentId, content } = ctx.request.body;
    const { id } = ctx.user;

    const result = await CommentService.create(momentId, content, id);
    ctx.body = {
      code: 0,
      message: "评论成功",
      data: result,
    };
  }
  async reply(ctx, next) {
    const { commentId, momentId, content } = ctx.request.body;
    const { id } = ctx.user;
    const result = await CommentService.reply(commentId, momentId, content, id);
    ctx.body = {
      code: 0,
      message: "回复成功",
      data: result,
    };
  }
}
module.exports = new CommentController();
