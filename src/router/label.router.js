const KoaRouter = require("@koa/router");
const LabelController = require("../controller/label.controller");

const { verifyAuth } = require("../middleware/login.middleware");

const labelRouter = new KoaRouter({ prefix: "/label" });

labelRouter.post("/", verifyAuth, LabelController.create);

module.exports = labelRouter;
