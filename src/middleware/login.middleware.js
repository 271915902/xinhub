const {
  NAME_OR_PASSWORD_IS_REQUIRED,
  NAME_IS_NOT_EXISTS,
  PASSWORD_IS_INCORRENT,
  UNAUTHORIZATION,
} = require("../config/error");
const jwt = require("jsonwebtoken");
const { PUBLIC_KEY } = require("../config/screct");
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
  await next();
};
const verifyAuth = async (ctx, next) => {
  console.log(ctx.user, "ctx.user");
  // 获取token
  const token = ctx.header.authorization?.replace("Bearer ", "");
  try {
    const result = jwt.verify(token, PUBLIC_KEY.toString(), {
      algorithms: ["RS256"],
    });
    // token信息放在ctx里
    ctx.user = result;
    await next();
  } catch (error) {
    ctx.app.emit("error", UNAUTHORIZATION, ctx);
  }
};
module.exports = {
  verifyLogin,
  verifyAuth,
};
