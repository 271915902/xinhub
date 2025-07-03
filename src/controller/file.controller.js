class FileController {
  async create(ctx, next) {
    ctx.body = "上传成功";
  }
}

module.exports = new FileController();
