const connection = require("../app/database");
class UserService {
  create(user) {
    // 操作数据库
    
    console.log(user, "参数");

  }
}
module.exports = new UserService();
