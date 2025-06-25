const KoaRouter = require("@koa/router");
const userController = require("../controller/user.controller");

// 创建路由对象
const userRouter = new KoaRouter({ prefix: "/users" });
// 定义路由映射
// 1.注册接口
userRouter.post("/", userController.create);
// 导出路由
module.exports = userRouter;
