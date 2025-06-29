const fs = require("fs");
const path = require("path");
// 自动注册路由
function registerRouter(app) {
  const files = fs.readdirSync(path.resolve(__dirname));
  for (const file of files) {
    if (!file.endsWith(".router.js")) continue;
    const router = require(`./${file}`);
    app.use(router.routes());
    app.use(router.allowedMethods());
  }
} 
module.exports = {
  registerRouter,
};
 