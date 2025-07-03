const userService = require("../service/user.service");
const fileService = require("../service/file.service");
const fs = require("fs");
const { UPLOAD_PATH } = require("../config/path");
class UserController {
  async create(ctx, next) {
    const user = ctx.request.body;
    const res = await userService.create(user);
    ctx.body = {
      message: "用户创建成功！",
      data: res,
    };
  }
  async showAvatarImagae(ctx, next) {
    const { userId } = ctx.params;
    const { filename, mimetype } = await fileService.queryAvatarWithUserId(
      userId
    );
    console.log(filename, mimetype, "文件信息");
    ctx.type = mimetype;
    ctx.body = fs.createReadStream(`./${UPLOAD_PATH}/${filename}`);
  }
}
module.exports = new UserController();
