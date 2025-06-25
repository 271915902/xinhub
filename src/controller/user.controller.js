const userService = require("../service/user.service");
class UserController {
  create(ctx, next) {
    const user = ctx.request.body;
    userService.create(user);
  }
}
module.exports = new UserController();
