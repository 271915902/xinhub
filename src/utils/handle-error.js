const app = require("../app");
const {
  NAME_OR_PASSWORD_IS_REQUIRED,
  NAME_ALREADY_EXISTED,
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
  }
  ctx.body = {
    code,
    message,
  };
});
