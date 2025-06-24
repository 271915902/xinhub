const Koa = require("koa");
const KoaRouter = require("@koa/router");
const app = new Koa();

const userRouter = new KoaRouter({ prefix: "/users" });
userRouter.get("/list", (ctx, next) => {
  ctx.body = "初始化";
});

app.use(userRouter.routes());
app.use(userRouter.allowedMethods());
app.listen(8000, () => {
  console.log("服务器启动成功");
});
