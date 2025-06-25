const userService = require("../service/user.service");
class UserController {
  async create(ctx, next) {
    const user = ctx.request.body;
    console.log(user, "传递过来的参数");
    

    const res = await userService.create(user);
    ctx.body = {
      message: "用户创建成功！",
      data: res,
    };
  }
}
module.exports = new UserController();
