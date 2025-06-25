const userService = require("../service/user.service");
class UserController {
  async create(ctx, next) {
    const user = ctx.request.body;
    console.log(user, "传递过来的参数");
    // 验证用户名和密码是否为空
    if (!user.name || !user.password) {
      ctx.body = {
        code: -10001,
        message: "用户名或密码不能为空！",
      };
      return;
    }
    // 验证用户名是否重复
    const name = await userService.findUserByName(user.name);
    if (name.length) {
      ctx.body = {
        code: -10002,
        message: "用户名已存在！",
      };
      return;
    }

    const res = await userService.create(user);
    ctx.body = {
      message: "用户创建成功！",
      data: res,
    };
  }
}
module.exports = new UserController();
