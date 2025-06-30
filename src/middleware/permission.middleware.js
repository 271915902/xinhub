const { OPERATION_IS_NOT_ALLOWED } = require("../config/error");
const PermissionService = require("../service/permission.service");

const verifyPermission = async (ctx, next) => {
  const { id } = ctx.user;
  // 1.获取资源的key
  const [resourceKey] = Object.keys(ctx.params);
  const tableName = resourceKey.replace("Id", "");
  const resourceId = ctx.params[resourceKey];
  console.log(tableName, resourceId, "资源标识");
  const isPermission = await PermissionService.checkResource(
    tableName,
    resourceId,
    id
  );
  if (!isPermission)
    return ctx.app.emit("error", OPERATION_IS_NOT_ALLOWED, ctx);
  await next();
};

module.exports = {
  verifyPermission,
};
