const app = require("./app");
const { SERVER_PORT } = require("./config/server");
// 启动app
app.listen(SERVER_PORT, () => {
  console.log("服务器启动成功");
});
