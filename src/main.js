const app = require("./app");
const { SERVER_PORT } = require("./config/server");
require("./utils/handle-error")
// 启动app
app.listen(SERVER_PORT, () => {
  console.log("服务器启动成功");
});
