const KoaRouter = require("@koa/router");
const userController = require("../controller/user.controller");
// 导入验证中间件
const { verifyUser,handlePassword } = require("../middleware/user.middleware");
// 创建路由对象
const userRouter = new KoaRouter({ prefix: "/users" });

// 定义路由映射
// 注册接口
userRouter.post("/", verifyUser, handlePassword, userController.create);
// 导出路由
module.exports = userRouter;
