const FileService = require("../service/file.service");
class FileController {
  async create(ctx, next) {
    const { filename, mimetype, size } = ctx.request.file;
    const { id } = ctx.user;
    const result = await FileService.create(filename, mimetype, size, id);
    ctx.body = {
      code: 0,
      data: result,
      message: "头像上传成功",
    };
  }
}

module.exports = new FileController();
