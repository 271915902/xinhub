const MoentService = require("../service/moment.service");

class MomentController {
  async create(ctx, next) {
    const { content } = ctx.request.body;
    const { id } = ctx.user;
    const result = await MoentService.create(content, id);
    ctx.body = result;
  }
  async list(ctx, next) {
    // 获取分页参数
    const { size, offset } = ctx.query;
    const result = await MoentService.queryList(size, offset);
    ctx.body = {
      code: 0,
      data: result,
    };
  }
}
module.exports = new MomentController();
