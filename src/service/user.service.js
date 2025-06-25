const connection = require("../app/database");
class UserService {
  async create(user) {
    // 拿到用户
    const { name, password } = user;
    // 拼接statement
    const statement = `INSERT INTO user (name,password) VALUES (?,?);`;
    // 执行sql
    const [result] = await connection.execute(statement, [name, password]);
    return result;
  }
}
module.exports = new UserService();
