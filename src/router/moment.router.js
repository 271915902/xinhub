const KoaRouter = require("@koa/router");
const MomentController = require("../controller/moment.controller");
const { verifyAuth } = require("../middleware/login.middleware");
// 创建路由对象 评论
const momentRouter = new KoaRouter({ prefix: "/moment" });

momentRouter.post("/", verifyAuth, MomentController.create);
momentRouter.get("/", MomentController.list);
momentRouter.get("/:momentId", MomentController.detail);

// 导出路由
module.exports = momentRouter;
