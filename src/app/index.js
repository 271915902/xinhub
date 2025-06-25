const Koa = require("koa");
const userRouter = require("../router/user.router");
// 创建app
const app = new Koa();

app.use(userRouter.routes());
app.use(userRouter.allowedMethods());

module.exports = app;