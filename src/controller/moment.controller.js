const MoentService = require("../service/moment.service");

class MomentController {
  async create(ctx, next) {
    const { content } = ctx.request.body;
    const { id } = ctx.user;
    const result = await MoentService.create(content, id);
    ctx.body = result;
  }
}
module.exports = new MomentController();
