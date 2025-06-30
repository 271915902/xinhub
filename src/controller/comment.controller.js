const CommentService = require("../service/comment.service");

class CommentController {
  async create(ctx, next) {
    const { momentId, content } = ctx.request.body;
    const { id } = ctx.user;
    console.log(momentId, "momentID", content, id);
    const result = await CommentService.create(momentId, content, id);
    ctx.body = {
      code: 0,
      message: "评论成功",
      data: result,
    };
  }
}
module.exports = new CommentController();
