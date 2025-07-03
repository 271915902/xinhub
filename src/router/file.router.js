const KoaRouter = require("@koa/router");
const { handleAvatar } = require("../middleware/file.middleware");
const { verifyAuth } = require("../middleware/login.middleware");
const FileController = require("../controller/file.controller");

const fileRouter = new KoaRouter({ prefix: "/file" });

//上传头像
fileRouter.post("/avatar", verifyAuth, handleAvatar, FileController.create);

module.exports = fileRouter;
