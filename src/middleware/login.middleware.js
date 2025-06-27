const {
  NAME_OR_PASSWORD_IS_REQUIRED,
  NAME_IS_NOT_EXISTS,
  PASSWORD_IS_INCORRENT,
} = require("../config/error");
const userService = require("../service/user.service");
const md5Password = require("../utils/md5-password");
const verifyLogin = async (ctx, next) => {
  const { name, password } = ctx.request.body;
  // 判断参数必填
  if (!name || !password) {
    return ctx.app.emit("error", NAME_OR_PASSWORD_IS_REQUIRED, ctx);
  }
  // 检查是否存在用户
  const result = await userService.findUserByName(name);
  const user = result[0];
  if (!user) {
    return ctx.app.emit("error", NAME_IS_NOT_EXISTS, ctx);
  }
  // 检查密码是否正确
  if (md5Password(password) !== user.password) {
    return ctx.app.emit("error", PASSWORD_IS_INCORRENT, ctx);
  }
  // 讲user挂载到ctx上
  ctx.user = user;
  console.log(user, "查用户");
  await next();
};

module.exports = {
  verifyLogin,
};
