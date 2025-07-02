const KoaRouter = require("@koa/router");
const MomentController = require("../controller/moment.controller");
const { verifyAuth } = require("../middleware/login.middleware");
const { verifyPermission } = require("../middleware/permission.middleware");
const { verifyLabelExist } = require("../middleware/label.middleware");
// 创建路由对象 评论
const momentRouter = new KoaRouter({ prefix: "/moment" });

// 新增
momentRouter.post("/", verifyAuth, MomentController.create);
// 查询列表
momentRouter.get("/", MomentController.list);
// 查询详情
momentRouter.get("/:momentId", MomentController.detail);
// 修改
momentRouter.patch(
  "/:momentId",
  verifyAuth,
  verifyPermission,
  MomentController.update
);
// 删除
momentRouter.delete(
  "/:momentId",
  verifyAuth,
  verifyPermission,
  MomentController.remove
);
// 给动态添加标签
momentRouter.post(
  "/:momentId/labels",
  verifyAuth,
  verifyPermission,
  verifyLabelExist,
  (ctx, next) => {
    ctx.body = "成";
  }
);

// 导出路由
module.exports = momentRouter;
