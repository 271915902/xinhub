const KoaRouter = require("@koa/router");

// 创建路由对象
const userRouter = new KoaRouter({ prefix: "/users" });
// 定义路由映射
userRouter.get("/list", (ctx, next) => {
  ctx.body = "初始化";
});
// 导出路由
module.exports = userRouter;
