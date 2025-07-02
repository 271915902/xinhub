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
  async detail(ctx, next) {
    // 获取动态id
    const momentId = ctx.params.momentId;
    // 查询动态详情
    const result = await MoentService.queryById(momentId);
    ctx.body = {
      code: 0,
      data: result,
    };
  }
  async update(ctx, next) {
    // 获取动态id
    const momentId = ctx.params.momentId;
    // 获取动态内容
    const { content } = ctx.request.body;

    // 修改动态
    const result = await MoentService.updateById(content, momentId);
    ctx.body = {
      code: 0,
      data: result,
    };
  }
  async remove(ctx, next) {
    // 获取动态id
    const momentId = ctx.params.momentId;
    // 删除动态
    const result = await MoentService.removeById(momentId);
    ctx.body = {
      code: 0,
      data: result,
    };
  }
  async addLabels(ctx, next) {
    // 获取动态id
    const momentId = ctx.params.momentId;
    // 获取标签
    const { labels } = ctx;
    // 添加标签
    for (const label of labels) {
      // 判断是否存在关系
      const isExist = await MoentService.hasLabel(momentId, label.id);
      if (!isExist) {
        const result = await MoentService.addLabel(momentId, label.id);
      }
    }
    ctx.body = {
      code: 0,
      message: "添加标签成功",
    };
  }
}
module.exports = new MomentController();
