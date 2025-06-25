const userService = require("../service/user.service");
const md5Password = require("../utils/md5-password");
const {
  NAME_OR_PASSWORD_IS_REQUIRED,
  NAME_ALREADY_EXISTED,
} = require("../config/error");
// 验证用户信息中间件
const verifyUser = async (ctx, next) => {
  const user = ctx.request.body;
  // 验证用户名和密码是否为空
  if (!user.name || !user.password) {
    return ctx.app.emit("error", NAME_OR_PASSWORD_IS_REQUIRED, ctx);
  }
  // 验证用户名是否重复
  const name = await userService.findUserByName(user.name);
  if (name.length) {
    return ctx.app.emit("error", NAME_ALREADY_EXISTED, ctx);
  }
  await next();
};
// 加密密码
const handlePassword = async (ctx, next) => {
  const { password } = ctx.request.body;
  ctx.request.body.password = md5Password(password);
  await next();
};

module.exports = {
  verifyUser,
  handlePassword
};
