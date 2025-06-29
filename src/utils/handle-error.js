const app = require("../app");
const {
  NAME_OR_PASSWORD_IS_REQUIRED,
  NAME_ALREADY_EXISTED,
  NAME_IS_NOT_EXISTS,
  PASSWORD_IS_INCORRENT,
  UNAUTHORIZATION,
} = require("../config/error");
app.on("error", (err, ctx) => {
  let code = 0;
  let message = "";
  console.error("server error", err, ctx);
  switch (err) {
    case NAME_OR_PASSWORD_IS_REQUIRED:
      code = -10001;
      message = "用户名或密码不能为空！";
      break;
    case NAME_ALREADY_EXISTED:
      code = -10002;
      message = "用户名已存在！";
      break;
    case NAME_IS_NOT_EXISTS:
      code = -10003;
      message = "用户名不存在！";
    case PASSWORD_IS_INCORRENT:
      code = -10004;
      message = "密码不正确！";
    case UNAUTHORIZATION:
      code = -10005;
      message = "未授权！";
      break;
  }
  ctx.body = {
    code,
    message,
  };
});
