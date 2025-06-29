const connection = require("../app/database");
class MoentService {
  async create(content, userId) {
    // 拼接statement
    const statement = `INSERT INTO moment (content,user_id) VALUES (?,?);`;
    // 执行sql
    const [result] = await connection.execute(statement, [content, userId]);
    return result;
  }
}
module.exports = new MoentService();
