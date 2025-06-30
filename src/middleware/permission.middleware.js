const { OPERATION_IS_NOT_ALLOWED } = require("../config/error");
const PermissionService = require("../service/permission.service");
const verifyMomentPermission = async (ctx, next) => {
  // 1.获取动态id
  const { momentId } = ctx.params;
  const { id } = ctx.user;
  const isPermission = await PermissionService.checkMoment(momentId, id);
  console.log(isPermission, "有没有权限");
  if (!isPermission) {
    return ctx.app.emit("error", OPERATION_IS_NOT_ALLOWED, ctx);
  }
  await next();
};
module.exports = {
  verifyMomentPermission,
};
